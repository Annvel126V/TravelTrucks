import HomeTitle from "./HomeTitle";
import HomeLinks from "./HomeLinks";
const HomePicture = () => {
  return (
    <section className="home-picture flex flex-col w-full justify-center gap-10 pl-24">
      <HomeTitle />
      <HomeLinks />
    </section>
  );
};

export default HomePicture;
