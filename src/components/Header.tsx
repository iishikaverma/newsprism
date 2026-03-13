import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <header
      className="flex items-center justify-between px-3 py-5 bg-[#1a1a1a]"
    >
        <div className="flex gap-1.5 items-center">
            <img src="/logo1.PNG" alt="logo" className="ml-5 w-12 rounded-md" />
            <h2 className="text-white font-oxygen font-black text-3xl">newsprism</h2>
        </div>
        <div className="nav-items">
            <ul className="hidden font-semibold md:flex items-center space-x-8 text-[#ffffff]">
                <li className="text-base cursor-pointer relative transition-colors duration-200 hover:text-blue-400">
                    HOME
                </li>
                <li className="text-base cursor-pointer relative transition-colors duration-200 hover:text-blue-400">
                    TOPICS
                </li>
                <li className="text-base cursor-pointer relative transition-colors duration-200 hover:text-blue-400">
                    TRENDS
                </li>
                <li className="text-base cursor-pointer relative transition-colors duration-200 hover:text-blue-400">
                    SEARCH
                </li>                    
                <li className="text-base cursor-pointer relative transition-colors duration-200 hover:text-blue-400">
                    SUBSCRIBE
                </li>
            </ul>
        </div>
        <button 
            className="px-4 py-2 font-semibold border border-white cursor-pointer rounded-md bg-transparent text-blue-400 text-sm transition-all duration-200 ease-in-out
                        hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-400/40 hover:scale-98
                        active:translate-y-0 active:shadow-md active:shadow-blue-400/30 mr-6" 
            onClick={()=>{
                btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
                }}>
                    {btnNameReact}
            </button>
    </header>
  );
};

export default Header;