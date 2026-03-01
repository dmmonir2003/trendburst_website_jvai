/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * useAuth Hook
 * Custom hook for authentication logic and user state management
 */

"use client";

import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import {
  User,
  LoginRequest,
  SignupRequest,
  AuthResponse,
} from "@/types/auth.types";
import { toast } from "sonner";

interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
  login: (data: LoginRequest) => Promise<void>;
  signup: (data: SignupRequest) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [isInitialized, setIsInitialized] = useState(false);

  // Fetch current user
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["auth", "user"],
    queryFn: async () => {
      try {
        const response = await authService.getCurrentUser();
        return response.data as User;
      } catch {
        return null;
      }
    },
    enabled: isInitialized,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await authService.login(data);
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        if (response.data.refreshToken) {
          localStorage.setItem("refreshToken", response.data.refreshToken);
        }
      }
      return response;
    },
    onSuccess: () => {
      toast.success("Logged in successfully");
      // Refetch user
    },
    onError: (error) => {
      toast.error("Login failed");
    },
  });

  // Signup mutation
  const signupMutation = useMutation({
    mutationFn: async (data: SignupRequest) => {
      const response = await authService.signup(data);
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        if (response.data.refreshToken) {
          localStorage.setItem("refreshToken", response.data.refreshToken);
        }
      }
      return response;
    },
    onSuccess: () => {
      toast.success("Account created successfully");
    },
    onError: () => {
      toast.error("Signup failed");
    },
  });

  // Initialize auth check on mount
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("Logged out successfully");
  };

  const refreshTokenFn = async () => {
    try {
      const response = await authService.refreshToken();
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
    } catch (error) {
      logout();
      throw error;
    }
  };

  return {
    user: user ?? null,
    isAuthenticated: !!user,
    isLoading: isLoading || loginMutation.isPending || signupMutation.isPending,
    isError,
    login: async (data: LoginRequest) => {
      await loginMutation.mutateAsync(data);
    },
    signup: async (data: SignupRequest) => {
      await signupMutation.mutateAsync(data);
    },
    logout,
    refreshToken: refreshTokenFn,
  };
}
