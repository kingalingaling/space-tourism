import Header from '../components/header'
import CrewDetails from '../components/crew-details'

function Crew() {

  return (
    <section className="flex flex-col justify-center md:items-start md:justify-start items-center bg-crew-sm md:bg-crew-md lg:bg-crew-lg bg-no-repeat bg-cover text-[#fff] w-full h-full lg:h-screen font-bellefair p-0">
      <Header />
      
      <CrewDetails />
    </section>
  )
}

export default Crew