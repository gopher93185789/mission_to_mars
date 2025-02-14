import {useState } from "react";

const keys = [
    { itemname: "Home", link: "/home" },                       
    { itemname: "Flight", link: "/flight" },        
    { itemname: "Library", link: "/Library" },   
    { itemname: "Games", link: "/games" },
    { itemname: "Entertainment", link: "/entertainment" },    
    { itemname: "Fitness", link: "/fitness" },            
    { itemname: "Music", link: "/music" },        
    { itemname: "Food", link: "/food" },   
    { itemname: "VR", link: "/vr" }, 
    { itemname: "Cameras", link: "/cameras" },
    { itemname: "Playground", link: "/playground" },                   
];


export function Navbar({pages = keys}) {
    const path = window.location.pathname
    const [enter, SetEnter] = useState(false)

    const evalpath = (p1, p2) => {
        if (p1.toLowerCase() === p2.toLowerCase()) {
            return "text-opacity-100";
        } else {
            return "text-opacity-50";
        }
    }
    
    return (
        <div className="gap-12 mt-10 z-50 flex justify-center select-none flex-row">
            {pages.map((item, idx) => (
                <div className="w-full flex justify-center items-center" key={idx}>
                    <p onClick={() => {setClick(item.itemname)}} onMouseEnter={() => SetEnter(true)} onMouseLeave={() => SetEnter(false)} className={`w-full text-lg text-center text-white hover:text-opacity-100 ${enter ? "text-opacity-50" : evalpath(item.link, path) } duration-300 ease-in-out hover:cursor-pointer hover:scale-110 will-change-transform`}>
                        <a href={item.link}>{item.itemname}</a>
                    </p>
                </div>
            ))}
        </div>
    )
}