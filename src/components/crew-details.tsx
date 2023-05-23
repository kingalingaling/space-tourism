const CrewDetails = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <h2 className="py-6 text-xl tracking-slim font-barlow-condensed uppercase">
        <span className="mx-3 text-gray-600 text-left">02</span>Meet Your Crew
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-col-reverse lg:flex-row-reverse lg:px-32">
        <div className="flex w-4/5 flex-col justify-center items-center pt-8 ">
          <img
            className="h-full w-4/5"
            src="/assets/images/crew/victor-glover.png"
            alt=""
          />
          <hr className="h-[0.5px] w-full border-gray-500 md:hidden" />
        </div>
        <div className="flex w-5/6 flex-col md:flex-col">
          
          <div className="pb-4 text-center lg:text-left uppercase">
            <h3 className="py-3 text-2xl text-gray-400">Flight Engineer</h3>
            <p className="text-5xl">Anouseh Ansari</p>
          </div>
          <p className="text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolor earum, assumenda culpa tempore eligendi neque deserunt
            quisquam debitis voluptatem a consequatur fuga sit placeat,
            explicabo aliquid officia. Animi, minima?
          </p>

          <div className="flex items-center justify-center py-8">
            <div className="mx-2 h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="mx-2 h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="mx-2 h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="mx-2 h-[10px] w-[10px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewDetails;
