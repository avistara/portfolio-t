import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate web developer definitely
            </h3>
            <p className="text-muted-foreground">
              with zero experience because I dont want to do AI anymore :D
            </p>
            <p className="text-muted-foreground">
              doing a bit of react and tailwind though ...
            </p>
            <p>add more text here to match the length of the cards...</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              {/** can add resume link here for download */}
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg "> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating modern websites (like this one!!){" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"></User>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg "> UI/UX design</h4>
                  <p className="text-muted-foreground">
                    cogsci student, loves design, want to apply coding
                    experience into design
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg "> UI/UX design</h4>
                  <p className="text-muted-foreground">
                    interned at Valuezen, an AI B2B SaaS startup, where i
                    learned to self teach myself a lot of new technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
