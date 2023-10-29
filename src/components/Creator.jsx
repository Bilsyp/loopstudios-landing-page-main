import Card from "./Card";
import { dataImg } from "../data";
import { useWindowSize } from "@uidotdev/usehooks";
const Creator = () => {
  const size = useWindowSize();
  return (
    <section className="Creator box">
      <article>
        <h2>Our creations</h2>
      </article>
      <div className="image-wrapper">
        {dataImg.map((item) => (
          <Card
            url={size.width > 768 ? item.desktop : item.mobile}
            caption={item.caption}
            lastword={item.lastword}
            key={item.mobile}
          />
        ))}
      </div>
      <button className="uppercase mt-10 mx-auto block px-16  font-Alata border-2 rounded-sm text-xl  tracking-[6px] border-VeryDarkGray py-2">
        see all
      </button>
    </section>
  );
};

export default Creator;
