// components/Button.tsx

"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={` rounded-md bg-[#001845] py-3 text-white font-medium shadow-lg ring-offset-2 transition hover:bg-[#002B7F] active:scale-95 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
