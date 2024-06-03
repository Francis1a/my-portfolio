import React, { useRef, useEffect } from "react";
import $ from "jquery";
import "../FullPageScroll.css"; // Import your CSS file for styling

const FullPage = ({ children }) => {
  useEffect(() => {
    $("#pagepiling").pagepiling({
      direction: "vertical",
      menu: null,
      verticalCentered: true,
      sectionsColor: [],
      anchors: [],
      scrollingSpeed: 700,
      easing: "swing",
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
        textColor: "#000",
        bulletsColor: "#000",
        position: "right",
        tooltips: [],
      },
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: false,

      //events
      afterLoad: function (anchorLink, index) {},
      onLeave: function (index, nextIndex, direction) {},
    });
  }, []);

  return (
    <>
      <div id="pagepiling" className="fullpage-container">
        {child}
      </div>
    </>
  );
};

export default FullPage;
