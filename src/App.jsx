import logo from "./assets/logo.ico"
function App() {


  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-white to-cyan-100">
      <header className="flex justify-between items-center text-black py-6 px-8
md:px-32 bg-white drop-shadow-md
      ">
        <a href="#">
          <img src={logo} alt="" className="w-52 hover:scale-105 transition-all" />
        </a>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li classname="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
        <li classname="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">Book Now</li>
        <li classname="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">About</li>
        <li classname="p-3 hover:bg-sky-300 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
        </ul>

        <div className="relative hidden md:flex items-center justify-center gap-3"></div>
        <i className="bx bx-search absolute"></i>
        <input type="text" placeholder="Search..." className="py-1 pl-5 rounded -x1 border-2 border-sky-200 focus:bg-slate-100 focus:outline-sky-200"/>
      </header>
    </div>

    
  )
}

export default App
