import CssLogo from "../assets/css.png";
import HtmlLogo from "../assets/html.png";
import JavaScriptLogo from "../assets/javascript.png";
import MongoLogo from "../assets/mongo.png";
import NestLogo from "../assets/nestjs.png";
import NodeLogo from "../assets/nodejs.png";
import PostgresLogo from "../assets/postgres.png";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import TypeScriptLogo from "../assets/typescript.png";
import SkillItem from "./ui/SkillItem";

const Skills = () => {
  const logos = [
    HtmlLogo,
    CssLogo,
    JavaScriptLogo,
    TypeScriptLogo,
    TailwindLogo,
    NodeLogo,
    NestLogo,
    ReactLogo,
    PostgresLogo,
    MongoLogo,
  ];

  return (
    <section
      id="skills"
      className="w-full mx-4 py-10 px-5 flex flex-col items-center justify-center"
    >
      <h1 className="bg-gradient-to-r from-cyan-400 my-11 to-purple-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent text-center">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {logos.map((logo, index) => (
          <SkillItem key={index} logo={logo} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
