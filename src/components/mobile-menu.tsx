const MobileMenu = (props: any) => {
    return (
        props.show && 
        <div className="bg-[#ffffff4a] w-1/2 absolute top-0 right-0 h-full z-99">
            <ul className="">
                <li className="">
                    <span className="pr-3 font-semibold hidden lg:inline">00</span>Home
                </li>
                <li className="">
                    <span className="pr-3 font-semibold hidden lg:inline">01</span>Destination
                </li>
                <li className="">
                    <span className="pr-3 font-semibold hidden lg:inline">02</span>Crew
                </li>
                <li className="">
                    <span className="pr-3 font-semibold hidden lg:inline">03</span>Technology
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu