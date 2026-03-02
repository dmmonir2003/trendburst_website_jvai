"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

type ButtonVariantType =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "iconButton";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  className?: string;
}

/**
 * Primary Button - Cyan background with dark text
 * Used for main CTAs like "Get Started"
 */
export const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  className,
  loading,

  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-all duration-200",
        "flex items-center gap-2  justify-center whitespace-nowrap",
        sizeClasses[size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon size={20} />}
      {children}
      {iconPosition === "right" && Icon && <Icon size={20} />}
    </button>
  );
};

/**
 * Secondary Button - Purple background
 * Used for alternative actions
 */
export const SecondaryButton: React.FC<CustomButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  className,
  loading,

  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "bg-secondary hover:bg-secondary/90 text-foreground font-semibold rounded-lg transition-all duration-200",
        "flex items-center gap-2  justify-center whitespace-nowrap",
        sizeClasses[size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon size={20} />}
      {children}
      {iconPosition === "right" && Icon && <Icon size={20} />}
    </button>
  );
};

/**
 * Outline Button - Border style with transparent background
 * Used for secondary actions like "View Pricing"
 */
export const OutlineButton: React.FC<CustomButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  className,
  loading,

  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-200 cursor-pointer",
        "flex items-center gap-2  justify-center whitespace-nowrap",
        sizeClasses[size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon size={20} />}
      {children}
      {iconPosition === "right" && Icon && <Icon size={20} />}
    </button>
  );
};

/**
 * Ghost Button - Dark background with light text
 * Used for secondary actions like "Reach Out"
 */
export const GhostButton: React.FC<CustomButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  className,
  loading,

  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={cn(
        "bg-black/20 hover:bg-black/40 text-foreground font-semibold rounded-lg transition-all duration-200 cursor-pointer",
        "flex items-center gap-2  justify-center whitespace-nowrap",
        sizeClasses[size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon size={20} />}
      {children}
      {iconPosition === "right" && Icon && <Icon size={20} />}
    </button>
  );
};

/**
 * Icon Button - Square button for icons
 * Used for action buttons with only icons
 */
export const IconButton: React.FC<
  Omit<CustomButtonProps, "children"> & { icon: LucideIcon }
> = ({ icon: Icon, size = "md", className, loading, ...props }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <button
      className={cn(
        "bg-primary hover:bg-primary/90 text-background font-semibold rounded-lg transition-all duration-200 cursor-pointer",
        "flex items-center justify-center ",
        sizeClasses[size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      <Icon size={size === "sm" ? 16 : size === "md" ? 20 : 24} />
    </button>
  );
};

/**
 * Unified Button Component
 * Use this for maximum flexibility
 */
export const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  children,
  icon: Icon,
  iconPosition = "right",
  size = "md",
  className,
  loading,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-primary hover:bg-primary/90 text-background cursor-pointer",
    secondary:
      "bg-secondary hover:bg-secondary/90 text-foreground cursor-pointer",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/10 cursor-pointer",
    ghost: "bg-black/20 hover:bg-black/40 text-foreground cursor-pointer",
    iconButton:
      "bg-primary hover:bg-primary/90 text-background w-10 h-10 px-0 cursor-pointer",
  };

  return (
    <button
      className={cn(
        "font-semibold rounded-lg transition-all duration-200",
        "flex items-center gap-2 justify-center  whitespace-nowrap",
        variantClasses[variant],
        sizeClasses[variant === "iconButton" ? "md" : size],
        loading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={loading}
      {...props}
    >
      {iconPosition === "left" && Icon && <Icon size={20} />}
      {variant !== "iconButton" && children}
      {iconPosition === "right" && Icon && <Icon size={20} />}
    </button>
  );
};

/**
 * Get Started Button - With arrow icon
 * Pre-configured for common use case
 */
export const GetStartedButton: React.FC<
  Omit<CustomButtonProps, "icon" | "iconPosition"> & { showArrow?: boolean }
> = ({
  children = "Get Started",
  size = "md",
  className,
  showArrow = true,

  ...props
}) => {
  return (
    <PrimaryButton
      icon={showArrow ? ArrowRight : undefined}
      iconPosition="right"
      size={size}
      className={className}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
};
