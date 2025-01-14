import { useEffect, useState } from "react"

export function VolumeSlider({play, timeInSec=200}) {
    const [volume, setVolume] = useState(0)
    const [isDragging, setIsDragging] = useState(false)

    const handleVolume = (event) => {
        setVolume(Number(event.target.value))
    }

    const md = () => {
        setIsDragging(true)
    }

    const mup = () => {
        setIsDragging(false)
    }

    useEffect(() => {
        if(play && !isDragging) {
            const timer = setInterval(() => {
                setVolume(prevVolume => {
                    const newVolume = prevVolume + 1
                    console.log(newVolume)
                    return newVolume
                })
            }, 1000);
            return () => clearInterval(timer)
        }
    }, [play, isDragging])

    return (
        <>
            <input 
                onMouseDown={md}
                onMouseUp={mup}
                onChange={handleVolume} id="default-range" type="range" value={volume} max={timeInSec}  
                className="w-10/12 h-2 bg-neutral-900 transition-all duration-500 accent-green-800 rounded-lg appearance-none cursor-pointer" 
            />
        </>
    )
}
