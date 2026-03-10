import React from "react";
import {
  MonitorSmartphone,
  Sparkles,
  Code,
  GitBranch,
  Zap,
  Settings,
  Activity,
} from "lucide-react";

const Project = () => {
  const techStack = [
    "React.js",
    "JavaScript",
    "Azure DevOps",
    "REST API",
    "JIRA",
    "Agile",
  ];

  const highlights = [
    {
      title: "Story Module",
      desc: "Independently built an Instagram-inspired story feature for web & mobile.",
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "Rest API",
      desc: "Complex form workflows with full REST integration across three platforms.",
      icon: <Code className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Azure CI/CD",
      desc: "Managed pipelines for automated build distribution and deployment.",
      icon: <GitBranch className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "MVVM Architecture",
      desc: "Used MVVM to ensure clean, scalable, and maintainable code architecture.",
      icon: <Zap className="w-5 h-5 text-orange-500" />,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]">
            Project Spotlight
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Project Card with Responsive Padding and Grid */}
        <div
          className="group relative bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 p-6 md:p-12 
          shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] 
          lg:hover:-translate-y-2 transition-all duration-500 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Side: Description */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                  <MonitorSmartphone className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
                  Cross-Platform Development
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-[1.1]">
                  Internal Chat App <br className="hidden md:block" />{" "}
                  (Automotive Client)
                </h3>
                <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                  Developed and maintained a React.js-based portal for a leading
                  automotive giant, supporting mobile and web from a single
                  codebase. Built reusable components aligned with enterprise
                  guidelines and performance needs.
                </p>
              </div>

              {/* Tech Tags: Flex-wrap ensures they look good on any screen */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-50 md:bg-white border border-slate-100 md:border-slate-200 text-slate-700 text-xs md:text-sm font-bold rounded-xl transition-all hover:border-blue-400 hover:text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Features Grid (1 col mobile, 2 cols tablet/desktop) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/50 p-6 rounded-[2rem] border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3 group/item"
                >
                  <div className="p-3 rounded-2xl bg-white shadow-sm group-hover/item:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-slate-900 text-sm md:text-base">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-[11px] md:text-xs font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats/Info: Responsive flex layout */}
          <div className="mt-10 md:mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start">
            <div className="flex items-center gap-2.5 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-slate-600 transition-colors">
              <Settings className="w-4 h-4 text-blue-500" /> Agile & Sprint
              Planning
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-slate-600 transition-colors">
              <Activity className="w-4 h-4 text-emerald-500" /> Performance
              Optimization
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-slate-600 transition-colors">
              <Sparkles className="w-4 h-4 text-purple-500" /> Code Reviews &
              MVVM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
