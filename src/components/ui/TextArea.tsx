import * as React from "react";
export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      className={`w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-400 ${className}`}
      {...props}
    />
  );
}
