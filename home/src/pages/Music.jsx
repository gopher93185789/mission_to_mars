import { useState } from "react";
import { VolumeSlider } from "../components/VolumeSlider";
import { ScrollBox } from "../components/ScrollBox";
import { SongBanner } from "../components/SongBanner";
import { FaFolder, FaHome, FaMusic, FaSpotify } from "react-icons/fa";


const scroll1 = [
    {title:"No role models", artist: "J-cole", duration:"234", image:"songs/jscole.png"},
    {title:"X's", artist: "Cigarettes After Sex", duration:"234", image:"songs/cas.png"},
    {title:"Harder Than Hard", artist: "Lil Baby", duration:"234", image:"songs/baby.png"},
    {title:"Madvilliany", artist: "Madvillian", duration:"234", image:"songs/madvillinay.png"},
    {title:"PARTYNEXTDOOR", artist: "PARTYNEXTDOOR", duration:"234", image:"songs/party.png"},
]

const scroll2 = [
    {title:"Gradution", artist: "Kanye West", duration:"234", image:"songs/grad.png"},
    {title:"Man On The Moon 3", artist: "Kid Cudi", duration:"234", image:"songs/mom.png"},
    {title:"Views", artist: "Drake", duration:"234", image:"songs/views.png"},
    {title:"I Told You", artist: "Tory Lanez", duration:"234", image:"songs/tory.png"},
    {title:"El chapo", artist: "mocromaniac", duration:"234", image:"songs/mocro.png"},
]

const scroll3 = [
    {title:"DAMN.", artist: "Kendrick Lamar", duration:"234", image:"songs/kendo.png"},
    {title:"El chapo", artist: "mocromaniac", duration:"234", image:"songs/mocro.png"},
    {title:"Street Gossip", artist: "Lil Baby", duration:"234", image:"songs/baby2.png"},
    {title:"Trapsoul", artist: "Bryson Tiller", duration:"234", image:"songs/trap.png"},
    {title:"JORDY", artist: "Jordymone9", duration:"234", image:"songs/jordy.png"},
]

export function Music() {
    const [play, setPlay] = useState(false)
    const [playing, setPlaying] = useState('')
    const [section, setSection] = useState('Home')

    const handleScrollToSection = (id) => {
        setSection(id)
        const section = document.getElementById(id);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (

        <div className="h-full w-full mt-5 p-5 flex items-center flex-col gap-5 ">
            <div className="w-4/5 h-[87vh] rounded-xl  flex gap-5">
                <div id="side1" className="h-[87vh] w-2/12 flex flex-col gap-3 rounded-xl ">
                    <div className="flex h-1/2 w-full flex-col gap-3">
                        <p className="text-white text-xl rounded-xl font-bold mb-3">Browse Music</p>
                        <button onClick={() => handleScrollToSection('Home')} className="w-full group bg-gradient-to-br bg-neutral-950  active:scale-95 px-5 h-10 items-center shadow-neutral-950 shadow-lg hover:scale-105 will-change-transform duration-300 ease-in-out rounded-xl flex flex-row gap-4">
                            <FaHome className={`text-white ${section === 'Home' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out delay-100 size-6`} />
                            <p className={`w-full text-white ${section === 'Home' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out text-left`}>Home</p>
                        </button>

                        <button onClick={() => handleScrollToSection("Album")} className="w-full group bg-gradient-to-br bg-neutral-950  active:scale-95 px-5 h-10 items-center shadow-neutral-950 shadow-lg hover:scale-105 will-change-transform duration-300 ease-in-out rounded-xl flex flex-row gap-4">
                            <FaFolder className={`text-white ${section === 'Album' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out delay-100 size-6`} />
                            <p className={`w-full text-white ${section === 'Album' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out text-left`}>Albums</p>
                        </button>

                        <button className="w-full group bg-gradient-to-br bg-neutral-950  active:scale-95 px-5 h-10 items-center shadow-neutral-950 shadow-lg hover:scale-105 will-change-transform duration-300 ease-in-out rounded-xl flex flex-row gap-4">
                            <FaMusic className={`text-white ${section === 'Tracks' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out delay-100 size-6`} />
                            <p className={`w-full text-white ${section === 'Tracks' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out text-left`}>Tracks</p>
                        </button>

                        <button className="w-full group bg-gradient-to-br bg-neutral-950  active:scale-95 px-5 h-10 items-center shadow-neutral-950 shadow-lg hover:scale-105 will-change-transform duration-300 ease-in-out rounded-xl flex flex-row gap-4">
                            <FaSpotify className={`text-white ${section === 'Genres' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out delay-100 size-6`} />
                            <p className={`w-full text-white ${section === 'Genres' ? "text-opacity-100": "text-opacity-50 group-hover:text-opacity-100"}  duration-300 ease-in-out text-left`}>Genres</p>
                        </button>
                    </div>

                    <div className="flex h-1/2 w-full flex-col gap-3">
                        <p className="text-white text-xl rounded-xl font-bold mb-3">Library</p>
                        <p className="w-full text-white text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Recently Played</p>
                        <p className="w-full text-white text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Favorite Tracks</p>
                        <p className="w-full text-white text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Charts</p>
                        <p className="w-full text-white text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Radio</p>
                    </div>

                </div>

      
                <div id="middle" className="w-full h-[87vh]  justify-center rounded-xl scrollbar scrollbar-none overflow-y-auto gap-5 flex-col"> 
                    <SongBanner id={'Home'} title="Weekly Top 50" />

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Made for you</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll1} />

                    <p id="Album" className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Recommended</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll2} />

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Explore</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll3} />
                </div>

                <div id="side2" className="h-[87vh]  w-2/12 backdrop-blur-xl  rounded-xl">
                
                </div>
            </div>
            

        </div>
 
    )
}