import { Planet } from "../components/Planet";
import { InfoSection } from "../components/InfoSection";
import { BigText } from "../components/BigText";

export function Home() {

    return (
        <>
            <BigText text={"MARS"} />
            <InfoSection />
            <Planet size="h-5/6 w-full bottom-0 absolute -z-5 rounded-t-[25%] overflow-hidden" />
        </>
    );
}
