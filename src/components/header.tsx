import Logo from "../assets/images/icons/logo.svg";
import Menu from "../assets/images/icons/menu.svg";

const Header = () => {
  return (
    <nav className="flex w-screen justify-between px-6 lg:justify-center">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <img src={Logo} className="" />
      </div>

      <div className="z-1 ml-11 hidden w-1/3 pl-8 md:block">
        <hr className="z-1 absolute ml-auto mt-9 h-px w-1/3 pt-5" />
      </div>

      <ul className="hidden md:flex flex-row justify-center items-center bg-opacity-60 uppercase tracking-slimmer backdrop-blur-xl backdrop-filter md:h-28">
        <li className="mx-5 ">
          <span className="pr-3 font-semibold">00</span>Home
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold">01</span>Destination
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold">02</span>Crew
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold">03</span>Technology
        </li>
      </ul>
      <div className="flex md:hidden">
        <img src={Menu} />
      </div>
    </nav>
  );
};

export default Header;
