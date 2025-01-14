import { useRef, useState } from "react";
import { FaPause, FaPlay } from 'react-icons/fa'

const defaultSongs = [
    {title:"no role models", artist: "j-cole", duration:"234", image:"songs/jscole.png"},
    {title:"El chapo", artist: "mocromaniac", duration:"234", image:"songs/mocro.png"},
]


export function ScrollBox({items = defaultSongs, play, setPlay, playing, setPlaying}) {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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
    
    const handlePlay = (title) => {
        if (play) {
            setPlay(false)
            setPlaying('')
        }else{
            setPlay(true)
            setPlaying(title)
        }
    }

    const handlePlaying = (playing, title) => {
        if (playing === title ){
            return <FaPause className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />
        }else{
            return <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />
        }
    }

    const mu1 = useRef(null);

    return (
        <div ref={mu1} onMouseUp={() => handleMouseUp(mu1)} onMouseMove={(e) => handleMouseMove(e, mu1)} onMouseDown={(e) => handleDown(e, mu1)} onMouseLeave={() => handleMouseLeave(mu1)} className="h-fit   w-full mt-4 overflow-x-auto scrollbar-none scrollbar-thin flex flex-row gap-5 ">
            {items.map((item, idx) => (
                <div key={idx} className="h-80 w-64 group flex-shrink-0 rounded-xl p-3 gap-2 flex bg-neutral-950 hover:bg-neutral-900 duration-500 ease-in-out flex-col ">
                    <img draggable={"false"} src={item.image} className="aspect-square rounded-lg " />
                    <div className=" flex flex-row">
                        <div className="w-5/6 truncate flex items-center flex-col">
                            <p className="text-opacity-70 text-white h-fit  text-left text-lg  w-full font-bold">{item.title}  </p>
                            <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">{item.artist} </p>
                        </div>
                        <button onClick={() => handlePlay(item.title)} className={`${item.title === playing ? "" : "opacity-0"} flex group-hover:opacity-100 duration-500  ease-in-out w-1/6 h-full items-center justify-center`}> 
                            {play ? 
                            handlePlaying(playing, item.title) : 
                            <FaPlay className="text-green-800 will-change-transform hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}