import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  name,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-gray-200
            bg-[#FCFCFC]
            px-5
            py-4
            pr-14
            text-sm
            text-gray-700
            placeholder:text-gray-400
            outline-none
            transition-all
            duration-300
            focus:border-[#F97316]
            focus:bg-white
            focus:ring-4
            focus:ring-orange-100
          "
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
            transition
            hover:text-[#F97316]
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;