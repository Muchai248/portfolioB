import React from "react";

function Container() {
  return (
    <>
    <header className="fixed items-center text-5xl font-medium left-52 top-44 ">Mark Muchai Mwaura</header><br/>
    <div className="fixed left-52 top-64">
      <h1 className="flex items-center text-4xl font-medium ">
        I build
        <span className="relative ml-3 h-[1em] w-80 overflow-hidden">
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.25s]">
            Components
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.20s]">
            Pages
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.16s]">
            Applications
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.06s]">
            Animations
          </span>
        </span>
      </h1>
      <br />
      <hr className="fixed border-2 border-orange-500 w-1/2"></hr>
    </div>
    </>
  );
}

export default Container;
