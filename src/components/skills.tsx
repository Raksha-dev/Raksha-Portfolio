import { Globe, Server, Database, Cloud, Code2 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web & UI",
      icon: <Globe className="text-white w-6 h-6" />,
      iconBg: "bg-emerald-500",
      borderColor: "after:bg-emerald-500",
      skills: [
        "REACT.JS",
        "HTML5/CSS3",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "TAILWIND CSS",
        "MATERIAL UI",
        "REDUX",
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Server className="text-white w-6 h-6" />,
      iconBg: "bg-purple-600",
      borderColor: "after:bg-purple-600",
      skills: ["NODE.JS", "REST APIS", "JSON", "GRAPHQL"],
    },
    {
      title: "Data Management",
      icon: <Database className="text-white w-6 h-6" />,
      iconBg: "bg-orange-500",
      borderColor: "after:bg-orange-500",
      skills: ["SQL", "MONGODB"],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="text-white w-6 h-6" />,
      iconBg: "bg-sky-400",
      borderColor: "after:bg-sky-400",
      skills: ["FIREBASE", "AZURE DEVOPS", "GIT", "POSTMAN"],
    },
    {
      title: "IDE",
      icon: <Code2 className="text-white w-6 h-6" />,
      iconBg: "bg-slate-500",
      borderColor: "after:bg-slate-500",
      skills: ["VS CODE", "ANDROID STUDIO"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium pt-2 text-sm md:text-base leading-relaxed">
            A comprehensive overview of the tools and technologies I use to
            build scalable, cross-platform solutions.
          </p>
        </div>

        {/* Responsive Skills Grid */}
        {/* Changed to 1 col on mobile, 2 on tablet, 3 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-[2.5rem] border border-slate-100 bg-white 
                shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-2xl 
                transition-all duration-300 overflow-hidden
                
                /* Border Animation logic moved back to the main card */
                after:content-[''] after:absolute after:bottom-0 after:left-0 
                after:h-1.5 after:w-full ${category.borderColor} 
                after:origin-center after:scale-x-0 after:transition-transform 
                after:duration-500 after:ease-out hover:after:scale-x-100`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`${category.iconBg} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-slate-800">
                  {category.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 text-slate-600 text-[10px] md:text-xs font-bold rounded-lg
                     border border-slate-100 hover:bg-slate-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
