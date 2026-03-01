/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

import axiosInstance from "@/lib/api";
import {
  LoginRequest,
  SignupRequest,
  AuthResponse,
  ForgotPasswordRequest,
  VerifyOTPRequest,
  ResetPasswordRequest,
} from "@/types/auth.types";

export const authService = {
  /**
   * Login user with email and password
   */
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      data,
    );
    return response.data;
  },

  /**
   * Sign up new user
   */
  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/signup",
      data,
    );
    return response.data;
  },

  /**
   * Request password reset
   */
  forgotPassword: async (
    data: ForgotPasswordRequest,
  ): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/forgot-password",
      data,
    );
    return response.data;
  },

  /**
   * Verify OTP
   */
  verifyOTP: async (data: VerifyOTPRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/verify-otp",
      data,
    );
    return response.data;
  },

  /**
   * Reset password with token
   */
  resetPassword: async (data: ResetPasswordRequest): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      "/auth/reset-password",
      data,
    );
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    await axiosInstance.post("/auth/logout");
  },

  /**
   * Refresh access token
   */
  refreshToken: async (): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>("/auth/refresh");
    return response.data;
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  },
};
