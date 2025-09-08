import { useState } from "react";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("tauficabdallahwaziri@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I am Taufic</p>
              <p className="grid-subtext">
                With 1+ years of experience, I have builded my skills in
                frontend development, with the focus on Web Developer
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex justify-center items-center">
              <img
                src="/assets/grid2.png"
                alt="grid-2"
                className="w-full sm:w-[276px] h-fit object-contain text-center items-center"
              />
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript with a focus on react and Tailwind
                css ecosystem, My Tech Stack is React, Python, threejs
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="mt-8 mb-9">
              <img src="assets/globe.png" alt="Global" />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely accross different time zones
              </p>
              <p className="grid-subtext">
                I live in Ghana with remote work available
              </p>
              <a href="#contact" className="w-fit"></a>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code, coding
                isnt just my profession but my passion
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-xl md:text-xl font-medium text-gray-gradient text-white">
                  tauficabdallahwaziri@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
