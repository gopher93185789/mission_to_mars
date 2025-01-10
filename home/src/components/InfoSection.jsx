const keys = [
    { itemname: "Galaxy", info: "Milky Way" },             
    { itemname: "Diameter", info: "6,779 km" },            
    { itemname: "Day length", info: "24.6 hours" },        
    { itemname: "Temperature", info: "-60°C" },   
    { itemname: "Climate", info: "Cold" },     
];

export function InfoSection() {
    return (    
        <div className="h-40 flex flex-row gap-4 overflow-hidden">
            {keys.map((item, idx) => (
                <div key={idx} className="h-full w-64 flex flex-col justify-center p-5 items-center" >
                    <p className="text-[#BDC5E2] text-4xl w-full text-nowrap font-bold text-opacity-70">{item.itemname}</p>
                    <p className="text-white text-3xl text-opacity-90 w-full text-nowrap">{item.info}</p>
                </div>
            ))}
        </div>
    )
}