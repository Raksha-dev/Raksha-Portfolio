import React from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const infoCards = [
    {
      icon: <Briefcase className="w-6 h-6 text-black" />,
      title: "Total Experience",
      detail: "6+ Years",
      subDetail: "Senior Frontend Development",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-black" />,
      title: "Graduation",
      detail: "B.E Computer Science and Engineering",
      subDetail: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal", // Update with your actual university
    },
    {
      icon: <MapPin className="w-6 h-6 text-black" />,
      title: "Location",
      detail: "Bangalore, Karnataka, India", // Update with your actual location
      subDetail: "Native: Madhya Pradesh",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header Section */}
        <div className="mb-16 space-y-2">
          <p className="text-slate-500 font-medium">Get to Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            More About Me!
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-black mb-1">
                {card.title}
              </h3>
              <p className="text-slate-600 font-medium text-sm">
                {card.detail}
              </p>
              <p className="text-slate-400 text-xs mt-1">{card.subDetail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
