import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "animate.css";
import { motion } from "framer-motion";
import MySvg from "../assets/SVG/sample1.svg?react";
import MySvg1 from "../assets/SVG/Asset8.svg?react";
import MySvg2 from "../assets/SVG/Asset9.svg?react";
import MySvg3 from "../assets/SVG/Asset10.svg?react";
import MySvg4 from "../assets/SVG/Asset11.svg?react";
import MySvg5 from "../assets/SVG/Asset13.svg?react";
import MySvg6 from "../assets/SVG/Asset14.svg?react";
import MySvg7 from "../assets/SVG/Asset15.svg?react";
import MySvg8 from "../assets/SVG/Asset16.svg?react";
import MySvg9 from "../assets/SVG/Asset17.svg?react";
import MySvg10 from "../assets/SVG/Asset19.svg?react";
import MySvg11 from "../assets/SVG/Asset20.svg?react";
import MySvg12 from "../assets/SVG/Asset22.svg?react";
import MySvg13 from "../assets/SVG/Asset23.svg?react";
import ProweaverLogo from "../assets/SVG/proweaver-logo.svg?react";
import InsysticLogo from "../assets/SVG/INSYSTIC-LOGO.png";
import HuaweiLogo from "../assets/SVG/huaweiLogo.png";
import GlobeLogo from "../assets/SVG/globeLogo.png";
import WorpressLogo from "../assets/SVG/WordpressLogo.png";
import WooCommerceLogo from "../assets/SVG/WooCommerce.png";
import ShopifyLogo from "../assets/SVG/Shopify.png";
import ElementorLogo from "../assets/SVG/ElementorLogo.png";
import XaraLogo from "../assets/SVG/DiviLogo.png";

import Svg1 from "../assets/SVG/html-logo.svg?react";
import Svg2 from "../assets/SVG/css-logo.svg?react";
import Svg3 from "../assets/SVG/js-logo.svg?react";
import Svg4 from "../assets/SVG/jquery-logo.svg?react";
import Svg5 from "../assets/SVG/php-logo.svg?react";
import Svg6 from "../assets/SVG/vscode.svg?react";
import Svg7 from "../assets/SVG/github-logo.svg?react";
import Svg8 from "../assets/SVG/Asset9.svg?react";
import Svg9 from "../assets/SVG/nodejs-logo.svg?react";
import Svg10 from "../assets/SVG/Wordpress-Logo.svg?react";
import Svg11 from "../assets/SVG/WooCommerce_logo.svg?react";
import Svg12 from "../assets/SVG/Shopify_logo.svg?react";
import Svg13 from "../assets/SVG/Photoshop-logo.svg?react";
import Svg14 from "../assets/SVG/Illustrator-logo.svg?react";
import Svg15 from "../assets/SVG/Lightroom-logo.svg?react";
import Svg16 from "../assets/SVG/Npm-logo.svg?react";
import Svg17 from "../assets/SVG/CPanel-logo.svg?react";
import Svg18 from "../assets/SVG/Tailwind-Logo.svg?react";
import Svg19 from "../assets/SVG/React-logo.svg?react";
import Svg20 from "../assets/SVG/Laravel-logo.svg?react";
import Svg21 from "../assets/SVG/C++-Logo.svg?react";
import Svg22 from "../assets/SVG/Arduino-Logo.svg?react";
import Svg23 from "../assets/SVG/raspberry-pi-logo.svg?react";
import Svg24 from "../assets/SVG/Scilab-Logo.png";
import Svg25 from "../assets/SVG/DiviLogo.png";
import Svg26 from "../assets/SVG/ElementorLogo.png";
import Svg27 from "../assets/SVG/Shopify.png";
import Svg28 from "../assets/SVG/xaraLogo.png";
import Svg29 from "../assets/SVG/WooCommerce.png";
import img1 from "../assets/email.png";
import img2 from "../assets/linkedin.png";
import img3 from "../assets/github.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import TypeWritereffect from "../components/TypeWritereffect";

