const Card = ({ url, caption, lastword }) => {
  return (
    <div className={`card bg-cover my-5 px-4 `}>
      <div className="relative">
        <h3 className=" text-white uppercase font-Jovi absolute text-3xl top-[60%] translate-y-[-50%] leading-10 left-5">
          {caption} <br /> {lastword}
        </h3>
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Card;
