import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Logo */}
      <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-md bg-[#FF7A3D]">
        <div className="flex gap-[2px]">
          <div className="h-6 w-1 rotate-[-30deg] rounded bg-white" />
          <div className="h-6 w-1 rotate-[-30deg] rounded bg-white" />
          <div className="h-6 w-1 rotate-[-30deg] rounded bg-white" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Set Up Your Admin Profile
      </h1>

      <p className="mt-2 mb-10 text-center text-sm text-gray-500">
        Register to take charge of your library system
      </p>

      <form className="w-full space-y-5">
        <AuthInput
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />

        <AuthInput
          label="Email Address"
          placeholder="yourname@example.com"
          type="email"
        />

        <AuthInput
          label="Password"
          placeholder="Create a secure password"
          type={showPassword ? "text" : "password"}
          icon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          }
        />

        <AuthInput
          label="Confirm Password"
          placeholder="Re-enter your password"
          type={showConfirmPassword ? "text" : "password"}
          icon={
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={18} className="text-gray-400" />
              ) : (
                <Eye size={18} className="text-gray-400" />
              )}
            </button>
          }
        />

        <div className="pt-3">
          <AuthButton>Register</AuthButton>
        </div>
      </form>

      <p className="mt-8 text-sm text-gray-500">
        Already have an account?{" "}
        <button
          type="button"
          className="font-medium text-[#FF7A3D] hover:underline"
        >
          Login Here
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;