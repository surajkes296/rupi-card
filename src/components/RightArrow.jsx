const RightArrow = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-6 w-6"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14 5 7 7m0 0-7 7m7-7H3"
      />
    </svg>
  );
};

export default RightArrow;
