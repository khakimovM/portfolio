import HeroImg from "../assets/hero.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full p-5 flex flex-col items-center justify-center"
    >
      <h1 className="bg-gradient-to-r from-cyan-400 my-6 to-purple-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent text-center">
        About Me
      </h1>

      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-around items-center gap-8 md:gap-16">
        <img
          src={HeroImg}
          alt="Hero img"
          className="transform scale-x-[-1] w-64 sm:w-80 md:w-[400px] h-auto"
        />

        <div className="w-full md:w-[40%] py-4 flex flex-col justify-around text-center md:text-left">
          <h1 className="inline-block text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pb-1">
            What's up guys
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-200 mt-4">
            I am a 22 years old Software Engineer, graduated from Fergana State
            Technical University (2021–2025). I specialize in FullStack web
            development, having completed my training at Najot Ta’lim in Node.js
            and React.js. I have hands-on experience with technologies such as
            <span className="text-cyan-300"> JavaScript</span>,
            <span className="text-cyan-300"> TypeScript</span>,
            <span className="text-cyan-300"> Node.js</span>, Express, NestJS,
            Prisma, PostgreSQL, MongoDB, Mongoose, HTML, CSS, TailwindCSS, and
            React.js. As an extrovert, I enjoy building strong connections and
            collaborating effectively with people. Beyond development, I run a
            YouTube channel called{" "}
            <span className="text-purple-300 font-semibold">CodeWithAzizz</span>
            , where I teach algorithmic problem solving by breaking down
            LeetCode challenges and explaining the logic behind each solution.
            My goal is to create impactful projects, share my knowledge to help
            others grow in the world of programming, and one day work at
            <span className="text-red-300 font-semibold">
              {" "}
              Google’s headquarters
            </span>
            as part of their world-class engineering team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
