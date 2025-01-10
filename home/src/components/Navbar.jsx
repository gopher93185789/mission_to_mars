import { useEffect, useState } from "react";

const keys = [
    { itemname: "Home", link: "/" },             
    { itemname: "Settings", link: "/settings" },            
    { itemname: "Flight", link: "/flight" },        
    { itemname: "Ebooks", link: "/ebooks" },   
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
            const time = setTimeout(() => {
                setClick(false)
            }, 300);

            return () => {
                clearTimeout(time)
            }
        }
    }, [click])
    
    return (
        <div className="gap-12 mt-10 flex justify-center select-none flex-row">
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