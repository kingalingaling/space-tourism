// import { useState } from "react";
import CloseIcon from "/assets/images/icons/close.svg";
import { links } from "../data/extracts";

const MobileMenu = (props: any) => {

  const handleChangeState = () => {
    props.onSetIsOpen(false)
  }
  return (
    props.show && (
      <div className="z-50 absolute right-0 top-0 h-full w-2/3 p-7 backdrop-blur-2xl backdrop-filter">
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
          {/* Mapping the links to avoid repetition on elements */}
          {links.map((el) => (
            <li className="mb-7" key={el.id}>
              <a href={el.url}>
                <i className="mr-3 font-semibold not-italic">{el.id}</i>{el.page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  )
};

export default MobileMenu;
