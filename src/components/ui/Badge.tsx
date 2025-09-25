import * as React from "react";

export function Badge({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
