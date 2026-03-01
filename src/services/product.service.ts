/**
 * Product Service
 * Handles all product-related API calls
 */

import axiosInstance from "@/lib/api";
import {
  ProductsResponse,
  ProductDetailResponse,
  WishlistResponse,
  ActivityLogsResponse,
} from "@/types/product.types";

export const productService = {
  /**
   * Get trending products
   */
  getTrendingProducts: async (
    page = 1,
    limit = 10,
  ): Promise<ProductsResponse> => {
    const response = await axiosInstance.get<ProductsResponse>(
      `/products/trending?page=${page}&limit=${limit}`,
    );
    return response.data;
  },

  /**
   * Get all products
   */
  getProducts: async (
    page = 1,
    limit = 10,
    filters?: Record<string, unknown>,
  ) => {
    const response = await axiosInstance.get<ProductsResponse>("/products", {
      params: { page, limit, ...filters },
    });
    return response.data;
  },

  /**
   * Get product by ID
   */
  getProductById: async (id: string): Promise<ProductDetailResponse> => {
    const response = await axiosInstance.get<ProductDetailResponse>(
      `/products/${id}`,
    );
    return response.data;
  },

  /**
   * Get user's wishlist
   */
  getWishlist: async (): Promise<WishlistResponse> => {
    const response = await axiosInstance.get<WishlistResponse>("/wishlist");
    return response.data;
  },

  /**
   * Add product to wishlist
   */
  addToWishlist: async (productId: string): Promise<{ success: boolean }> => {
    const response = await axiosInstance.post("/wishlist", { productId });
    return response.data;
  },

  /**
   * Remove product from wishlist
   */
  removeFromWishlist: async (
    productId: string,
  ): Promise<{ success: boolean }> => {
    const response = await axiosInstance.delete(`/wishlist/${productId}`);
    return response.data;
  },

  /**
   * Get activity logs
   */
  getActivityLogs: async (limit = 50): Promise<ActivityLogsResponse> => {
    const response = await axiosInstance.get<ActivityLogsResponse>(
      `/activity-logs?limit=${limit}`,
    );
    return response.data;
  },
};
