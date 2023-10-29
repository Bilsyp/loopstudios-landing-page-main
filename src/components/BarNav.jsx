const BarNav = ({ toogle, onToogle }) => {
  return (
    <div
      className={`absolute z-10 bg-Black top-0 ${
        toogle ? "left-0" : "left-[-100%]"
      } w-full h-screen text-white duration-300 flex justify-start px-10 text-3xl items-center`}
    >
      <ul className="flex items-start font-thin gap-7 flex-col">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default BarNav;
