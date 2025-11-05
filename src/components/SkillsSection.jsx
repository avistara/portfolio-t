/**list skills, rate them (? terrible idea, would rather link to actual things ive done with the skills) */

import { useState } from "react";
import { cn } from "../libs/utils";

//frontend

const skills = [
  //frontend
  { name: "HTML/CSS", level: 2, category: "frontend" },
  { name: "JS", level: 2, category: "frontend" },
  { name: "React", level: 2, category: "frontend" },
  { name: "Tailwind", level: 2, category: "frontend" },

  //backend
  { name: "Python", level: 2, category: "backend" },
  { name: "Java", level: 2, category: "backend" },
  { name: "C++", level: 2, category: "backend" },
  { name: "MongoDB", level: 2, category: "backend" },

  //tools
  { name: "Git", level: 2, category: "tools" },
  { name: "Docker", level: 2, category: "tools" },
  { name: "AWS", level: 2, category: "tools" },
  { name: "REST APIs", level: 2, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
