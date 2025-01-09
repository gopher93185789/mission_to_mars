const LeftButtons = [
  {buttonName: "Dashboard", link: ""},
  {buttonName: "Projects", link: ""},
  {buttonName: "Calendar", link: ""},
  {buttonName: "Tasks", link: ""},
  {buttonName: "Reports", link: ""},
]

const RightButtons = [
  {buttonName: "Profile", link: ""},
  {buttonName: "Messages", link: ""},
  {buttonName: "Settings", link: ""},
  {buttonName: "Support", link: ""},
  {buttonName: "Logout", link: ""},
]


export default function App() {
  return (
    <div className="h-screen w-screen bg-black pt-8 flex flex-col items-center">
      
      <div className="w-10/12 h-24 rounded-xl  flex flex-row">
        <div id="left" className="h-full w-full gap-3 flex flex-row items-center">
          {LeftButtons.map((item, idx) => (
            <a key={idx} className="text-2xl text-white px-3 py-1 text-opacity-50 duration-300 ease-in-out hover:text-opacity-90 rounded-2xl w-full text-center justify-center items-center" href={item.link}>{item.buttonName}</a>
          ))}
        </div>

        <div id="middle" className="text-white flex items-center justify-center"><p className="text-6xl font-bold whitespace-nowrap">mission to mars</p></div>
        
        <div id="right" className="h-full w-full gap-3 flex flex-row items-center">
          {RightButtons.map((item, idx) => (
            <a key={idx} className="text-2xl text-white px-3 py-1 text-opacity-50 duration-300 ease-in-out hover:text-opacity-90 rounded-2xl w-full text-center justify-center items-center" href={item.link}>{item.buttonName}</a>
          ))}
        </div>
      </div>
    </div>
  )
}