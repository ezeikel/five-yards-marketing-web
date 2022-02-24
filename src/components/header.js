import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = () => (
  <nav
    className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
    aria-label="Global"
  >
    <div className="flex items-center flex-1">
      <div className="flex items-center justify-between w-full md:w-auto">
        <a href="#">
          <span className="sr-only">Five Yards</span>
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </a>
      </div>
    </div>
    <div className="hidden md:block text-right">
      <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
        >
          Sign up
        </a>
      </span>
    </div>
  </nav>
);

export default Header;
