import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  const infoCards = [
    {
      icon: (
        <Briefcase className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
      ),
      title: "Total Experience",
      detail: "6+ Years",
      subDetail: "Senior Frontend Development",
    },
    {
      icon: (
        <GraduationCap className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
      ),
      title: "Graduation",
      detail: "B.E Computer Science and Engineering",
      subDetail: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    },
    {
      icon: (
        <MapPin className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
      ),
      title: "Location",
      detail: "Bangalore, Karnataka, India",
      subDetail: "Native: Madhya Pradesh",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-10 md:mb-10 text-center space-y-3">
          <p className="text-blue-600 font-bold tracking-widest text-sm uppercase">
            Get to Know
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
            More About Me!
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 
                         shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] 
                         flex flex-col items-center justify-center text-center
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                         hover:border-blue-100"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                {card.icon}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-2">
                {card.title}
              </h3>

              <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed">
                {card.detail}
              </p>

              <p className="text-slate-400 text-xs font-medium mt-2 leading-relaxed max-w-50">
                {card.subDetail}
              </p>

              {/* Subtle bottom accent line that appears on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-blue-600 rounded-full group-hover:w-1/3 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
