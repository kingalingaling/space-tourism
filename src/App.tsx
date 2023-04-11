import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <section className="bg-crew-lg h-screen">
        <h1 className="text-[#089067]">00 Home</h1>
        <nav>
          <ul className="text-white">
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </nav>
      <section>
        So, you want to travel to
      Space
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!

      Explore
    </section>
    
  </section>
    </div>
  )
}

export default App
