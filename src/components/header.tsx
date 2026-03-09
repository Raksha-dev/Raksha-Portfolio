import htmlLogo from "../assets/html.avif";

const Header = () => {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    // 'sticky top-0' makes it stay at the top.
    // 'z-50' ensures it stays above the Banner and other content.
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side */}
          <div className="w-12 shrink-0">
            <img
              src={htmlLogo} // Replace with your image
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-black text-sm font-bold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
