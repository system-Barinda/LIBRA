const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316] shadow-md">
        <div className="flex gap-[3px]">
          <div className="h-6 w-[5px] rotate-[-30deg] rounded-full bg-white" />
          <div className="h-6 w-[5px] rotate-[-30deg] rounded-full bg-white" />
          <div className="h-6 w-[5px] rotate-[-30deg] rounded-full bg-white" />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          LIBRA
        </h1>

        <p className="text-xs tracking-[4px] text-gray-500 uppercase">
          Library Management
        </p>
      </div>
    </div>
  );
};

export default Logo;