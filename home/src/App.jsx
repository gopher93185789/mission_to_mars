import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home";
import { StarCanvas } from "./components/StarCanvas";
import { Movies } from "./pages/Movies";
import { Ebooks } from "./pages/Ebooks/Ebooks";



export default function App() {
  return (
    <div className="h-screen font-jakarta w-screen  select-none flex flex-col items-center ">
      <Navbar />
      
      <StarCanvas numStars={300} width={window.innerWidth} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />}  />
          <Route path="/Flight"  />
          <Route path="/Ebooks" element={<Ebooks />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// tt32 - sz