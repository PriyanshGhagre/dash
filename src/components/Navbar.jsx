import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { RiStarLine, RiSearch2Line } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import { Trending, Best, Search } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dotColor }) => (
  <div data-tip={title}>
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
    <ReactTooltip />
  </div>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
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
          customFunction={() => handleClick("trending")}
          color="blue"
          icon={<BiTrendingUp />}
        />
        <NavButton
          title="Top Employers"
          // dotColor="#03C9D7"
          customFunction={() => handleClick("top-employers")}
          color="blue"
          icon={<RiStarLine />}
        />
        <NavButton
          title="Search"
          // dotColor="#03C9D7"
          customFunction={() => handleClick("search")}
          color="blue"
          icon={<RiSearch2Line />}
        />
        {isClicked.trending && <Trending />}
        {isClicked.best && <Best />}
        {isClicked.search && <Search />}
      </div>
    </div>
  );
};

export default Navbar;
