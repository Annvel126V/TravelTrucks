import { useEffect, useState } from "react";
import Header from "../components/section/Header/Header.jsx";
import HomePicture from "../components/section/Home/HomePicture.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <Header />
      <HomePicture />
    </>
  );
};

export default HomePage;
