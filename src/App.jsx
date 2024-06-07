import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import AnimatedRoutes from "./components/AnimatedRoutees";

function App() {
  // useGSAP(() => {
  //   var tl = gsap.timeline();
  //   tl.to(".trans-item", {
  //     duration: 0.5,
  //     scaleY: 1,
  //     transformOrigin: "bottom left",
  //     stagger: 0.2,
  //   });
  //   tl.to(".trans-item", {
  //     duration: 0.5,
  //     scaleY: 0,
  //     transformOrigin: "top left",
  //     stagger: 0.1,
  //     delay: 0.1,
  //   });
  //   tl.to(".transition", {
  //     scaleY: 0,
  //     transformOrigin: "top left",
  //     delay: 0.2,
  //   });
  // });

  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
