import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <>
      <header className="h-12 flex justify-between bg-black text-white p-2 align-middle">
        <div className="div1 object-fill">
          <img src="https://rb.gy/it5msp" className="w-6 h-3" alt="karan" />
        </div>
        <div className="hidden lg:flex">
          <ul className="space-x-10 flex">
            <li className=" decoration-un">Download</li>
            <li>Why Discord?</li>
            <li>Nitro</li>
            <li>Safety</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="space-x-10 flex">
          <button className="px-3 bg-white text-black rounded-full">
            Sign in
          </button>
          <MenuIcon className="flex lg:hidden" />
        </div>
      </header>
    </>
  );
}

export default Header;
