import { useState } from "react";
import { GenreSelect } from "../components/movies/Genre";
import { Rings } from "../components/Rings";

export function Movies() {
    const [currGenre, setCurrGenre] = useState("action");
    const [showVideo, setShowVideo] = useState(false); 

    const handleClick = () => {
        setShowVideo(true); 
    }

    const items = Array(20).fill(null);

    return (
        <>
            <Rings />

            <div className="w-full h-full mt-20 px-44 pb-5 flex flex-row ">
                <div className="w-1/12 flex flex-col gap-5">
                    <GenreSelect sg={(genre) => setCurrGenre(genre)} currGenre={currGenre} />
                </div>

                <div className="w-full h-full flex-grow-0 overflow-hidden flex flex-col gap-5">
                    <div className="w-full h-[30%] mt-3">
                        {showVideo && (
                            <div className="w-[40rem] h-[22rem] flex  items-center">
                                <video width="800" controls autoPlay className="rounded-2xl">
                                    <source src="video.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>

                    <p className="text-white font-bold text-2xl h-fit">Continue watching</p>
                    <div className="w-full h-[25%]  overflow-scroll  py-2 scrollbar scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {items.map((_, index) => (
                            <button key={index} onClick={handleClick}>
                                <div className="h-full w-[28rem] flex-shrink-0 overflow-hidden rounded-xl relative">
                                    <img src="image.png" className="z-0 w-full opacity-70 h-full absolute top-0 left-0" />
                                    <img src="play-button.png" className="w-24 h-24 hover:scale-110 duration-300 ease-in-out will-change-transform absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                                </div>
                            </button>
                        ))}

                    </div>

                    <p className="text-white font-bold text-2xl h-fit">Explore {currGenre} movies</p>
                    <div className="w-full h-[25%]  overflow-scroll  py-2 scrollbar scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {items.map((_, index) => (
                            <button key={index} onClick={handleClick}>
                                <div className="h-full w-[28rem] flex-shrink-0 overflow-hidden rounded-xl relative">
                                    <img src="image2.png" className="z-0 w-full opacity-70 h-full absolute top-0 left-0" />
                                    <img src="play-button.png" className="w-24 h-24 hover:scale-110 duration-300 ease-in-out will-change-transform absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                                </div>
                            </button>
                        ))}

                    </div>
                </div>
            </div>

        </>
    );
}
