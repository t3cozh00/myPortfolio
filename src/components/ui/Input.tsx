import * as React from "react";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-400 ${className}`}
      {...props}
    />
  );
}
