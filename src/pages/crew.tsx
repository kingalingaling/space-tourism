import Header from '../components/header'
import CrewDetails from '../components/CrewDetails'

function Crew() {

  return (
    <section className="flex flex-col justify-center items-center bg-crew-sm md:bg-crew-md lg:bg-crew-lg bg-no-repeat bg-cover text-[#fff] w-full h-full lg:h-screen font-bellefair-regular p-0">
      <Header />
      
      <CrewDetails />
    </section>
  )
}

export default Crew