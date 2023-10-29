import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BarNav from "./BarNav";
const Nav = () => {
  const [toogle, setToogle] = useState(false);

  const onToogle = () => setToogle(!toogle);

  return (
    <header className="   fixed w-full top-0  text-white backdrop-blur-md ">
      <nav className="">
        <div className="brand px-8 py-5 flex justify-between items-center relative z-20">
          <h1 className=" text-3xl font-bold">loopstudios</h1>
          <button onClick={onToogle} className="text-3xl">
            {!toogle ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <BarNav toogle={toogle} onToogle={ontoggle} />
      </nav>
    </header>
  );
};

export default Nav;
