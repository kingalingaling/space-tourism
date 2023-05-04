import Header from "../components/header"
import Dest_details from "../components/dest_details"

function Destination() {

  return (
    <section className='flex flex-col justify-center items-center bg-dest-sm md:bg-dest-md lg:bg-dest-lg bg-no-repeat bg-cover text-[#fff] w-full h-full lg:h-screen font-bellefair-regular p-0'>
      <Header />
      <Dest_details />
    </section>
  )
}

export default Destination