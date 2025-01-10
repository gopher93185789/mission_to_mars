import { Planet } from "../../components/Planet"
import { InfoSection } from "../../components/InfoSection"
import { PlanetName } from "../../components/PlanetName"

export function Home() {
    return (        
    <>
        <PlanetName text={"MARS"} />
        <InfoSection />
        <Planet size="h-screen w-3/5" />
    </>
    )
}