import { useState } from "react";
import CloseIcon from "../assets/images/icons/close.svg";

const MobileMenu = (props: any) => {
  const handleChangeState = () => {
    props.onSetIsOpen(false)
  }
  return (
    props.show && (
      <div className="z-99 absolute right-0 top-0 h-full w-2/3 p-7 backdrop-blur-2xl backdrop-filter">
        <div className="mb-20 flex flex-row-reverse">
          <img
            className=" h-auto w-7"
            src={CloseIcon}
            alt=""
            onClick={() => {
              handleChangeState();
            }}
          />
        </div>
        <ul className="text-md tracking-slim">
          <li className="mb-7">
            <span className="mr-3 font-semibold">00</span>Home
          </li>
          <li className="mb-7">
            <span className="mr-3 font-semibold">01</span>Destination
          </li>
          <li className="mb-7">
            <span className="mr-3 font-semibold">02</span>Crew
          </li>
          <li className="">
            <span className="mr-3 font-semibold">03</span>Technology
          </li>
        </ul>
      </div>
    )
  )
};

export default MobileMenu;
