"use client";
export function Input({
  icon,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <input
        {...props}
        className="peer w-full rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-sm placeholder-gray-400 focus:border-[#001845] focus:ring-2 focus:ring-[#001845]/20"
      />
      {icon && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}
    </div>
  );
}
