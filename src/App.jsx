
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
 ''

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1 className='text-5xl border-2'>Vite + React</h1>

      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
