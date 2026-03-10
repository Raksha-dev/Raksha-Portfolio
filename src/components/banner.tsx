import Typewriter from "typewriter-effect";
import RakshaImage from "../assets/RakshaImage.jpg";
import Resume from "../assets/Raksha-Tamrakar-Front_End_Engineer.pdf";

const Banner = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-white px-6 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side: Fixed Image - shrink-0 ensures it never moves/resizes */}
        <div className="relative shrink-0 flex-none">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <img
              src={RakshaImage}
              alt="Raksha Tamrakar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content - flex-1 allows it to take remaining space without pushing the image */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 min-w-0">
          <p className="text-slate-500 font-medium text-lg">Hello! I'm</p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight">
            Raksha Tamrakar
          </h1>

          <h2 className="text-2xl md:text-2xl font-bold text-slate-400">
            Senior Frontend Developer
          </h2>

          <div className="py-4">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1D61FF] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all active:scale-95"
            >
              Download CV
            </a>
          </div>

          {/* Reserved Space: min-h prevents the bottom of the page from jumping */}
          <div className="max-w-xl text-xl md:text-xl lg:text-xl text-slate-600 leading-relaxed font-semibold min-h-45 md:min-h-35">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 40, // Slightly faster for better UX
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "With 6+ years of experience building scalable and performant products using Javascript, Typescript, HTML, CSS, and modern frontend frameworks like React.js, Next.js. Strong background in frontend architecture, component-driven design, and optimizing UI performance."
                  )
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
