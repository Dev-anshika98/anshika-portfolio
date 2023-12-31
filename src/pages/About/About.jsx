import { useStateContext } from "../../context/Context";

import Photo from "../../assets/picturemine.jpg";

const About = () => {
  const { currentColor, aboutData, t } = useStateContext();
  return (
    <div className="flex items-start justify-center min-h-screen py-20 mx-auto activeSection lg:w-4/5 p-14 md:p-32 lg:p-10 md:gap-x-16 ">
      <div className="relative hidden h-92 lg:block lg:basis-1/3">
        <div
          style={{ background: currentColor, zIndex: "-1" }}
          className="absolute rounded-full w-72 h-72 top-36 left-2"
        ></div>
        <img className="w-full h-full" src={Photo} alt="" />
      </div>
      <div className="basis-full lg:basis-2/3">
        <div className="relative">
          <h2 className="absolute z-10 text-xl rtl:font-casablanca ltr:font-summer">
            {t("about")}
          </h2>
          <span
            style={{ background: currentColor }}
            className="absolute w-10 h-10 rounded-full rtl:-right-3 rtl:-top-3 -left-4 -top-2"
          ></span>
        </div>

        <h1 className="mt-10 mb-5 text-4xl font-semibold rtl:font-casablanca ">
          {t("helloName")}
        </h1>
        <div
          style={{ background: currentColor }}
          className="w-20 h-1 m-2 mb-4"
        ></div>
        <p className=" text-2xl text-gray-300 text-md">{t("AboutDescreption")}</p>

        <div className="grid gap-8 mt-12 text-2xl text-gray-400 md:grid-cols-2 gap-y-12">
          {aboutData.map(({ skill, description, icon }) => (
            <div key={skill} className="flex items-center gap-8 md:justify-between">
              <div className="relative">
                <h2 className="absolute z-10 text-2xl font-semibold -left-2 -top-1">
                  {icon}
                </h2>
                <span
                  style={{ background: currentColor }}
                  className="absolute w-8 h-8 rounded-full -left-6 -top-4"
                ></span>
              </div>

              <div>
                <h3 className="text-3xl font-casablanca ltr:font-summer">{skill}</h3>
                <p className="mt-2 text-xl text-gray-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
