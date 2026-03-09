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
    "Flutter",
    "Dart",
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
    <section id="projects" className="py-20 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">
            Project Spotlight
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Project Card with Hover Effects */}
        <div
          className="group relative bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 
          shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] 
          hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] 
          hover:-translate-y-2 transition-all duration-500 ease-out cursor-default"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Side: Description */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2.5 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-500">
                  <MonitorSmartphone className="text-white w-6 h-6" />
                </div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                  Cross-Platform Development
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Internal Employee Portal <br /> (Automotive Client)
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                  Developed and maintained a Flutter-based portal for a leading
                  automotive giant, supporting Android, iOS, and Web from a
                  single codebase. Built reusable components aligned with
                  enterprise guidelines and performance needs.
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Features Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/50 p-6 rounded-3xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center space-y-3"
                >
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-slate-900">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats/Info */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm group-hover:text-slate-600 transition-colors">
              <Settings className="w-4 h-4" /> Agile & Sprint Planning
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm group-hover:text-slate-600 transition-colors">
              <Activity className="w-4 h-4" /> Performance Optimization
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm group-hover:text-slate-600 transition-colors">
              <Sparkles className="w-4 h-4" /> Code Reviews & MVVM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
