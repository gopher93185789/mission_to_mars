import { useState } from "react";
import { VolumeSlider } from "../components/VolumeSlider";
import { ScrollBox } from "../components/ScrollBox";
import { SongBanner } from "../components/SongBanner";


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



    return (

        <div className="h-full w-full mt-5 p-5 flex items-center flex-col gap-5 ">
            <div className="w-4/5 h-[75vh] rounded-xl flex gap-5">
                <div id="side1" className="h-[75vh]  w-2/12 backdrop-blur-xl  rounded-xl ">

                </div>

      
                <div id="middle" className="w-full h-[75vh] justify-center rounded-xl scrollbar scrollbar-none overflow-y-auto gap-5 flex-col"> 
                    <SongBanner title="Weekly Top 50" />

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Made for you</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll1} />

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Recommended</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll2} />

                    <p className="text-white text-xl rounded-xl py-1 px-2 font-bold  mt-3">Explore</p>
                    <ScrollBox play={play} setPlay={setPlay} playing={playing} setPlaying={setPlaying} items={scroll3} />
                </div>

                <div id="side2" className="h-[75vh]  w-2/12 backdrop-blur-xl  rounded-xl">
                
                </div>
            </div>
            
            <div id="play-bar" className="px-34 w-2/4 h-24 backdrop-blur-xl flex flex-col items-center justify-center  rounded-xl">
                <VolumeSlider play={play} />
            </div>
        </div>
 
    )
}