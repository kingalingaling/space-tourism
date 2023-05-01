import Europa from "../assets/images/destination/europa.png";

const Dest_details = () => {
  return (
    <section className="mt-5 flex flex-col items-center justify-center px-5 sm:mt-16 md:mt-5 md:w-2/3 lg:w-full lg:flex-row lg:justify-around lg:px-44">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <div className="mb-6 flex lg:text-left lg:my-8">
          <span className="mr-2 text-grey">01</span>
          <p className="ml-2 uppercase">Pick Your Destination</p>
        </div>
        <div className="mb-5 h-auto w-3/5 lg:w-full lg:mt-9">
          <img src={Europa} alt="" />
        </div>
      </div>
      <div className="lg:w-2/5 lg:pl-6 lg:flex lg:flex-col lg:items-start">
        <div>
          <ul className="flex items-center justify-center text-xs uppercase tracking-slimmer">
            <li className="mx-1 flex flex-col items-center">
              Moon
              <div className="mt-1 h-0.5 w-7"></div>
            </li>
            <li className="mx-1 flex flex-col items-center">
              Mars
              <div className="mt-1 h-0.5 w-7"></div>
            </li>
            <li className="mx-1 flex flex-col items-center">
              Europa
              <div className="mt-1 h-0.5 w-7 bg-white"></div>
            </li>
            <li className="mx-1 flex flex-col items-center">
              Titan
              <div className="mt-1 h-0.5 w-7"></div>
            </li>
          </ul>
        </div>
        <div className="mt-9 flex flex-col text-center">
          <h1 className="text-5xl">EUROPA</h1>
        </div>
        <p className="mt-9 text-center text-md lg:text-justify">
          The smallest of the four Galilean moons orbiting Jupiter. Europa is a
          winter lover's dream. With an icy surface, it's perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
          <hr className="mb-9 mt-9 h-0.5 w-full md:mb-3" />
        </p>
        
        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <div className="mb-9 flex flex-col items-center uppercase md:mr-7">
            <p className="py-1.5 text-xs">AVG. DISTANCE</p>
            <p className="text-2xl">628 MIL. KM</p>
          </div>
          <div className="mb-9 flex flex-col items-center uppercase md:ml-7">
            <p className="py-1.5 text-xs">Est. Travel Time</p>
            <p className="text-2xl">3 Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dest_details;
