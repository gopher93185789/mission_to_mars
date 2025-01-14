import { useState } from "react"

const defaultGenres = ["Action", "Comedy", "Sci-fi", "Thriller", "Drama"]

export function GenreSelect({genres = defaultGenres, sg, currGenre}) {
    
    const [enter, SetEnter] = useState(false)

    const HandleHover = (p1, p2) => {
        if (p1.toLowerCase() === p2.toLowerCase()) {
            return "bg-green-900";
        } else {
            return "hover:bg-green-900";
        }
    }

    return (
        <>
        <p className="w-full px-1 text-2xl tracking-wide text-white font-bold">Genre</p>
        <div className=" text-white flex flex-col gap-3 text-xl">
            {genres.map((item, idx) => (
                <button key={idx} onMouseEnter={() => SetEnter(true)} onMouseLeave={() => {SetEnter(false)}} onClick={() => sg(`${item}`)} className={` ${enter  ? "hover:bg-green-900" : HandleHover(currGenre, `${item}`) } duration-200 ease-in-out text-opacity-100 p-2 w-20 text-sm rounded-lg inline-block text-left`}>{item}</button>
            ))}
        </div>
        </>
    )
}               