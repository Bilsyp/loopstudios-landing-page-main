const Card = ({ url, caption, lastword }) => {
  return (
    <div
      className={`card bg-cover mx-auto block my-5 px-4 d  group  cursor-pointer`}
    >
      <div className="relative">
        <div className="absolute top-0 left-0  duration-300 group-hover:bg-[rgba(255,255,255,0.7)]  -z-1 w-full h-full"></div>
        <h3 className=" text-white uppercase font-Jovi absolute text-3xl top-[60%] group-hover:text-black group-hover:font-bold  z-40 translate-y-[-50%] leading-10 left-5 desktop:top-[80%]">
          {caption} <br /> {lastword}
        </h3>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Card;
