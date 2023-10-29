const About = () => {
  return (
    <section className="About box  ">
      <div className="image-wrapper  desktop:px-10 relative">
        <img
          className="block "
          src="/images/mobile/image-interactive.jpg"
          alt=""
        />
        <article className="py-10 text-center desktop:absolute desktop:bg-white  desktop:text-left desktop:px-10 desktop:w-[50%] desktop:translate-x-[-50%] left-[70%] top-[70%]  desktop:translate-y-[-50%] ">
          <h2>The leader in interactive VR</h2>
          <p className="text-[1.2rem]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
