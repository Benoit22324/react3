import './App.css'
import { Greeting } from './Components/Greeting'
import { Listing } from './Components/Listing'

function App() {

  return (
    <>
      <Greeting name={"John"} age={18} />
      <Listing list={["Bon", "Jour"]} />
    </>
  )
}

export default App
