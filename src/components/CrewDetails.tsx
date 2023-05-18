import { useState } from "react";
import data from "../data/index.json";
import { destDetails, crewDetails } from "../types";

const crewData: Array<crewDetails> = data.crew;

const CrewDetails = () => {
  const [crew, setCrew] = useState(0);

  return (
    <div className="flex flex-col items-center py-4 md:items-start ">
      <h2 className="py-12 text-left tracking-slim md:ml-14 lg:ml-28">
        <span className="mx-3 text-gray-600">02</span>Meet Your Crew
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-col-reverse lg:flex-row-reverse lg:px-32">
        <div className="flex w-4/5 flex-col items-center justify-center pt-8 ">
          <img className="h-full w-4/5" src={crewData[crew].image} alt="" />
          <hr className="h-[0.5px] w-full border-gray-500 md:hidden" />
        </div>
        <div className="flex w-5/6 flex-col md:flex-col-reverse lg:items-start">
          <div className="flex items-center justify-center py-8">
            {crewData.map((i) => (
              <div
                className={
                  crew == i.id
                    ? "mx-2 h-[10px] w-[10px] cursor-pointer rounded-full bg-white"
                    : "mx-2 h-[10px] w-[10px] cursor-pointer rounded-full hover:scale-105 hover:bg-slate-400/60 duration-300 bg-gray-600/70"
                }
                onClick={() => setCrew(i.id)}
              ></div>
            ))}
          </div>
          <div className="text-center lg:text-left">
            <div className="font-bellefair uppercase">
              <h3 className="py-3 text-2xl text-gray-400">
                {crewData[crew].role}
              </h3>
              <p className="text-5xl">{crewData[crew].name}</p>
            </div>
            <p className="font-barlow-condensed text-lg tracking-slimmer">
              {crewData[crew].bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewDetails;
