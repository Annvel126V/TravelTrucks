import HomeTitle from "../components/section/Home/HomeTitle.jsx";

import HomePicture from "../components/section/Home/HomePicture.jsx";
import Navigation from "../components/section/Header/Navigation.jsx";
const HomePage = () => {
  return (
    <>
      <div className="">
        <Navigation />
        <HomeTitle />
      </div>
      <HomePicture />
    </>
  );
};

export default HomePage;
