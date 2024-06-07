import React, { useEffect, useState } from "react";
import "../FullPageScroll.css";

const FullPageScroll = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = React.Children.count(children);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        setCurrentSection((prevSection) =>
          Math.min(prevSection + 1, totalSections - 1)
        );
      } else {
        // Scrolling up
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [totalSections]);

  return (
    <div
      className="fullpage-container"
      style={{ transform: `translateY(-${currentSection * 100}dvh)` }}
    >
      {children}
    </div>
  );
};

export default FullPageScroll;
