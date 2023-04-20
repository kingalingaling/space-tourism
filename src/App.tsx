import Explore from './components/explore';
import Header from './components/header';

function App() {

  return (
    <section className='flex flex-col justify-center items-center bg-home-sm md:bg-home-md lg:bg-home-lg bg-no-repeat bg-cover text-[#fff] w-screen h-screen font-bellefair-regular'>
      <Header />
      <Explore />
    </section>
    // <h1 className="text-[#54637A] text-[4rem]">Hello world</h1>
  )
}

export default App
