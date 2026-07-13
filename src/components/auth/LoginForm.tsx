import { Link } from "react-router-dom";
import Logo from "../Logo";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Logo */}
      <div className="mb-10">
        <Logo />
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-gray-900">
        Welcome Back, Librarian
      </h1>

      <p className="mt-2 mb-10 text-center text-sm text-gray-500">
        Access your library dashboard and manage with confidence
      </p>

      <form className="w-full space-y-5">
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="yourname@example.com"
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-500">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[#FF7A3D] focus:ring-[#FF7A3D]"
            />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="font-medium text-[#FF7A3D] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="pt-2">
          <AuthButton type="submit">Login</AuthButton>
        </div>
      </form>

      <p className="mt-8 text-sm text-gray-500">
        New to Libra?{" "}
        <Link
          to="/"
          className="font-medium text-[#FF7A3D] hover:underline"
        >
          Create an Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;