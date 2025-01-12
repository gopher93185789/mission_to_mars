import { useEffect, useRef, useState } from "react";
import { GenreSelect } from "../components/movies/Genre";
import { Rings } from "../components/Rings";

export function Movies() {
    const [currGenre, setCurrGenre] = useState("action");
    const [showVideo, setShowVideo] = useState(false); 
    
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleClick = () => {
        setShowVideo(true); 
    }
    const items = Array(20).fill(null);

    useEffect(() => {
        setShowVideo(false)
    }, [currGenre])


    
    const continueWatchingRef = useRef(null);
    const exploreRef = useRef(null);

    const handleDown = (e, scrollAreaRef) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollLeft(scrollAreaRef.current.scrollLeft);
        scrollAreaRef.current.style.cursor = "grabbing";
    };

    const handleMouseMove = (e, scrollAreaRef) => {
        if (!isDragging) return;
        const distance = e.clientX - startX;
        scrollAreaRef.current.scrollLeft = scrollLeft - distance;
    };

    const handleMouseUp = (scrollAreaRef) => {
        scrollAreaRef.current.style.cursor = "grab"; 
        setIsDragging(false);
    };

    const handleMouseLeave = (scrollAreaRef) => {
        if (!isDragging) {
            scrollAreaRef.current.style.cursor = "grab"; 
        }
    };

    return (
        <>
            <Rings />

            <div className="w-full h-full mt-20 px-44 pb-5 flex flex-row ">
                <div className="w-1/12 flex flex-col gap-5">
                    <GenreSelect sg={(genre) => setCurrGenre(genre)} currGenre={currGenre} />
                </div>

                <div className="w-full h-full flex-grow-0 overflow-hidden flex flex-col gap-5">
                    <p className="text-white font-bold text-2xl h-fit">Continue watching</p>
                    <div ref={continueWatchingRef} onMouseUp={() => handleMouseUp(continueWatchingRef)} onMouseMove={(e) => handleMouseMove(e, continueWatchingRef)} onMouseDown={(e) => handleDown(e, continueWatchingRef)} onMouseLeave={() => handleMouseLeave(continueWatchingRef)} className="w-full h-[25%]  overflow-scroll  py-2 scrollbar scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {items.map((_, index) => (
                            <div key={index} className="h-full w-[28rem] flex-shrink-0 overflow-hidden rounded-xl relative">
                                <img draggable={"false"} src="image.png" className="d z-0 w-full opacity-70 h-full absolute top-0 left-0" />
                                <button onClick={handleClick}>
                                    <img draggable={"false"} src="play-button.png" className="w-24 h-24 hover:scale-110 duration-300 ease-in-out will-change-transform absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                                </button>
                            </div>
                        ))}

                    </div>

                    <p className="text-white font-bold text-2xl h-fit">Explore {currGenre} movies</p>
                    <div ref={exploreRef} onMouseUp={() => handleMouseUp(exploreRef)} onMouseMove={(e) => handleMouseMove(e, exploreRef)} onMouseDown={(e) => handleDown(e, exploreRef)} onMouseLeave={() => handleMouseLeave(exploreRef)} className="w-full h-[25%]  overflow-scroll  py-2 scrollbar scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {items.map((_, index) => (
                            <div key={index} className="h-full w-[28rem] flex-shrink-0 overflow-hidden rounded-xl relative">
                                <img draggable={"false"} src="image.png" className="z-0 w-full opacity-70 h-full absolute top-0 left-0" />
                                <button onClick={handleClick}>
                                    <img draggable={"false"} src="play-button.png" className="w-24 h-24 hover:scale-110 duration-300 ease-in-out will-change-transform absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
                                </button>
                            </div>
                        ))}

                    </div>

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
                </div>
            </div>

        </>
    );
}
