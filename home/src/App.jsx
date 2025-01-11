import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/home/Home"
import { StarCanvas } from "./components/StarCanvas";



export default function App() {
  return (
    <div className="h-screen font-jakarta w-screen  select-none flex flex-col items-center ">
      <Navbar />
      
      <StarCanvas numStars={300} width={window.innerWidth} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Settings"  />
          <Route path="/Flight"  />
          <Route path="/Ebooks"  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}