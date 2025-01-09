import { useEffect, useState } from "react";

const keys = [
    { itemname: "Home", link: "#" },             
    { itemname: "Settings", link: "#" },            
    { itemname: "Flight", link: "#" },        
    { itemname: "Ebooks", link: "#" },   
    { itemname: "Games", link: "#" },
    { itemname: "Movies", link: "#" },   
    { itemname: "Shows", link: "#" },      
    { itemname: "Fitness", link: "#" },            
    { itemname: "Music", link: "#" },        
    { itemname: "Food", link: "#" },   
    { itemname: "Help", link: "#" },          
];


export function Navbar() {
    const [click, setClick] = useState(null)

    useEffect(() => {
        if (click !== null) {
            setTimeout(() => {
                setClick(false)
            }, 300);
        }
    }, [click])
    
    return (
        <div className="gap-12 h-20 flex justify-center select-none flex-row">
            {keys.map((item, idx) => (
                <div className="w-full flex justify-center items-center" key={idx}>
                    <p onClick={() => {setClick(item.itemname)}} className={`w-full text-2xl text-center text-white hover:text-opacity-100 text-opacity-50 duration-300 ease-in-out hover:cursor-pointer ${click == item.itemname ? "scale-95": ""}`}>
                        <a href={item.link}>{item.itemname}</a>
                    </p>
                </div>
            ))}
        </div>
    )
}