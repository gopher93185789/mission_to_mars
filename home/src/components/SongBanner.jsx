import { FaHeart } from 'react-icons/fa'

export function SongBanner({id, title = "curated playlist", mainText = "R&B Hits", subText = "the Weeknd, Usher, Kendrick Lamar, Diddy, Byson Tiller, Tory Lanez", likesText = "50,056 Likes", songAndTimeText = "213 Songs, 13 hr 7 min" }) {
    return  (
        <div id={id} className="h-[540px]  w-full rounded-3xl overflow-hidden flex group  bg-orange-700">
            <div className="w-1/2 h-full px-20 pt-32 pb-16 flex flex-col gap-5">

                <p className="px-1 w-full text-left text-xl text-white">{title}</p >
                <h1 className="font-bold w-full text-left text-7xl text-white">{mainText}</h1>
                <p className="text-opacity-50 px-1 w-full text-left text-xl text-white">{subText}</p >

                <div className="w-full mt-auto h-fit flex flex-row gap-2">
                    <div className="h-6 w-6 p-1 bg-white bg-opacity-50 rounded-md flex justify-center items-center">
                        <FaHeart className="text-white hover:text-red-700" />
                    </div>

                    <p className="text-white ">{likesText}</p>
                    <p className="text-white mx-3">-</p>
                    <p className="text-white  text-opacity-50">{songAndTimeText}</p>
                </div>
            </div>
            <div className="w-1/2 overflow-clip h-full flex justify-end">
                <img className="group-hover:scale-105 duration-500 delay-200 ease-in-out will-change-transform h-full" src="weeknd.png" />
            </div>
        </div>
    )
}