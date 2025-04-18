import { useEffect, useState } from "react";
import scrollToUp from "../../utils/scrollUp";

const ScrollUppBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibly = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibly);
    return () => window.removeEventListener("scroll", toggleVisibly);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToUp}
        className="fixed bottom-6 right-10 z-50 p-3 rounded-full bg-red text-white text-2xl shadow-lg hover:bg-darkRed transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollUppBtn;
