import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToUp from "../utils/scrollUp";

const ScrollUp = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToUp();
  }, [pathname]);
  return null;
};

export default ScrollUp;
