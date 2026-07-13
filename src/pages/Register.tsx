import RegisterForm from "../components/auth/RegisterForm";
import AuthRightPanel from "../components/auth/AuthRightPanel";

const Register = () => {
  return (
    <main className="min-h-screen bg-[#F8F6F2]">
      <div
        className="
          flex
          flex-col
          lg:grid
          lg:grid-cols-2
          min-h-screen
        "
      >
        {/* Right panel first on tablet/mobile */}
        <section className="order-1 lg:order-2">
          <AuthRightPanel />
        </section>

        {/* Form */}
        <section
  className="
    order-2
    lg:order-1

    flex
    items-center
    justify-center

    bg-white

    px-6
    py-10

    md:px-10
    md:py-14

    lg:px-16
  "
>
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;