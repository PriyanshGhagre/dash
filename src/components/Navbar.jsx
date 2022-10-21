import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { RiStarLine, RiSearch2Line } from "react-icons/ri"
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Trending, Best, Search } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunction}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu (false)
    }
    else {
      setActiveMenu(true)
    }
  }, [screenSize])
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunction={() =>
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)
        }
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
      <NavButton
        title="Trending"
        dotColor="#03C9D7"
        customFunction={() => handleClick('trending')}
        color="blue"
        icon={<BiTrendingUp />}
      />
      <NavButton
        title="Top Employers"
        // dotColor="#03C9D7"
        customFunction={() => handleClick('top-employers')}
        color="blue"
        icon={<RiStarLine />}
      />
      <NavButton
        title="Search"
        // dotColor="#03C9D7"
        customFunction={() => handleClick('search')}
        color="blue"
        icon={<RiSearch2Line />}
      />
      {/* <TooltipComponent content="Search" position="BottomCenter">
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick('Search')}>
          <img className="rounded-full w-8 h-8"
          src={avatar}/>
          <p>
            <span className="text-gray-400 text-14">Hi, </span> {' '}
            <span className="text-gray-400 font-bold ml-1 text-14">Priyansh</span>
          </p>
          < className="text-gray-400 text-14" />
        </div>
      </TooltipComponent> */}
      { isClicked.trending && <Trending />}
      { isClicked.best && <Best />}
      { isClicked.search && <Search />}
      </div>
    </div>
  );
};

export default Navbar;
