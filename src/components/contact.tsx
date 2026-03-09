import { Mail, Smartphone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactDetails = [
    {
      label: "EMAIL",
      value: "rakshatamrakar207@gmail.com",
      icon: <Mail className="w-6 h-6 text-slate-700" />,
      href: "mailto:rakshatamrakar207@gmail.com",
    },
    {
      label: "MOBILE",
      value: "+91 7987240162",
      icon: <Smartphone className="w-6 h-6 text-slate-700" />,
      href: "tel:+917987240162",
    },
    {
      label: "LINKEDIN",
      value: "Raksha Tamrakar",
      icon: <Linkedin className="w-6 h-6 text-slate-700" />,
      href: "https://www.linkedin.com/in/raksha-t-311518b9/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">
            Let's Build Something Great
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-medium pt-4">
            Ready to explore collaborative opportunities? My inbox is always
            open.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactDetails.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center space-y-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>

              <div className="text-center">
                <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 mb-1">
                  {item.label}
                </p>
                <p className="text-slate-900 font-black text-lg">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Raksha T • BENGALURU, INDIA
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
