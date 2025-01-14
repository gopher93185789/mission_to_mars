import { useRef, useState } from "react";
import { FaHeart, FaPlay } from 'react-icons/fa'

export function Music() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const mu1 = useRef(null);
    const mu2 = useRef(null);
    const mu3 = useRef(null);
    const mu4 = useRef(null);

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

        const items = Array(10).fill(null);

    return (

        <div className="h-full w-full mt-5 p-5 flex items-center flex-col gap-5 ">
            <div className="w-4/5 h-[75vh] rounded-xl flex gap-5">
                <div id="side1" className="h-[75vh]  w-2/12 backdrop-blur-xl border rounded-xl ">

                </div>

                {/* maybe 850px for school */}
                <div id="middle" className="w-full h-[75vh] justify-center rounded-xl scrollbar scrollbar-none overflow-y-auto gap-5 flex-col"> 
                    <div className="h-[540px]  w-full rounded-3xl flex group  bg-orange-700">
                        <div className="w-1/2 h-full px-20 pt-32 pb-16 flex flex-col gap-5">
                            <p className="px-1 w-full text-left text-xl text-white">curated playlist</p >
                            <h1 className="font-bold w-full text-left text-7xl text-white">R&B Hits</h1>
                            <p className="text-opacity-50 px-1 w-full text-left text-xl text-white">the Weeknd, Usher, Kendrick Lamar, Diddy, Byson Tiller, Tory Lanez</p >
                            <div className="w-full mt-auto h-fit flex flex-row gap-2">
                                <div className="h-6 w-6 p-1 bg-white bg-opacity-50 rounded-md flex justify-center items-center">
                                    <FaHeart className="text-white hover:text-red-700" />
                                </div>

                                <p className="text-white ">50,056 Likes</p>
                                <p className="text-white mx-3">-</p>
                                <p className="text-white  text-opacity-50">213 Songs, 13 hr 7 min</p>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-clip h-full flex justify-end">
                            <img className="group-hover:scale-105 duration-500 delay-200 ease-in-out will-change-transform h-full" src="weeknd.png" />
                        </div>
                    </div>

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Made for you</p>
                    <div ref={mu1} onMouseUp={() => handleMouseUp(mu1)} onMouseMove={(e) => handleMouseMove(e, mu1)} onMouseDown={(e) => handleDown(e, mu1)} onMouseLeave={() => handleMouseLeave(mu1)} className="h-fit   w-full mt-4 overflow-x-auto scrollbar-none scrollbar-thin flex flex-row gap-5 ">
                        {items.map((_, idx) => (
                            <div key={idx} className="h-80 w-64 group flex-shrink-0 rounded-xl p-3 gap-2 flex bg-neutral-950 hover:bg-neutral-900 duration-500 ease-in-out flex-col ">
                                <img draggable={"false"} src="jscole.png" className="aspect-square rounded-lg " />
                                <div className=" flex flex-row">
                                    <div className="w-5/6 truncate flex items-center flex-col">
                                        <p className="text-opacity-70 text-white h-fit  text-left text-lg  w-full font-bold">J-Cole </p>
                                        <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">You</p>
                                    </div>
                                    <button className="opacity-0 flex group-hover:opacity-100 duration-500  ease-in-out w-1/6 h-full  items-center justify-center"> <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Explore</p>
                    <div ref={mu2} onMouseUp={() => handleMouseUp(mu2)} onMouseMove={(e) => handleMouseMove(e, mu2)} onMouseDown={(e) => handleDown(e, mu2)} onMouseLeave={() => handleMouseLeave(mu2)} className="h-fit   w-full mt-4 overflow-x-auto scrollbar-none scrollbar-thin flex flex-row gap-5 ">
                        {items.map((_, idx) => (
                            <div key={idx} className="h-80 w-64 group flex-shrink-0 rounded-xl p-3 gap-2 flex bg-neutral-950 hover:bg-neutral-900 duration-500 ease-in-out flex-col ">
                                <img draggable={"false"} src="mocro.png" className="aspect-square rounded-lg " />
                                <div className=" flex flex-row">
                                    <div className="w-5/6 truncate flex items-center flex-col">
                                        <p className="text-opacity-70 text-white h-fit  text-left text-lg  w-full font-bold">El-Chapo </p>
                                        <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">MocroManiac</p>
                                    </div>
                                    <button className="hidden group-hover:flex duration-300 ease-in-out w-1/6 h-full  items-center justify-center"> <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" /></button>
                                </div>
                            </div>
                        ))}
                    </div> 
                    
                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Moody</p>
                    <div ref={mu3} onMouseUp={() => handleMouseUp(mu3)} onMouseMove={(e) => handleMouseMove(e, mu3)} onMouseDown={(e) => handleDown(e, mu3)} onMouseLeave={() => handleMouseLeave(mu3)} className="h-fit   w-full mt-4 overflow-x-auto scrollbar-none scrollbar-thin flex flex-row gap-5 ">
                        {items.map((_, idx) => (
                            <div key={idx} className="h-80 w-64 group flex-shrink-0 rounded-xl p-3 gap-2 flex bg-neutral-950 hover:bg-neutral-900 duration-500 ease-in-out flex-col ">
                                <img draggable={"false"} src="jscole.png" className="aspect-square rounded-lg " />
                                <div className=" flex flex-row">
                                    <div className="w-5/6 truncate flex items-center flex-col">
                                        <p className="text-opacity-70 text-white h-fit  text-left text-lg  w-full font-bold">J-Cole </p>
                                        <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">You</p>
                                    </div>
                                    <button className="hidden group-hover:flex duration-300 ease-in-out w-1/6 h-full  items-center justify-center"> <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" /></button>
                                </div>
                            </div>
                        ))}
                    </div> 
                    
                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Sigma</p>
                    <div ref={mu4} onMouseUp={() => handleMouseUp(mu4)} onMouseMove={(e) => handleMouseMove(e, mu4)} onMouseDown={(e) => handleDown(e, mu4)} onMouseLeave={() => handleMouseLeave(mu4)} className="h-fit   w-full mt-4 overflow-x-auto scrollbar-none scrollbar-thin flex flex-row gap-5 ">
                        {items.map((_, idx) => (
                            <div key={idx} className="h-80 w-64 group flex-shrink-0 rounded-xl p-3 gap-2 flex bg-neutral-950 hover:bg-neutral-900 duration-500 ease-in-out flex-col ">
                                <img draggable={"false"} src="mocro.png" className="aspect-square rounded-lg " />
                                <div className=" flex flex-row">
                                    <div className="w-5/6 truncate flex items-center flex-col">
                                        <p className="text-opacity-70 text-white h-fit  text-left text-lg  w-full font-bold">El-Chapo </p>
                                        <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">MocroManiac</p>
                                    </div>
                                    <button className="hidden group-hover:flex duration-300 ease-in-out w-1/6 h-full  items-center justify-center"> <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" /></button>
                                </div>
                            </div>
                        ))}
                    </div> 


                </div>

                <div id="side2" className="h-[75vh]  w-2/12 backdrop-blur-xl border  rounded-xl"></div>
            </div>
            
            <div id="play-bar" className="px-34 w-2/4 h-24 backdrop-blur-xl border rounded-xl"></div>
        </div>
 
    )
}