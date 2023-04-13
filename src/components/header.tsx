import Logo from '../assets/images/icons/logo.svg';

const Header = () => {
    return(
      <section>
        <img src={Logo} />
        <nav>
            <ul className="">
                <li>01 Destination</li>
                <li>02 Crew</li>
                <li>03 Technology</li>
            </ul>
        </nav>
      </section>
    )
}

export default Header
