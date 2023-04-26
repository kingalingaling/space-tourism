const Explore = () => {
  return (
    <section className="mt-9 sm:mt-16 md:mt-52 flex flex-col items-center justify-center p-5 md:w-1/2 lg:w-full lg:flex-row lg:justify-around lg:px-44">
      <div className="text-left lg:w-1/3">
        <div className="flex flex-col items-center uppercase lg:items-start">
          <p className="text-sm tracking-slim lg:text-left">So, you want to travel to</p>
          <span className="my-9 font-barlow-condensed text-8xl sm:text-9xl">
            Space
          </span>
        </div>
        <div className="my-7 px-2 text-center lg:text-left text-sm tracking-slimmer">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <button className="h-44 w-44 rounded-full bg-white text-2xl text-black hover:bg-black hover:text-white">
          EXPLORE
        </button>
      </div>
    </section>
  );
};

export default Explore;
