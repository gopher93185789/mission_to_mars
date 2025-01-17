import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home";
import { Entertainment } from "./pages/Entertainment";
import { Ebooks } from "./pages/Ebooks/Ebooks";
import { Playground } from "./pages/Playground";
import { Music } from "./pages/Music";
import { WebCam } from "./pages/WebCam";


const pages = [
    { itemname: "Home", link: "/home" },   
    { itemname: "Music", link: "/music" },    
    { itemname: "Entertainment", link: "/entertainment" },                                
    { itemname: "Library", link: "/Library" },   
    { itemname: "Games", link: "/games" },
    { itemname: "Flight", link: "/flight" }, 
    { itemname: "Fitness", link: "/fitness" },            
    { itemname: "Food", link: "/food" },   
    { itemname: "VR", link: "/vr" }, 
    { itemname: "Cameras", link: "/cameras" },
    { itemname: "Playground", link: "/playground" },                   
];



export default function App() {
  return (
    <div className="h-screen  overflow-hidden font-jakarta  select-none flex flex-col items-center ">
      <Navbar pages={pages} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/flight"  />
          <Route path="/Library" element={<Ebooks />}  />
          <Route path="/games"  />
          <Route path="/entertainment" element={<Entertainment />}  />
          <Route path="/fitness"  />
          <Route path="/music" element={<Music />}  />
          <Route path="/food"  />
          <Route path="/vr"  />
          <Route path="/cameras" element={<WebCam />}  />
          <Route path="/Playground" element={<Playground />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}