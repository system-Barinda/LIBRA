import type { ButtonHTMLAttributes, ReactNode } from "react";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const AuthButton = ({
  children,
  className = "",
  ...props
}: AuthButtonProps) => {
  return (
    <button
      {...props}
      className={`
        w-full
        rounded-xl
        bg-[#FF7A3D]
        py-3.5
        text-base
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#ff6b2b]
        hover:shadow-lg
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default AuthButton;