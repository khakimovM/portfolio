import ProjectItem from "./ui/ProjectItem";
import Dashboard from "../assets/work-room-dashboard.png";
import SignUp from "../assets/work-room-signup.png";
import Weather1 from "../assets/weather1.png";
import Weather2 from "../assets/weather2.png";
import Test1 from "../assets/test1.png";
import Test2 from "../assets/test2.png";
import Test3 from "../assets/test3.png";
import Timer from "../assets/timer.png";

const myProjects = [
  {
    projectImg: [Dashboard, SignUp],
    name: "CRM Work Woom",
    about:
      "This project is a workspace created for people to collaborate on their projects, to find employees, or to find a job for themselves.",
    frontLink: "https://github.com/khakimovM/work-room-main",
    backEndLink: "https://github.com/khakimovM/work-room-backend-main",
  },
  {
    projectImg: [Weather1, Weather2],
    name: "Wheather",
    about:
      "This small project will output the current weather forecast for the searched city and the next 5 days.It's link to enter this project: https://weather-delta-one-97.vercel.app/",
    frontLink: "https://github.com/khakimovM/Weather",
    backEndLink: null,
  },
  {
    projectImg: [Test1, Test2, Test3],
    name: "Solve and create tests with category",
    about:
      "In this small project, any user can create test categories and add options to them, developing them one by one.It's link to enter this project: https://solve-tests-category.vercel.app/",
    frontLink: "https://github.com/khakimovM/solve-tests-category",
    backEndLink: null,
  },
  {
    projectImg: [Timer],
    name: "Timer",
    about:
      "In this small project, any user can create test categories and add options to them, developing them one by one.It's link to enter this project: https://solve-tests-category.vercel.app/",
    frontLink: "https://github.com/khakimovM/solve-tests-category",
    backEndLink: null,
  },
];

const Projects = () => {
  return (
    <section className="py-12 px-4 mycon" id="projects">
      <h1 className=" h-[60px] bg-gradient-to-r from-cyan-400 my-6 to-purple-400 bg-clip-text text-3xl sm:text-4xl md:text-5xl font-bold text-transparent text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((project, index) => (
          <ProjectItem
            key={index}
            projectImg={project.projectImg}
            name={project.name}
            about={project.about}
            frontLink={project.frontLink}
            backEndLink={project.backEndLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
