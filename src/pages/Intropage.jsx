import { useLayoutEffect, useRef } from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";

function Intropage() {
  const [count, setCount] = useState(0);
  let trans = useRef(null);
  let container = useRef(null);
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
      tl.to(container, {
        duration: 0.5,
        opacity: 1,
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
        className="cover-page"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 2 },
        }}
        exit={{ opacity: 0 }}
      >
        <div className="contents">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <div className="car">
            <Link to="/home">Home</Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Intropage;
