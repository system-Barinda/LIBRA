import RegisterForm from "../components/auth/RegisterForm";
import AuthRightPanel from "../components/auth/AuthRightPanel";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:block">
          <AuthRightPanel />
        </div>
      </div>
    </div>
  );
};

export default Register;