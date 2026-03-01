/**
 * useUser Hook
 * Custom hook for user-related queries
 */

"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import { User } from "@/types/auth.types";

export function useUser() {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await authService.getCurrentUser();
        return response.data as User;
      } catch {
        return null;
      }
    },
  });

  return {
    user: user ?? null,
    isLoading,
    isError,
    error,
  };
}
