import { useWindowSize } from "@uidotdev/usehooks";

const Hero = () => {
  const size = useWindowSize();
  const responsive = size.width > 1024 ? "desktop" : "mobile";
  const title = ["Immersive", "experiences", " that", " deliver"];
  return (
    <section
      className={`hero   ${
        responsive == "mobile"
          ? "bg-[url('/images/mobile/image-hero.jpg')]"
          : "bg-[url('/images/desktop/image-hero.jpg')]"
      }  flex justify-center items-center bg-cover w-full h-screen text-white text-6xl font-thin px-4 desktop:px-20  desktop:justify-start`}
    >
      <article className="  border  w-[600px] border-white p-5">
        <h1 className=" uppercase  font-extralight font-Jovi text-5xl desktop:text-7xl">
          {title.map((res) => (
            <>
              <span className="py-3   tracking-[0.2rem]">{res}</span>
              <br />
            </>
          ))}
        </h1>
      </article>
    </section>
  );
};

export default Hero;
