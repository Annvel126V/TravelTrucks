import HomeTitle from "./HomeTitle";
import HomeLinks from "./HomeLinks";
const HomePicture = () => {
  return (
    <section className="home-picture">
      <div className="relative ml-16 ">
        <HomeTitle />
        <HomeLinks />
      </div>
    </section>
  );
};

export default HomePicture;
