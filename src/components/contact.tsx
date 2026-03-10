import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      label: "EMAIL",
      value: "rakshatamrakar207@gmail.com",
      icon: (
        <Mail className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
      ),
      href: "mailto:rakshatamrakar207@gmail.com",
    },
    {
      label: "LINKEDIN",
      value: "Raksha Tamrakar",
      icon: (
        <Linkedin className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" />
      ),
      href: "https://www.linkedin.com/in/raksha-t-311518b9/",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f172a]">
            Let's Build Something Great
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-medium pt-4 max-w-lg mx-auto leading-relaxed">
            Ready to explore collaborative opportunities? My inbox is always
            open.
          </p>
        </div>

        {/* Responsive Contact Cards Grid */}
        {/* We use flex on md screens to center the two cards perfectly */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-8 mb-20">
          {contactDetails.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-80 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 
                         flex flex-col items-center justify-center space-y-4 
                         shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                {item.icon}
              </div>

              <div className="text-center">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-1">
                  {item.label}
                </p>
                <p className="text-slate-900 font-black text-lg break-all md:break-normal">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-loose">
            © 2026 Raksha Tamrakar • BENGALURU, INDIA
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
