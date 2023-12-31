import { useStateContext } from "../../context/Context";
// import { useEffect } from "react";
// import 'particles.js/particles';
import Snowfall from "react-snowfall";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import { Link } from "react-router-dom";
import Avatar from "../../assets/Avatar.jpg";
import Styles from "./Home.module.css";

const particlesJS = window.particlesJS;

const Home = () => {
  const { currentColor, currentLang, t } = useStateContext();


  // useEffect(() => {
  //   const jsonPath = window.innerWidth <= 800 ? './particlesjs-mobile-config.json' : './particlesjs-config.json';
  //   particlesJS.load('hero-container', jsonPath);
  // }, []);


  return (
    <> <div id="hero-container" >
      <div
        className={`${currentLang === "fa" ? "pr-16 md:pr-40" : ""
          }  activeSection  h-screen w-full flex flex-col items-start justify-center md:pl-48 p-10 gap-14 overflow-hidden`}
      >
        <Snowfall
          style={{
            opacity: "1",
          }}
          color={currentColor}
          snowflakeCount={80}
          speed={[0.5, 2]}
        />

        <div className="relative w-52">
          <h2 className="absolute z-10 text-2xl font-bold tracking-tight rtl:font-casablanca ">
            {t("myName")}
          </h2>
          <span
            style={{ background: currentColor }}
            className={`rtl:-right-3 rtl:-top-3 absolute -left-4 -top-2 w-10 h-10 rounded-full`}
          ></span>
        </div>

        <h1 className="p-2 text-3xl font-semibold md:text-4xl lg:text-5xl ltr:font-summer">
          {t("im")}
          <span className="titleSkills">
            {
              <Typewriter
                words={[t("webdev"), t("frontEnd"), t("designer")]}
                loop={5}
                typeSpeed={200}
                delaySpeed={2000}
                deleteSpeed={150}
              />
            }
          </span>
          <Cursor />
        </h1>

        <div className="flex items-center justify-center font-semibold gap-x-5">
          <button
            type="button"
            className="relative w-32 px-4 py-6 md:w-36 dark:text-gray-800 cursor-grab"
            style={{ background: currentColor }}
            id="buttonAnime"
          >
            <h5 className="w-full h-full absolute left-0 top-3.5 z-10">
              {t("welcome")}
            </h5>
            <span
              className={`${Styles["clip-path"]} absolute top-0 left-0 z-0 w-full h-full`}
            ></span>
          </button>
          <button type="button" className="w-32 px-4 py-6 md:w-36">
          <Link to="/resume.pdf"> 
            {t("readMore")}
            </Link>
          </button>
        </div>

        <div
          className={`
            ${Styles.me}  absolute hidden w-96 h-96 top-28 ltr:right-32 rtl:left-32
            `}
        >
          <img src={Avatar} alt="me" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;