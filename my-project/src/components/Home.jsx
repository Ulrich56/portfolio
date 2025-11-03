import React from "react";
import MyImage from "../assets/hero.jpeg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

function Home() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={MyImage}
          alt="my picture"
          className=" m-8 w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 rounded-full "
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Bonjour ! <br /> C'est <span className="text-purple-500">Ulrich</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          Je suis <span>
            <TypeAnimation
              sequence={[
                "Développeur Fullstack Junior .",
                2000,
                "Etudiant en Informatique .",
                2000,
              ]}
              speed={50}
              cursor={true}
              repeat={Infinity}
              style={{ color: "purple", fontWeight: "bold", fontSize: "1re" }}
            />
          </span>
        </h3>

        <p className="text-sm sm:text-lg mb-6">
          Ulrich PINEIRO Adeniyi Nanouga est un passionné de la création
          d'expériences web innovantes et performantes.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-between md:justify-start">
          <SocialIcons></SocialIcons>
          <a
            href="/cv-ulrich-pineiro.pdf"
            download
            className="rounded-full mb-6 border-2 border-red-500 text-white px-4 py-2 transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]"
            >
            Télécharger mon CV
          </a>
          
      </div>
        
        
      </div>
    </section>
  );
}

export default Home;
