import { ReactNode } from "react";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
}

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
}: AuthInputProps) => {
  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            pr-12
            text-sm
            text-gray-700
            placeholder:text-gray-400
            outline-none
            transition-all
            duration-200
            focus:border-[#FF7A3D]
            focus:ring-4
            focus:ring-orange-100
          "
        />

        {icon && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthInput;