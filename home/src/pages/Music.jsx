import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from 'react-icons/fa'
import { ScrollBox } from "../components/ScrollBox";
import { SongBanner } from "../components/SongBanner";
import { FaFolder, FaHome, FaMusic, FaSpotify } from "react-icons/fa";


const scroll1 = [
    {title:"2014 Forest Hill Drive", artist: "J-cole",          duration:"234" , link:"music/cole.mp3" , image:"songs/jscole.png"},
    {title:"X's", artist: "Cigarettes After Sex",       duration:"234" , link:"music/cas.mp3" , image:"songs/cas.png"},
    {title:"Harder Than Hard", artist: "Lil Baby",      duration:"234" , link:"music/baby.mp3" , image:"songs/baby.png"},
    {title:"Madvilliany", artist: "Madvillian",         duration:"234" , link:"music/doom.mp3" , image:"songs/madvillinay.png"},
    {title:"PARTYNEXTDOOR", artist: "PARTYNEXTDOOR",    duration:"234" , link:"music/pnd.mp3" , image:"songs/party.png"},
]

const scroll2 = [
    {title:"Gradution", artist: "Kanye West",       duration:"234" , link:"" , image:"songs/grad.png"},
    {title:"Man On The Moon 3", artist: "Kid Cudi", duration:"234" , link:"music/cudi.mp3" , image:"songs/mom.png"},
    {title:"Views", artist: "Drake",                duration:"234" , link:"music/drake.mp3" , image:"songs/views.png"},
    {title:"I Told You", artist: "Tory Lanez",      duration:"234" , link:"music/tory.mp3" , image:"songs/tory.png"},
    {title:"El chapo", artist: "mocromaniac",       duration:"234" , link:"" , image:"songs/mocro.png"},
]

const scroll3 = [
    {title:"DAMN.", artist: "Kendrick Lamar",   duration:"234" , link:"" , image:"songs/kendo.png"},
    {title:"El chapo", artist: "mocromaniac",   duration:"234" , link:"" , image:"songs/mocro.png"},
    {title:"Street Gossip", artist: "Lil Baby", duration:"234" , link:"music/baby.mp3" , image:"songs/baby2.png"},
    {title:"Trapsoul", artist: "Bryson Tiller", duration:"234" , link:"music/bryson.mp3"  , image:"songs/trap.png"},
    {title:"JORDY", artist: "Jordymone9",       duration:"234" , link:"" , image:"songs/jordy.png"},
]

const all = [...scroll1, ...scroll2, ...scroll3]


export function Music() {
    const [play, setPlay] = useState(false)
    const [playing, setPlaying] = useState('')
    const [section, setSection] = useState('Home')

    const audioRef = useRef(null)
    const [playingPath, setPlayingPath] = useState('')
    

    const handleScrollToSection = (id) => {
        setSection(id)
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const HomeSection = ({audioref, setPlayingPath}) => {
        return (
            <>
                <SongBanner id={'Home'} title="Weekly Top 50" /> 
                <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Made for you</p>
                <ScrollBox  setPlayingPath={setPlayingPath} audioref={audioref} play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll1} />
                <p id="Album" className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Recommended</p>
                <ScrollBox  setPlayingPath={setPlayingPath} audioref={audioref} play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll2} />
                <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Explore</p>
                <ScrollBox  setPlayingPath={setPlayingPath} audioref={audioref} play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll3} />
            </>
        )
    }

    useEffect(() => {
        console.log(playing)
    }, [playing])

    useEffect(() => {
        if (playingPath) {
            audioRef.current.load();
            if (play) {
                audioRef.current.play();
            }
        }
    }, [playingPath]);

    const Tracks = ({songs, play, setPlay, playing, setPlaying, audioref, setPlayingPath }) => {
        const handlePlay = (title, link) => {
            if (playing === title && play) {
                setPlay(false);
                setPlaying('');
                audioref.current.pause();
            } else {
                if (link === '') {
                    return
                }

                setPlay(true);
                setPlaying(title);
                setPlayingPath(link);
                setTimeout(() => {
                    audioref.current.play();
                }, 0);
            }
        }

        const handlePlaying = (playing, title) => {
            if (playing === title && play ){
                return <FaPause className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />
            }else{
                return <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />
            }
        }

        return (
            <div className="px-10 py-5 flex flex-col gap-5">
                {songs.map((item, idx) => (
                    <div key={idx} className="w-full  h-24 p-2 shadow-lg shadow-neutral-950 bg-neutral-950 rounded-xl hover:scale-[102%] will-change-transform duration-300 flex flex-row ease-in-out">
                        <img className="h-full rounded-md aspect-square" src={item.image} />
                        <div className="w-fit mx-4 h-full flex flex-col justify-center">
                            <p className="text-opacity-100 text-white h-fit  text-left text-lg  w-full font-bold">{item.title}  </p>
                            <p className="text-opacity-50 text-white h-fit  text-left text-lg  w-full font-bold">{item.artist} </p>
                        </div>

                        <button onClick={() => handlePlay(item.title, item.link)} className={`h-full mr-5 ml-auto items-center justify-center`}> 
                            {play ? 
                            handlePlaying(playing, item.title) : 
                            <FaPlay className="text-green-800 will-change-transform hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />}
                        </button>
                    </div>
                ))}

                
            </div>
        )
    }



    return (
        <div className="h-full w-full mt-5 p-5 flex items-center flex-col gap-5 ">
                           
            <audio ref={audioRef} className="absolute hidden" src={playingPath} />

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

                        <button onClick={() => setSection("Tracks")} className="w-full group bg-gradient-to-br bg-neutral-950  active:scale-95 px-5 h-10 items-center shadow-neutral-950 shadow-lg hover:scale-105 will-change-transform duration-300 ease-in-out rounded-xl flex flex-row gap-4">
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
                        <p className="w-full text-white hover:cursor-not-allowed text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Recently Played</p>
                        <p className="w-full text-white hover:cursor-not-allowed text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Favorite Tracks</p>
                        <p className="w-full text-white hover:cursor-not-allowed text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Charts</p>
                        <p className="w-full text-white hover:cursor-not-allowed text-opacity-50 hover:text-opacity-100 duration-300 ease-in-out">Radio</p>
                    </div>

                </div>

      
                <div id="middle" className="w-full h-[87vh]  justify-center rounded-xl scrollbar scrollbar-none overflow-y-auto gap-5 flex-col"> 
                    {section === 'Tracks' ? <Tracks setPlayingPath={setPlayingPath} audioref={audioRef} songs={all} play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} /> : <HomeSection setPlayingPath={setPlayingPath} audioref={audioRef} /> }
                </div>

                

                <div id="side2" className="h-fit w-2/12 backdrop-blur-xl  rounded-xl">
                    <div className="h-fit w-full p-2 flex flex-col items-center bg-neutral-950 rounded-2xl">
                        <div className="aspect-square w-full bg-neutral-950 rounded-lg">
                            {playing && all.find(song => song.title === playing) && (
                                <img 
                                    className="w-full h-full rounded-lg object-cover" 
                                    src={all.find(song => song.title === playing).image} 
                                    alt={playing}
                                />
                            )}
                        </div>

                        <div className="mt-5 mb-2">
                            <p className="w-full text-center font-bold bg-neutral-950 text-white text-sm truncate">
                                {playing || "No song playing"}
                            </p>
                            <p className="w-full text-center font-bold mt-1 text-white text-opacity-50 text-xs">
                                {playing ? all.find(song => song.title === playing)?.artist : ""}
                            </p>
                        </div>

                        <button 
                            onClick={() => {
                                if (playing) {
                                    if (play) {
                                        audioRef.current.pause();
                                        setPlay(false);
                                    } else {
                                        audioRef.current.play();
                                        setPlay(true);
                                    }
                                }
                            }} 
                            className="hover:cursor-pointer">
                            {play && playing ? 
                                <FaPause className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" /> :
                                <FaPlay className="text-green-800 hover:scale-110 duration-300 active:scale-95 ease-in-out hover:text-green-900 size-7" />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}