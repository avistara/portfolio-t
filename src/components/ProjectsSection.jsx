const projects = [
  {
    id: 1,
    title: "Word Rhyming Game",
    description:
      "A word rhyming game discord bot with scoring and leaderboards",
    image: "",
    tags: ["Python", "REST APIs"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Word Rhyming Game",
    description:
      "A word rhyming game discord bot with scoring and leaderboards",
    image: "",
    tags: ["Python", "REST APIs"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Word Rhyming Game",
    description:
      "A word rhyming game discord bot with scoring and leaderboards",
    image: "",
    tags: ["Python", "REST APIs"],
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          some projects that i did
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-l overflow-x-hidden shadow-xs card-hover"
            >
              <div className=" h-48 overflow-hidden">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
