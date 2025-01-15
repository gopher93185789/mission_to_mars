export function WebCam() {
    return (
        <div className="h-full w-full px-80 py-10  flex flex-col gap-5 items-center">
            <div className="w-full h-1/2 flex flex-row gap-5">
                <div className="hover:scale-[101%] duration-500 ease-in-out w-full h-fit overflow-hidden rounded-xl shadow-neutral-950 shadow-xl">
                    <video  src="video.mp4" autoPlay loop controls />
                </div>

                <div className="hover:scale-[101%] duration-500 ease-in-out w-full h-fit overflow-hidden rounded-xl shadow-neutral-950 shadow-xl">
                    <video  src="video.mp4" autoPlay loop controls />
                </div>
            </div>
            <div className="w-full h-1/2 flex flex-row gap-5">
                <div className="hover:scale-[101%] duration-500 ease-in-out w-full h-fit overflow-hidden rounded-xl shadow-neutral-950 shadow-xl">
                    <video  src="video.mp4" autoPlay loop controls />
                </div>
                <div className="hover:scale-[101%] duration-500 ease-in-out w-full h-fit overflow-hidden rounded-xl shadow-neutral-950 shadow-xl">
                    <video  src="video.mp4" autoPlay loop controls />
                </div>
            </div>
        </div>
    )
}