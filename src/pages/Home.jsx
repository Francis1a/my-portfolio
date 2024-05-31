import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import Navigation from "../components/Navigation";
import gsap from "gsap";
import "animate.css";
import { motion } from "framer-motion";
import MySvg from "../assets/SVG/sample1.svg?react";
import MySvg1 from "../assets/SVG/Asset8.svg?react";
import MySvg2 from "../assets/SVG/Asset9.svg?react";
import MySvg3 from "../assets/SVG/Asset10.svg?react";
// import MySvg4 from "../assets/SVG/Asset11.svg?react";
// import MySvg5 from "../assets/SVG/Asset13.svg?react";
// import MySvg6 from "../assets/SVG/Asset14.svg?react";
// import MySvg7 from "../assets/SVG/Asset15.svg?react";
// import MySvg8 from "../assets/SVG/Asset16.svg?react";
// import MySvg9 from "../assets/SVG/Asset17.svg?react";
// import MySvg10 from "../assets/SVG/Asset19.svg?react";
// import MySvg11 from "../assets/SVG/Asset20.svg?react";

function Home() {
  let trans = useRef(null);
  const [isAnimationClass1, setIsAnimationClass1] = useState(true);

  useEffect(() => {
    const element = document.querySelector(".icon1");

    const handleAnimationEnd = () => {
      setIsAnimationClass1((prev) => !prev);
    };

    element.addEventListener("animationend", handleAnimationEnd);

    return () => {
      element.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline();

      tl.to(".trans-item", {
        duration: 0.5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: 0.2,
      });

      tl.to(".trans-item", {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: "top left",
        stagger: 0.1,
        delay: 0.1,
      });

      tl.to(".transition", {
        scaleY: 0,
        transformOrigin: "top left",
      });
    }, trans);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="animate" ref={trans}>
        <ul className="transition">
          <li className="trans-item"></li>
          <li className="trans-item"></li>
          <li className="trans-item"></li>
          <li className="trans-item"></li>
          <li className="trans-item"></li>
          <li className="trans-item"></li>
        </ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 2 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="wrapper">
          <div className="cover-page">
            <div className="navigation">
              <Navigation />
            </div>
            <div className="banner-home">
              <div className="bannerSvg">
                <MySvg />
                <div className="movIcon">
                  <div
                    // className="icon1 animate__animated animate__fadeInRight animate__delay-3s "
                    className={`icon1 animate__animated ${
                      isAnimationClass1
                        ? "animate__zoomInRight animate__delay-5s animate__slow"
                        : "animate__swing animate__infinite animate__slow"
                    }`}
                  >
                    <MySvg1 />
                  </div>
                  {/* <div className="icon2">
                    <MySvg2 />
                  </div> */}
                  <div className="icon3">
                    <MySvg3 />
                  </div>
                  {/*<div className="icon4">
                <MySvg4 />
              </div>
              <div className="icon5">
                <MySvg5 />
              </div>
              <div className="icon6">
                <MySvg6 />
              </div>
              <div className="icon7">
                <MySvg7 />
              </div>
              <div className="icon8">
                <MySvg8 />
              </div>
              <div className="icon9">
                <MySvg9 />
              </div>
              <div className="icon10">
                <MySvg10 />
              </div>
              <div className="icon11">
                <MySvg11 />
              </div> */}
                </div>
              </div>
              <div className="bnr-info">
                <h2 className="ubuntu">Hi! I am Francis Cristopher</h2>
                <p className="">Web Developer</p>
              </div>
            </div>
          </div>
          <div id="aboutme"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
