import Card from "./Card";
import { dataImg } from "../data";
import { useWindowSize } from "@uidotdev/usehooks";
import Button from "./Button";
const Creator = () => {
  const size = useWindowSize();
  return (
    <section className="Creator  box">
      <article className=" py-20 desktop:flex justify-between items-center desktop:px-5">
        <h2>Our creations</h2>
        {size.width > 1024 ? <Button /> : ""}
      </article>
      <div className="image-wrapper desktop:flex justify-center items-center gap-5 flex-wrap">
        {dataImg.map((item) => (
          <Card
            url={size.width > 1024 ? item.desktop : item.mobile}
            caption={item.caption}
            lastword={item.lastword}
            key={item.mobile}
          />
        ))}
      </div>
      {size.width < 1024 ? <Button custom={"mx-auto block mt-10"} /> : ""}
    </section>
  );
};

export default Creator;
