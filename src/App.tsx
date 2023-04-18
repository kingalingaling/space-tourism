import Header from './components/header';
import Explore from './components/Explore';

function App() {

  return (
    <section className='flex flex-col bg-home-sm sm:bg-home-md md:bg-home-lg bg-no-repeat bg-cover text-[#fff] w-screen h-screen pt-4'>
      <Header />
      <Explore />
    </section>
    
  )
}

export default App
