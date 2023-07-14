const Apply = ({
  className,
  labelClassName,
}) => {
  return (
    <div className={className}>
      <div className="md:bg-black p-1 md:w-fit rounded-lg  w-full max-w-sm">
        <input
          className="md:inline min-h-full p-2 bg-black text-white focus:outline-none"
          placeholder="Enter Phone Number"
        />
        <button className="bg-yellow-200 rounded-lg px-4 md:py-2">
          Apply Now
        </button>
      </div>
      <label className={`md:flex mt-4 max-w-xs ${labelClassName || ""}`}>
        <input type="checkbox" className="mr-2 accent-slate-50" />
        <span className="text-black text-[10px] line-clamp-2">
          You agree to be contacted by Uni Cards over Call, SMS, Email or
          WhatsApp to guide you through your application.
        </span>
      </label>
    </div>
  );
};

export default Apply;
