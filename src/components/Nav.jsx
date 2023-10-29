import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BarNav from "./BarNav";
import { useWindowSize } from "@uidotdev/usehooks";
const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const size = useWindowSize();
  const responsive = size.width > 1024 ? "desktop" : "mobile";

  const onToogle = () => setToogle(!toogle);

  return (
    <header className="   fixed w-full top-0 desktop:px-11 text-white backdrop-blur-md ">
      <nav className="desktop:flex justify-between items-center">
        <div className="brand px-8 py-5 flex justify-between items-center relative z-20">
          <h1 className=" text-3xl font-bold">loopstudios</h1>
          <button onClick={onToogle} className="text-3xl desktop:hidden">
            {!toogle ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <BarNav toogle={toogle} onToogle={ontoggle} responsive={responsive} />
      </nav>
    </header>
  );
};

export default Nav;
