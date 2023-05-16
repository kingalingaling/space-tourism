import { useState } from 'react' //modular import
// import React from 'react' //named import

import { links } from "../data/extracts";

import LogoIcon from "/assets/images/icons/logo.svg";
import MenuIcon from "/assets/images/icons/menu.svg";

import MobileMenu from './MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onSetIsOpen = (newIsOpen: any) => {
    setIsOpen(newIsOpen)
  }

  return (
    <>
      <nav className="flex w-full font-barlow-condensed justify-between sm:pl-9 pt-5 md:pt-0 lg:pt-5">
        <div className="mr-6 flex flex-shrink-0 items-center text-white pl-5">
          <img src={LogoIcon} className="" />
        </div>

        <div className="z-10 ml-11 hidden w-1/3 pl-1 lg:block">
          <hr className="z-10 absolute ml-auto mt-7 h-px w-1/3" />
        </div>

        <ul className="z-0 hidden md:flex text-xs flex-row justify-center items-center bg-white bg-opacity-5 uppercase tracking-slimmer backdrop-blur-lg backdrop-filter h-20 lg:h-14 w-3/5 pr-3">
          {links.map((el) => (
            <li className="mx-5" key={el.id}>
              <a href={el.url}>
                <i className="pr-3 hidden lg:inline">{el.id}</i>{el.page}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex pr-5 md:hidden">
          <img src={MenuIcon} onClick={() => {
            setIsOpen(true)
          }}/>
        </div>
      </nav>

      <MobileMenu show={isOpen} onSetIsOpen={onSetIsOpen} />
    </>
  );
};

export default Header;
