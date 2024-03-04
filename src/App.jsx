
import './App.css'
import {ScollamaContainer} from "./ScollamaContainer";

function App() {

  return (
    <>
        <div className={"snap-y snap-mandatory overflow-y-scroll h-screen w-screen"}>
            <ScollamaContainer />
            <div className={"snap-always snap-start h-screen bg-red-200 flex justify-center items-center text-6xl"}>2
            </div>
        </div>
    </>
  )
}

export default App
