import Logo from "../Logo";
import dashboardPreview from "../../assets/dashboard-preview.png";

const AuthRightPanel = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6EFE6]

        flex
        flex-col
        items-center

        px-6
        py-8

        md:px-12
        md:py-14

        lg:h-screen
        lg:justify-center
      "
    >
      {/* Background */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-200 opacity-30 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col items-center text-center">
        {/* Logo */}
        <Logo />

        {/* Heading */}
        <h2
          className="
            mt-8
            text-3xl
            font-bold
            leading-tight
            text-gray-900

            md:mt-10
            md:text-4xl

            lg:text-5xl
          "
        >
          Maintain the Heart of the Library
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-4
            max-w-sm
            text-sm
            leading-6
            text-gray-600

            md:max-w-xl
            md:text-base
          "
        >
          Handle book records, member data, and library services with ease.
        </p>

        {/* Dashboard Image */}
        <div
          className="
            mt-8

            w-full
            max-w-md

            md:mt-12
            md:max-w-2xl

            lg:max-w-3xl
          "
        >
          <img
            src={dashboardPreview}
            alt="Dashboard Preview"
            className="
              w-full
              rounded-[28px]
              object-cover

              shadow-[0_30px_70px_rgba(0,0,0,0.15)]

              md:rounded-[32px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default AuthRightPanel;