import { useState } from "react";
import BurgerIcon from "./Burger";
import Logo from "./Logo";

const CrossSvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
    <path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
    <path fill="#fff" d="m1.414.333 21.92 21.92-1.414 1.414L0 1.747z" />
    <path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
    <path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
    <path fill="#fff" d="m23.334 1.747-21.92 21.92-1.415-1.414L21.92.333z" />
  </svg>
);

const rightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-6 w-6"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14 5 7 7m0 0-7 7m7-7H3"
    />
  </svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container max-w-6xl mx-auto absolute z-10 top-0 left-0 right-0">
      <div className="flex justify-between items-center px-">
        <Logo className={"fill-black h-20"} />
        {!open && (
          <BurgerIcon className="md:hidden" onClick={() => setOpen(true)} />
        )}
        {open && <CrossSvgIcon className="" onClick={() => setOpen(false)} />}
        <button className="hidden md:block text-white bg-gray-900 bg-opacity-60 px-8 py-2 rounded-lg hover:bg-black hover:text-cyan-500 ">
          Uni paycheck
        </button>
      </div>
      {open && (
        <button className="text-white flex transition-transform justify-between bg-gray-900 bg-opacity-60 px-8 py-4 w-full">
          Uni paycheck
          {rightArrow}
        </button>
      )}
    </header>
  );
};

export default Header;
