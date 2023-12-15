import React from "react";

function Container() {
  return (
    <>
    <header className="fixed items-center text-5xl font-medium left-52 top-1/3 text-green-500 ">Mark Muchai Mwaura</header><br/>
    <div className="fixed left-52 top-1/2">
      <h1 className="flex items-center text-5xl font-medium ">I build</h1>
      <h2 className="flex items-center text-4xl font-medium ">
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
      </h2>
      <br />
      <h3 className="flex items-center text-5xl font-medium">for the web.</h3>
      <br/>
      <hr className="fixed border-2 border-orange-500 w-1/2"></hr>
      <p className="fixed items-center text-6xl font-medium left-52 top-3/4">A software engineer based in Africa who builds applications and websites.</p>
    </div>
    </>
  );
}

export default Container;