function Home() {
  let trans = useRef(null);
  let logoRotation = useRef(null);
  let logoRotation2 = useRef(null);

  const isThrottled = useRef(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isThrottled.current) return;
      let numScroll = event.deltaY;
      if (numScroll > 0) {
        scrollToSection(currentSectionIndex + 1);
      } else {
        scrollToSection(currentSectionIndex - 1);
      }
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), 1000);
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  });

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    scrollToSection(4);
  };

  const scrollToSection = (index) => {
    const sections = [
      "#home",
      "#skills",
      "#experiences",
      "#projects",
      "#contact",
    ];
    if ((index >= 0 && index <= sections.length - 1) || isButtonClicked) {
      setCurrentSectionIndex(index);
      console.log(index);
      console.log(sections[index]);
      //replace the link
      window.location.replace(sections[index]);
      setIsButtonClicked(false);
      gsap.to(".letter, .letter2, .letter3, .letter4", {
        left: -320,
        stagger: 0,
        opacity: 0,
      });
    }
    if (index == 1) {
      gsap.to(".letter", { left: 0, delay: 0.5, opacity: 1, stagger: 0.1 });
    } else {
      gsap.to(".letter", { opacity: 0 });
      gsap.to(".letter", { left: -320, stagger: 0 });
    }

    if (index == 2) {
      gsap.to(".letter2", { left: 0, delay: 0.5, opacity: 1, stagger: 0.1 });
    } else {
      gsap.to(".letter2", { opacity: 0 });
      gsap.to(".letter2", { left: -320, stagger: 0 });
    }

    if (index == 3) {
      gsap.to(".letter3", { left: 0, delay: 0.5, opacity: 1, stagger: 0.1 });
    } else {
      gsap.to(".letter3", { opacity: 0 });
      gsap.to(".letter3", { left: -320, stagger: 0 });
    }

    if (index == 4 || index == 5) {
      gsap.to(".letter4", {
        left: 0,
        delay: 0.5,
        opacity: 1,
        stagger: 0.1,
      });
    } else {
      gsap.to(".letter4", { opacity: 0 });
      gsap.to(".letter4", { left: -320, stagger: 0 });
    }
  };

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

  useGSAP(() => {
    gsap.to(logoRotation, {
      duration: 4,
      rotation: 360,
      ease: "none",
      repeat: -1,
    });

    gsap.to(logoRotation2, {
      duration: 2,
      rotation: -360,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".icon10", {
      duration: 2,
      rotation: 360,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".icon8", {
      duration: 5,
      rotation: 360,
      ease: "none",
      repeat: -1,
    });
  });

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
        <div id="home" className="cover-page section">
          <div className="wrapper">
            <div className="navigation">
              <div className="hdr-logo">
                <TypeWritereffect
                  datatype={[
                    "Hi! Im Francis",
                    "I am Creative",
                    "I Love Design",
                    "I Love to Develop",
                  ]}
                />
              </div>
              <nav className="navbar">
                <div className="contact">
                  {/* <Link to="#contact" onClick={window.location.replace("#contact")}>
            Send me a Letter
          </Link> */}
                  <a href="#contact" onClick={handleButtonClick}>
                    Send me a Letter
                  </a>
                </div>
                {/* <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/labotratory" className="nav-links">
              Labs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Message Me
            </Link>
          </li>
        </ul> */}
              </nav>
            </div>
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
                <div className="icon2">
                  <MySvg2 />
                </div>
                <div className="icon3">
                  <MySvg3 />
                </div>
                <div className="icon4 animate__animated animate__tada animate__infinite">
                  <MySvg4 />
                </div>
                <div className="icon5">
                  <MySvg5 />
                </div>
                <div
                  className="icon6"
                  ref={(el) => {
                    logoRotation = el;
                  }}
                >
                  <MySvg6 />
                </div>
                <div
                  className="icon7"
                  ref={(el) => {
                    logoRotation2 = el;
                  }}
                >
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
                </div>
                <div className="icon12">
                  <MySvg12 />
                </div>
                <div className="icon13">
                  <MySvg13 />
                </div>
              </div>
            </div>
            <div className="bnr-info">
              <h2 className="ubuntu">Hi! I am Francis Cristopher</h2>
              <p className="">Web Developer based in Philippines</p>
            </div>
          </div>
        </div>
        <div id="skills" className="section">
          <div className="bgText">
            <h2 className="anton">
              <span className="letter firstLetter">S</span>
              <span className="letter ">k</span>
              <span className="letter ">i</span>
              <span className="letter ">l</span>
              <span className="letter ">l</span>
              <span className="letter ">s</span>
            </h2>
          </div>
          <div className="tablecell">
            <div className="container">
              <div className="title">
                <TypeWritereffect
                  datatype={[
                    "Skills and Technologies...",
                    "Skills and Technologies...",
                    "Skills and Technologies...",
                  ]}
                />
              </div>
              <section>
                <i>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</i>
                <p>
                  The main area of expertise is front end development (client
                  side of the web).
                </p>
                <p>
                  Proficient in HTML, CSS, and JavaScript, I build website with
                  WordPress, create custom plugins and animations, and code
                  interactive layouts.
                </p>
              </section>
              <div className="skills">
                <div className="skillSvg">
                  <Svg1 />
                </div>
                <div className="skillSvg">
                  <Svg2 />
                </div>
                <div className="skillSvg">
                  <Svg3 />
                </div>
                <div className="skillSvg">
                  <Svg13 />
                </div>
                <div className="skillSvg">
                  <Svg14 />
                </div>
                <div className="skillSvg">
                  <Svg15 />
                </div>
                <div className="skillSvg">
                  <Svg4 />
                </div>
                <div className="skillSvg">
                  <Svg5 />
                </div>
                <div className="skillSvg">
                  <Svg6 />
                </div>
                <div className="skillSvg">
                  <Svg7 />
                </div>
                <div className="skillSvg">
                  <Svg8 />
                </div>
                <div className="skillSvg">
                  <Svg9 />
                </div>
                <div className="skillSvg">
                  <Svg10 />
                </div>
                <div className="skillSvg">
                  <Svg11 />
                </div>
                <div className="skillSvg">
                  <Svg12 />
                </div>
                <div className="skillSvg">
                  <Svg16 />
                </div>
                <div className="skillSvg">
                  <Svg17 />
                </div>
                <div className="skillSvg">
                  <Svg18 />
                </div>
                <div className="skillSvg">
                  <Svg19 />
                </div>
                <div className="skillSvg">
                  <Svg20 />
                </div>
                <div className="skillSvg">
                  <Svg21 />
                </div>
                <div className="skillSvg">
                  <Svg22 />
                </div>
                <div className="skillSvg">
                  <Svg23 />
                </div>
                <div className="skillSvg">
                  <img src={Svg24} alt="" />
                </div>
                <div className="skillSvg">
                  <img src={Svg25} alt="" />
                </div>
                <div className="skillSvg">
                  <img src={Svg26} alt="" />
                </div>
                <div className="skillSvg">
                  <img src={Svg27} alt="" />
                </div>
                <div className="skillSvg">
                  <img src={Svg28} alt="" />
                </div>
                <div className="skillSvg">
                  <img src={Svg29} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="experiences" className="section">
          <div className="bgText">
            <h2 className="anton">
              <span className="letter2 firstLetter">E</span>
              <span className="letter2 ">x</span>
              <span className="letter2 ">p</span>
              <span className="letter2 ">e</span>
              <span className="letter2 ">r</span>
              <span className="letter2 ">i</span>
              <span className="letter2 ">e</span>
              <span className="letter2 ">n</span>
              <span className="letter2 ">c</span>
              <span className="letter2 ">e</span>
              <span className="letter2 ">s</span>
            </h2>
          </div>
          <div className="tablecell">
            <div className="container">
              <div className="title">
                <TypeWritereffect
                  datatype={[
                    "Experiences...",
                    "Experiences...",
                    "Experiences...",
                  ]}
                />
              </div>
              <section>
                <p>
                  Here, I am excited to share the journey that has shaped my
                  career, showcasing the diverse experiences and accomplishments
                  that define who I am today. This serves as a testament to my
                  growth and dedication.
                </p>
              </section>
              <div className="workExperience">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="work">
                      <div className="workContainer">
                        <figure>
                          {/* <img src={proweaverLogo} alt="Proweaver Logo" /> */}
                          <a href="https://www.proweaver.com/" target="_blank">
                            <ProweaverLogo />
                          </a>
                        </figure>
                        <h2 className="textHeader ubuntu">
                          Web Developer (<i>Team Leader</i>)
                        </h2>
                        <a
                          href="https://www.proweaver.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://www.proweaver.com/
                        </a>
                        <h3 className="company">
                          <a href="https://www.proweaver.com/" target="_blank">
                            <i>
                              Proweaver, Inc.: Cebu Business Park, Cebu City
                            </i>
                          </a>
                        </h3>
                        <p className="date">April 2022 – January 2024</p>
                        <div className="webtechnology">
                          <section>
                            <figure>
                              <img src={WorpressLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                          <section>
                            <figure>
                              <img src={WooCommerceLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                          <section>
                            <figure>
                              <img src={ShopifyLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                          <section>
                            <figure>
                              <img src={ElementorLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                          <section>
                            <figure>
                              <img src={XaraLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                        </div>
                      </div>
                      <div className="workContainer">
                        <ul className="responsibilities">
                          <li>
                            Skilled with WordPress as a CMS, experienced in all
                            development aspects, such as installation, theme and
                            plugin management, custom feature development,
                            performance and security optimization, and website
                            maintenance and troubleshooting.
                          </li>
                          <li>
                            Design a captivating landing page that effectively
                            tells your brand&apos;s story, using the expertly
                            crafted design by our talented web designer.
                          </li>
                          <li>
                            Create a strong and efficient backend system for
                            smooth email delivery, guaranteeing messages are
                            sent to recipients quickly and dependably
                          </li>
                          <li>
                            Use WooCommerce plugins to provide unique and
                            tailored solutions for your online store, improving
                            customer shopping experiences based on your business
                            requirements.
                          </li>
                          <li>
                            Performed quality assurance tests on various sites
                            to ensure cross browser compatibility and mobile
                            responsiveness.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="work">
                      <div className="workContainer">
                        <figure className="insysticLogo">
                          <img src={InsysticLogo} alt="Insystic Logo" />
                        </figure>
                        <h2 className="textHeader ubuntu">
                          Commissioning Engineer (<i>Team Leader</i>)
                        </h2>
                        <h3 className="company">
                          <i>Insystic Corporation: Tipolo Mandaue City</i>
                        </h3>
                        <p className="date">March 2021 – January 2022</p>
                        <div className="technologies">
                          <section>
                            <figure>
                              <img src={HuaweiLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                          <section>
                            <figure>
                              <img src={GlobeLogo} alt="Huawei Logo" />
                            </figure>
                          </section>
                        </div>
                      </div>
                      <div className="workContainer">
                        <ul className="responsibilities">
                          <li>
                            Efficiently install hardware and software components
                            for equipment such as ATN 980C, ATN910C, MA5800, and
                            GPONA devices, ensuring smooth integration into your
                            network and optimal performance across operations.
                          </li>
                          <li>
                            Thoroughly install and set up the network, including
                            hardware and software, to create a reliable
                            infrastructure. Configure settings, protocols,
                            security, and access controls for smooth data
                            transmission, connectivity, and management.
                          </li>
                          <li>
                            Follow industry standards and best practices during
                            installation and configuration to create a stable,
                            high-performance network that meets your
                            organization&apos;s needs.
                          </li>
                          <li>
                            Performed thorough inspections on structures,
                            evaluating their condition and compliance. Skilled
                            in conducting surveys, defect analysis, energy
                            efficiency assessments, and accessibility
                            evaluations. Also adept at accurately measuring and
                            mapping land for construction projects and property
                            boundaries
                          </li>
                          <li>
                            Carefully planned and executed logistics strategies
                            to boost efficiency and reduce downtime. This
                            included assessing equipment needs, coordinating
                            schedules with stakeholders, and setting up
                            inventory systems. I also worked closely with the
                            installation team to ensure smooth coordination
                            between equipment and project timelines.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <section>
                <i>
                  ANYONE WHO HAS NEVER MADE A MISTAKE HAS NEVER TRIED EVERYTHING
                  NEW. <small>~Albert Einstien</small>
                </i>
              </section>
            </div>
          </div>
        </div>
        <div id="projects" className="section">
          <div className="bgText">
            <h2 className="anton">
              <span className="letter3 firstLetter">P</span>
              <span className="letter3">r</span>
              <span className="letter3">o</span>
              <span className="letter3">j</span>
              <span className="letter3">e</span>
              <span className="letter3">c</span>
              <span className="letter3">t</span>
              <span className="letter3">s</span>
            </h2>
          </div>
          <div className="tablecell">
            <div className="container">
              <div className="title">
                <TypeWritereffect
                  datatype={[
                    "Projects and Experiments...",
                    "Projects and Experiments...",
                    "Projects and Experiments...",
                  ]}
                />
              </div>
              <div className="contents">
                <div className="contain">
                  <div className="component server">
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="component server">
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="slot2"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                  <div className="component signals">
                    <div id="load">
                      <div>U</div>
                      <div>P</div>
                      <div>L</div>
                      <div>O</div>
                      <div>A</div>
                      <div>D</div>
                      <div>I</div>
                      <div>N</div>
                      <div>G</div>
                    </div>
                  </div>
                  <div className="component PC">
                    <div className="loading ">
                      <div className="screen">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <div className="shadow"></div>
                        <span>Work in Progress</span>
                      </div>
                    </div>
                  </div>
                  <div className="component server">
                    <div className="slot"></div>
                    <div className="slot"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="section">
          <div className="bgText">
            <h2 className="anton">
              <span className="letter4 firstLetter">C</span>
              <span className="letter4">o</span>
              <span className="letter4">n</span>
              <span className="letter4">t</span>
              <span className="letter4">a</span>
              <span className="letter4">c</span>
              <span className="letter4">t</span>
            </h2>
          </div>
          <div className="tablecell">
            <div className="container">
              <div className="title">
                <TypeWritereffect
                  datatype={["Send me a Letter...", "Waiting for you email..."]}
                />
              </div>
              <div className="contents">
                <div className="globe"></div>
                <div className="testContents">
                  <div className="contacts">
                    <section>
                      <figure>
                        <img src={img1} alt="" />
                      </figure>
                      <a
                        href="mailto:fclaquio@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        fclaquio@gmail.com
                      </a>
                    </section>
                    <section>
                      <figure>
                        <img src={img2} alt="" />
                      </figure>

                      <a
                        href="https://www.linkedin.com/in/francis-cristopher-l-11b482203/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        in/francis-cristopher
                      </a>
                    </section>
                    <section>
                      <figure>
                        <img src={img3} alt="" />
                      </figure>

                      <a
                        href="https://github.com/Francis1a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/Francis1a
                      </a>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
