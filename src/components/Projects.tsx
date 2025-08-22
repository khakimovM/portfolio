import ProjectItem from "./ui/ProjectItem";
import Dashboard from "../assets/work-room-dashboard.png";
import SignUp from "../assets/work-room-signup.png";

const myProjects = [
  {
    projectImg: [Dashboard, SignUp],
    name: "CRM Work Woom",
    about:
      "This project is a workspace created for people to collaborate on their projects, to find employees, or to find a job for themselves.",
    frontLink: "https://github.com/khakimovM/work-room-main",
    backEndLink: "https://github.com/khakimovM/work-room-backend-main",
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
