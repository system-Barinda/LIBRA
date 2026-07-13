import dashboardPreview from "../../assets/dashboard-preview.png";

const AuthRightPanel = () => {
  return (
    <div className="relative flex h-full min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F6EFE6] px-12 py-16">
      {/* Decorative Background */}
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-orange-200 opacity-30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex max-w-xl flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-xl bg-[#FF7A3D] shadow-lg">
          <div className="flex gap-[3px]">
            <div className="h-8 w-1.5 rotate-[-30deg] rounded bg-white" />
            <div className="h-8 w-1.5 rotate-[-30deg] rounded bg-white" />
            <div className="h-8 w-1.5 rotate-[-30deg] rounded bg-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="max-w-md text-4xl font-bold leading-tight text-gray-900">
          Maintain the Heart of the Library
        </h2>

        {/* Subtitle */}
        <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
          Streamline daily operations, empower librarians, and create a better
          experience for every reader.
        </p>

        {/* Dashboard Preview */}
        <div className="mt-14 w-full">
          <div className="overflow-hidden rounded-3xl bg-white p-5 shadow-2xl">
            <img
              src={dashboardPreview}
              alt="Library Dashboard"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRightPanel;