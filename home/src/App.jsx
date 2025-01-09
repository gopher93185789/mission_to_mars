import { Planet } from "./components/Planet"
import { InfoSection } from "./components/InfoSection"
import { Navbar } from "./components/Navbar"
import { PlanetName } from "./components/PlanetName"



export default function App() {
  return (
    <div className="h-screen font-jakarta w-screen pt-8 flex flex-col items-center bg-black">
      <Navbar />
      <PlanetName text={"MARS"} />
      <InfoSection />
      <Planet size="h-screen w-3/5" />
    </div>
  )
}