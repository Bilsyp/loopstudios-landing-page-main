import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=" text-white py-10 px-4 text-center desktop:text-left bg-Black desktop:px-10">
      <div className="brand">
        <h1 className="font-Alata py-4 text-3xl">loopstudios</h1>
      </div>
      <div className="link flex justify-center items-center flex-col gap-8 my-4 desktop:grid grid-cols-2">
        <ul className="flex  justify-center items-center gap-4 text-xl flex-col  links-page desktop:flex-row desktop:justify-start">
          <li>About</li>
          <li>Carrers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <ul className="flex justify-center items-center desktop:justify-end gap-6 text-3xl">
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsPinterest />
          </li>
          <li>
            <BsTwitter />
          </li>
        </ul>
      </div>
      <h1 className="pt-5 desktop:text-right">
        © 2021 Loopstudios. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
