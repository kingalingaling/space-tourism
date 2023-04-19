import Logo from "../assets/images/icons/logo.svg";
import Menu from "../assets/images/icons/menu.svg";

const Header = () => {
  return (
    <nav className="flex w-screen justify-between sm:pl-9 pt-5 md:pt-0 lg:pt-5">
      <div className="mr-6 flex flex-shrink-0 items-center text-white pl-5">
        <img src={Logo} className="" />
      </div>

      <div className="z-10 ml-11 hidden w-1/3 pl-1 lg:block">
        <hr className="z-10 absolute ml-auto mt-7 h-px w-1/3" />
      </div>

      <ul className="z-0 hidden md:flex text-xs flex-row justify-center items-center bg-white bg-opacity-5 uppercase tracking-slimmer backdrop-blur-lg backdrop-filter h-20 lg:h-14 w-3/5 pr-3">
        <li className="mx-5 ">
          <span className="pr-3 font-semibold hidden lg:inline">00</span>Home
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold hidden lg:inline">01</span>Destination
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold hidden lg:inline">02</span>Crew
        </li>
        <li className="mx-5">
          <span className="pr-3 font-semibold hidden lg:inline">03</span>Technology
        </li>
      </ul>
      <div className="flex pr-5 md:hidden">
        <img src={Menu} />
      </div>
    </nav>
  );
};

export default Header;
