const keys = [
    {itemname: "galaxy", info: "Milky Way"},
    {itemname: "galaxy", info: "Milky Way"},
    {itemname: "galaxy", info: "Milky Way"},
    {itemname: "galaxy", info: "Milky Way"},
    {itemname: "galaxy", info: "Milky Way"},
]

export default function InfoSection() {
    return (    
        <div className="h-48 w-10/12 bg-neutral-600 flex flex-row gap-5">
            {keys.map((item, idx) => (
                <div key={idx} className="h-full w-full bg-neutral-300 flex flex-col items-center" >
                    <p className="text-white w-full text-center">{item.itemname}</p>
                    <p className="text-white w-full text-center">{item.info}</p>
                </div>
            ))}
        </div>
    )
    
}