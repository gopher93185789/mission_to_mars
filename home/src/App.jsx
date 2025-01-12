import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home";
import { StarCanvas } from "./components/StarCanvas";
import { Entertainment } from "./pages/Entertainment";
import { Ebooks } from "./pages/Ebooks/Ebooks";
import { Playground } from "./pages/Playground";



export default function App() {
  return (
    <div className="h-screen overflow-hidden font-jakarta w-screen  select-none flex flex-col items-center ">
      <Navbar />
      
      <StarCanvas numStars={300} width={window.innerWidth} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/entertainment" element={<Entertainment />}  />
          <Route path="/Playground" element={<Playground />}  />
          <Route path="/Library" element={<Ebooks />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}