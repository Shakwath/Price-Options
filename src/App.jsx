import './App.css'
import LineChart from './components/LineChart/LineChart'
// import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'

function App() {

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App