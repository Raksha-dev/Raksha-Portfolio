import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "EXL",
      period: "Mar 2024 - Present",
      location: "Bengaluru, Karnataka",
      description: [
        "Built and maintaining high-performance web and mobile applications using React.js, JavaScript (ES6+), HTML, and CSS in agile environments.",
        "The web app consists of Dashboards, charts, tables and dynamic components.",
        "Improved UI performance by 10–13% using Lighthouse audits, code splitting, memoization, and lazy loading.",
        "Developed reusable UI components using Material UI and BEM Structured CSS, ensuring scalable and maintainable styling.",
        "Integrated RESTful APIs using React and Node.js to build data-driven, scalable front-end solutions.",
        "Used Git, CI/CD pipelines, and TDD practices for reliable development and deployment.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Moonraft (Acquired by UST)",
      period: "Nov 2019 - Feb 2024",
      location: "Bengaluru, India",
      description: [
        "Experience in building responsive, single page web applications using modern front-end JavaScript technologies like React, JavaScript, HTML, CSS.",
        "Built UI web components using React.js.",
        "Improved performance by 10–12% through caching and rendering optimizations.",
        "Understanding of modern frontend ecosystem, including linting, testing and releasing.",
        "Experience in developing, debugging, and maintaining code in a large corporate environment with modern programming languages and database querying languages.",
        "Experience with modern testing frameworks Jest.",
        "Hands-on practical experience in system design, application development, testing, and operational stability.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]">
            Professional Experience
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-10 md:pl-0">
              {/* Timeline Icon & Line */}
              {/* The icon shifts from left-aligned on mobile to absolute-positioned on desktop */}
              <div className="absolute left-0 md:-left-20 lg:-left-24 top-0 flex flex-col items-center h-full">
                <div className="p-3 rounded-xl shadow-lg z-10 transition-all duration-300 bg-white border border-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  <Briefcase className="w-5 h-5" />
                </div>

                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-100 absolute top-12"></div>
                )}
              </div>

              {/* CARD: Left border only appears on hover */}
              <div className="relative bg-white p-6 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-xl border-l-0 group-hover:border-l-4 group-hover:border-l-blue-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-bold text-lg">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full text-slate-500 text-xs md:text-sm font-bold w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm font-medium md:self-end px-3">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-slate-600 font-medium text-sm md:text-base leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
