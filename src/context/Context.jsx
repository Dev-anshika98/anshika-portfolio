import { RiReactjsLine } from "react-icons/ri";
import { DiPhotoshop, DiSass } from "react-icons/di";
import { BiCodeBlock } from "react-icons/bi";
import { BsWordpress } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#F55050");
  const [currentMode, setCurrentMode] = useState("light");
  const [currentLang, setCurrentLang] = useState("en");
  const { t, i18n } = useTranslation();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("ThemeMode", e.target.value);
    setSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setSettings(false);
  };
  const setLang = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
    localStorage.setItem("currentLang", e.target.value);
    setSettings(false);
  };

  //todo Data

  const navItems = [
    {
      name: t("navItem1"),
      href: "home",
    },
    {
      name: t("navItem2"),
      href: "about",
    },
    {
      name: t("navItem3"),
      href: "service",
    },
    {
      name: t("navItem4"),
      href: "portfolio",
    },
    {
      name: t("navItem5"),
      href: "contact",
    },
  ];
  const themeColors = [
    {
      name: "blue-theme",
      color: "#1A97F5",
    },
    {
      name: "green-theme",
      color: "#03C9D7",
    },
    {
      name: "purple-theme",
      color: "#7352FF",
    },
    {
      name: "red-theme",
      color: "#F55050",
    },
    {
      name: "indigo-theme",
      color: "#3F72AF",
    },
    {
      color: "#F55302",
      name: "orange-theme",
    },
  ];
  const aboutData = [
    {
      skill: t("aboutSkills1"),
      description: t("aboutSkills1Description1"),
      icon: <BiCodeBlock />,
    },
    {
      skill: t("aboutSkills2"),
      description: t("aboutSkills1Description2"),
      icon: <BiCodeBlock />,
    },
    
  ];
  const serviceData = [
    {
      skill: t("html"),
      description: t("htmlDescription"),
      icon: <AiOutlineHtml5 />,
    },
    {
      skill: t("css"),
      description: t("cssDescription"),
      icon: <FaCss3 />,
    },
    {
      skill: t("js"),
      description: t("jsDescription"),
      icon: <IoLogoJavascript />,
    },
    {
      skill: t("react"),
      description: t("reactDescription"),
      icon: <RiReactjsLine />,
    },
    
    {
      skill: t("tailwind"),
      description: t("tailwindDescription"),
      icon: <SiTailwindcss />,
    },
    {
      skill: t("bootstrap"),
      description: t("bootstrapDescription"),
      icon: <SiBootstrap />,
    },
   
  ];
  const portfolioTitle = [
   
  ];
  const portfolioData = [
    {
    }
  ];

  //todo Data

  return (
    <StateContext.Provider
      value={{
        loading,
        setLoading,
        settings,
        setSettings,
        currentMode,
        setCurrentMode,
        currentColor,
        setCurrentColor,
        currentLang,
        setCurrentLang,
        t,
        i18n,
        setMode,
        setColor,
        setLang,
        navItems,
        themeColors,
        aboutData,
        serviceData,
        portfolioTitle,
        portfolioData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);