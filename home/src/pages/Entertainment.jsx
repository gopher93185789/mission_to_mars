import { useEffect, useRef, useState } from "react";
import { GenreSelect } from "../components/movies/Genre";
import { Rings } from "../components/Rings";


const defaultShows = [
    {title: "Daredevil", release: 2015, link: "shows/dare.png"},
    {title: "American Gods", release: 2017, link: "shows/gods.png"},
    {title: "Game of Thrones", release: 2011, link: "shows/got.png"},
    {title: "Lucifer", release: 2016, link: "shows/luci.png"},
    {title: "Rick and Morty", release: 2013, link: "shows/rm.png"},
    {title: "Solo Leveling", release: 2024, link: "shows/solo.png"},
];


const movies = [
    {title: "The Batman", release: 2022, link: "movies/batman.png"},
    {title: "No Country for Old Men", release: 2007, link: "movies/ncfom.png"},
    {title: "Fury", release: 2014, link: "movies/tank.png"},
    {title: "Pacific Rim", release: 2013, link: "movies/pacific.png"},
    {title: "The PBT Pines", release: 2012, link: "movies/pines.png"},
    {title: "The Wolf of Wall Street", release: 2013, link: "movies/wow.png"},
];


const featured = [
  {title: "The Batman", release: 2022 ,link: "movies/batman.png"},
  {title: "Daredevil", release: 2015 ,link: "shows/dare.png"},
  {title: "Pacific Rim", release: 2013, link: "movies/pacific.png"},     
]

export function Entertainment() {
    const [currGenre, setCurrGenre] = useState("action");
    const [showVideo, setShowVideo] = useState(false); 
    
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleClick = () => {
        if (!showVideo) {
            setShowVideo(true); 
        }else {
            setShowVideo(false);
        }
        
    }
    const items = Array(6).fill(null);

    useEffect(() => {
        setShowVideo(false)
    }, [currGenre])


    const exploreRef = useRef(null);
    const shows = useRef(null);

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

    const noContent = (msg) => {
        return (
            <div className="w-full h-full flex items-center justify-center backdrop-blur-md border rounded-xl"><p className="text-white font-bold text-4xl">{msg}</p></div>
        )
    }

    return (
        <>
            <Rings />

            <div className="w-full h-full mt-20 px-44 pb-5 flex flex-row ">
                <div className="w-1/12 flex flex-col gap-5">
                    <GenreSelect sg={(genre) => setCurrGenre(genre)} currGenre={currGenre} />
                </div>

                <div className="w-full h-full mt-1 flex-grow-0 overflow-hidden flex flex-col gap-5">
                    <p className="text-white font-bold text-lg h-fit">Featured</p>
                    <div className="w-full h-[30%]  overflow-scroll  py-1 scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {featured.length > 0 ? featured.map((item, idx) => (
                            <div key={idx} onClick={handleClick} className="aspect-video hover:cursor-pointer relative bg-black group overflow-hidden rounded-xl">
                                <img draggable={"false"} src={item.link} className="z-0 group-hover:scale-110 duration-500 ease-in-out w-full h-full absolute top-0 left-0" />
                                <div className="w-full h-[23%] absolute left-0 pt-0 pl-3 pb-3 bottom-0 mt-auto backdrop-blur-sm ">
                                    <div className="w-full h-full flex flex-col">
                                        <p className="text-left text-white text-lg font-bold">{item.title}</p>
                                        <p className="text-left text-white text-opacity-50 text-sm">{item.release}</p>
                                    </div>
                                </div>
                            </div> 
                        )) : noContent("No Featured Content")}


                    </div>

                    <p className="text-white font-bold text-lg h-fit">Explore {currGenre} movies</p>
                    <div ref={exploreRef} onMouseUp={() => handleMouseUp(exploreRef)} onMouseMove={(e) => handleMouseMove(e, exploreRef)} onMouseDown={(e) => handleDown(e, exploreRef)} onMouseLeave={() => handleMouseLeave(exploreRef)} className="w-full h-[25%]  overflow-scroll  py-2 scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {movies.length > 0 ? movies.map((item, index) => (
                            <div key={index} className="aspect-video flex-shrink-0 overflow-hidden rounded-xl relative">
                                <img draggable={"false"} src={item.link} className="z-0 w-full opacity-70 h-full absolute top-0 left-0" />
  
                                <div className="w-full h-[30%] absolute left-0 pt-0 pl-3 pb-4 bottom-0 mt-auto backdrop-blur-sm ">
                                    <div className="w-full  h-full flex flex-row">
                                        <div className="w-4/5">
                                            <p className="text-left text-nowrap text-white text-lg font-bold">{item.title}</p>
                                            <p className="text-left text-white text-opacity-50 text-sm">{item.release}</p>
                                        </div>
                                        <div className="w-2/12 flex items-center justify-end"> 
                                            <button onClick={handleClick}>
                                                <img draggable={"false"} src="play-button.png" className="w-12 mt-1 h-12 hover:scale-110 duration-300 ease-in-out will-change-transform  " />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )): noContent("No Movies Available")}
                    </div>


                    <p className="text-white font-bold text-lg h-fit">Explore {currGenre} shows</p>
                    <div ref={shows} onMouseUp={() => handleMouseUp(shows)} onMouseMove={(e) => handleMouseMove(e, shows)} onMouseDown={(e) => handleDown(e, shows)} onMouseLeave={() => handleMouseLeave(shows)} className="w-full h-[25%]  overflow-scroll  py-2 scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-neutral-800 overflow-y-hidden overflow-x-auto flex flex-row gap-5">
                        {defaultShows.length > 0 ? defaultShows.map((item, index) => (
                            <div key={index} className="aspect-video flex-shrink-0 overflow-hidden rounded-xl relative">
                                <img draggable={"false"} src={item.link} className="z-0 w-full opacity-70 h-full absolute top-0 left-0" />
  
                                <div className="w-full h-[30%] absolute left-0 pt-0 pl-3 pb-4 bottom-0 mt-auto backdrop-blur-sm ">
                                    <div className="w-full  h-full flex flex-row">
                                        <div className="w-4/5">
                                            <p className="text-left text-nowrap text-white text-lg font-bold">{item.title}</p>
                                            <p className="text-left text-white text-opacity-50 text-sm">{item.release}</p>
                                        </div>
                                        <div className="w-2/12 flex items-center justify-end"> 
                                            <button onClick={handleClick}>
                                                <img draggable={"false"} src="play-button.png" className="w-12 mt-1 h-12 hover:scale-110 duration-300 ease-in-out will-change-transform  " />
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )): noContent("No Shows Available")}

                    </div>

                    <div className={`w-[50%] h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-3 ${showVideo ? "absolute" : "hidden"}`}>
                        {showVideo && (
                            <div className="gap-2 overflow-hidden w-fit relative flex rounded-2xl flex-row">
                                <div className="h-full overflow-hidden flex items-center">
                                    <video controls autoPlay className="rounded-2xl">
                                        <source src="video.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                <button onClick={handleClick} className="size-10 absolute top-0 right-0  bg-neutral-900 text-white font-bold rounded-bl-xl">x</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
