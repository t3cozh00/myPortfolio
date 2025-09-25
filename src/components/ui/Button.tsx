import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline: "border border-slate-300 text-slate-900 hover:bg-slate-50",
    ghost: "text-slate-700 hover:bg-slate-100",
  } as const;
  const sizes = {
    default: "h-10",
    sm: "h-9 px-3",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10 p-0",
  } as const;
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
