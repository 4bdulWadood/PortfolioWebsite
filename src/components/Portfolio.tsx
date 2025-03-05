import CoreCompetency from "./CoreCompetency";
import ContactForm from "./ContactForm";
import DecorativeLines from "./DecorativeLines";

export default function Portfolio() {
  return (
    <div className="min-h-screen h-screen bg-black text-white relative overflow-y-auto">
      <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(70deg,transparent_50%,#B10AAA_78%,#DC34F2_96%)] opacity-20 pointer-events-none"></div>
      <div className="min-h-screen grid lg:grid-cols-[minmax(300px,1fr)_minmax(400px,2fr)_minmax(300px,1fr)] grid-cols-1 lg:divide-x-2 divide-y-2 lg:divide-y-0 divide-white/20 relative">
        {/* Left Section */}
        <div className="p-8 laptop:p-3 flex flex-col justify-center min-h-screen space-y-6 laptop:space-y-2 overflow-y-auto order-2 lg:order-1">
        <div className="space-y-4 laptop:space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-800">
  <h2
    className="text-[36px] laptop:text-lg font-bold text-center bg-gradient-to-r from-[#7A19D3] via-[#F1810B] to-[#FF00B9] bg-clip-text text-transparent w-full"
    style={{ backgroundSize: "200% 100%", backgroundPosition: "0 0" }}
  >
    ABOUT ME
  </h2>
  <p className="text-gray-300 text-base laptop:text-[10px]">
    Hello, welcome to my{" "}
    <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
      portfolio website!
    </span>
  </p>
  <p className="text-gray-300 text-base laptop:text-[10px]">
    My name is{" "}
    <span className="text-white font-medium">Syed Abdul Wadood</span>{" "}
    and I am a final year{" "}
    <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
      Computer Engineering
    </span>{" "}
    student at{" "}
    <span className="text-white">
      Toronto Metropolitan University
    </span>
    . When I am not learning new technologies and frameworks, you can
    find me in the gym, watching football, or quoting movies - about{" "}
    <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
      50% of my personality
    </span>{" "}
    is movie references.
  </p>

  <div>
    <p className="text-gray-300 text-base laptop:text-[10px]">
      I am a detail-oriented and driven Computer Engineering student
      with hands-on experience in{" "}
      <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
        software development
      </span>
      ,{" "}
      <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
        DevOps
      </span>
      , and{" "}
      <span className="bg-gradient-to-r from-[#AB1CDE] to-[#715DFC] bg-clip-text text-transparent font-bold">
        cloud computing
      </span>
      . Through multiple internships at IBM and three early-stage
      startups, I have built and optimized web applications, automated
      deployments, and enhanced system efficiency.
    </p>
  </div>
</div>



          <hr className="border-white/20 border-t-2" />

          <div className="flex items-center justify-center gap-3 laptop:gap-1 bg-[#1F1F1F] p-3 laptop:p-1 rounded-lg">
            <div className="bg-black p-2 laptop:p-1 rounded-lg flex flex-col items-center justify-center flex-1">
              <div className="text-2xl laptop:text-lg font-bold mb-1">10+</div>
              <div className="text-xs laptop:text-[9px] font-bold tracking-[0.2em] whitespace-nowrap">
                HAPPY CLIENTS
              </div>
            </div>
            <div className="bg-black/50 p-2 laptop:p-1 rounded-lg flex flex-col items-center justify-center gap-1 flex-1">
              <img
                src="/images/location-icon.svg"
                alt="Location icon"
                className="w-6 h-6 laptop:w-4 laptop:h-4"
              />
              <div className="text-orange-400 font-bold text-sm laptop:text-[9px]">
                TORONTO
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-3 laptop:p-1 rounded-lg h-32 laptop:h-20 flex items-center justify-center">
            <p className="text-lg laptop:text-xs font-bold text-center tracking-wide">
              "People Ignore Design That Ignores People"
            </p>
          </div>

          <div className="flex gap-4 laptop:gap-2 justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 laptop:w-6 laptop:h-6 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]"></div>
                <svg
                  className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#8B5CF6]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-xs laptop:text-[8px] font-medium text-[#8B5CF6]">
                TEAM WORK
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 laptop:w-6 laptop:h-6 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#06B6D4] shadow-[0_0_10px_#06B6D4]"></div>
                <svg
                  className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#06B6D4]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <span className="text-xs laptop:text-[8px] font-medium text-[#06B6D4]">
                ON TIME
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 laptop:w-6 laptop:h-6 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-[#06B6D4] shadow-[0_0_10px_#06B6D4]"></div>
                <svg
                  className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#06B6D4]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <span className="text-xs laptop:text-[8px] font-medium text-[#06B6D4]">
                CREATIVITY
              </span>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="p-8 laptop:p-4 flex items-center justify-center min-h-screen order-1">
          <div className="space-y-6 laptop:space-y-4">
            <div className="laptop:mt-4">
              <div className="flex justify-center">
              <div className="relative w-72 h-72 laptop:w-52 laptop:h-52 rounded-full overflow-hidden shadow-[0_0_150px_rgba(122,25,211,0.8)] z-10 flex items-center justify-center">
              {/* Blue/Purple Hue Overlay (Outer Circle) */}
              <div className="absolute bg-[radial-gradient(circle,#4B0082_10%,#6A0DAD_100%,#8B5CF6_60%)] mix-blend-multiply"></div>

              {/* Profile Image */}
              <img
                src="images/avatar1_inPixio.png"
                alt="Profile"
                className="w-[120%] h-[125%] object-cover rounded-full mix-blend-screen"
              />
            </div>
              </div>
            </div>
            <div className="text-center flex flex-col h-[400px] laptop:h-[220px] pt-12 laptop:pt-2">
              <h1 className="text-[24px] lg:text-[48px] laptop:text-2xl font-bold -mt-8 laptop:-mt-4">
                SYED WADOOD
              </h1>
              <p className="text-[18px] lg:text-[24px] laptop:text-lg font-normal text-white -mt-2 laptop:-mt-1">
                SOFTWARE ENGINEER
              </p>
              <div className="flex justify-center gap-6 mt-8 laptop:mt-2">
                <a
                  href="https://www.linkedin.com/in/abdul-wadood-syed-978085220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 laptop:w-7 laptop:h-7 rounded-full flex items-center justify-center relative group cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-[#715DFC] shadow-[0_0_10px_#715DFC] transition-all duration-300 group-hover:shadow-[0_0_20px_#715DFC]"></div>
                  <svg
                    className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#715DFC]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/4bdulWadood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 laptop:w-7 laptop:h-7 rounded-full flex items-center justify-center relative group cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-[#715DFC] shadow-[0_0_10px_#715DFC] transition-all duration-300 group-hover:shadow-[0_0_20px_#715DFC]"></div>
                  <svg
                    className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#715DFC]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://copper-virgie-76.tiiny.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 laptop:w-7 laptop:h-7 rounded-full flex items-center justify-center relative group cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-full border-2 border-[#715DFC] shadow-[0_0_10px_#715DFC] transition-all duration-300 group-hover:shadow-[0_0_20px_#715DFC]"></div>
                  <svg
                    className="w-5 h-5 laptop:w-3 laptop:h-3 text-[#715DFC]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
              <div className="flex-1 relative">
                <div className="w-[300px] laptop:w-[200px] h-[2px] absolute left-1/2 top-[20%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#AB1CDE] to-transparent shadow-[0_0_20px_rgba(171,28,222,0.7)] blur-[0.5px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#715DFC] to-transparent opacity-90"></div>
                </div>
                <div className="w-[225px] laptop:w-[150px] h-[2px] absolute left-1/2 top-[28%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#AB1CDE] to-transparent shadow-[0_0_20px_rgba(171,28,222,0.7)] blur-[0.5px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#715DFC] to-transparent opacity-75"></div>
                </div>
                <div className="w-[169px] laptop:w-[120px] h-[2px] absolute left-1/2 top-[36%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#AB1CDE] to-transparent shadow-[0_0_20px_rgba(171,28,222,0.7)] blur-[0.5px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#715DFC] to-transparent opacity-60"></div>
                </div>
                <div className="w-[127px] laptop:w-[90px] h-[2px] absolute left-1/2 top-[44%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#AB1CDE] to-transparent shadow-[0_0_20px_rgba(171,28,222,0.7)] blur-[0.5px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#715DFC] to-transparent opacity-45"></div>
                </div>
                <div className="w-[95px] laptop:w-[70px] h-[2px] absolute left-1/2 top-[52%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#AB1CDE] to-transparent shadow-[0_0_20px_rgba(171,28,222,0.7)] blur-[0.5px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#715DFC] to-transparent opacity-30"></div>
                </div>
              </div>
              <div className="flex justify-center mt-auto">
                <DecorativeLines />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 laptop:p-3 flex flex-col items-center justify-center min-h-screen overflow-y-auto order-3 lg:order-3">
          <div className="space-y-6 laptop:space-y-3 ">
          <div className="bg-[#171717] p-8 laptop:p-2 rounded-lg space-y-4 laptop:space-y-2 flex flex-col items-center relative">
              
              <h2
                className="text-[24px] sm:text-[23px] md:text-[30px] bottom-2 laptop:text-base font-bold text-center bg-gradient-to-r from-[#7A19D3] via-[#F1810B] to-[#FF00B9] bg-clip-text text-transparent w-full relative z-10 tracking-wide"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "0 0",
                }}
              >
                CORE COMPETENCIES
              </h2>
              
              {/* Background behind competency circles */}
              <div className="absolute bottom-6 w-11/12 bg-black rounded-lg z-0 flex items-center justify-center"></div>
              
              <div className="grid grid-cols-4 gap-4 w-full max-w-lg mx-auto relative z-10 justify-center items-center text-center">
                <CoreCompetency label="Design" percentage={60} />
                <CoreCompetency label="Fullstack" percentage={75} />
                <CoreCompetency label="Cloud" percentage={75} />
                <CoreCompetency label="DevOps" percentage={70} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 laptop:gap-3 perspective-[1000px]">
              <div
                className="bg-[#0a192f] p-6 laptop:p-3 rounded-lg flex items-center justify-center aspect-square transform-gpu transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12 hover:scale-105 group relative cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                              <a
                href="https://www.lab2client.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-lg laptop:text-sm font-medium transform-gpu translate-z-12">
                    <img
                    src="/images/Lab2Client.png"
                    alt="L2C Image"
                    className="w-[120%] h-[125%] object-cover rounded-full mix-blend-screen"
                  />
                </span>
                </a>
              </div>
                          <a
              href="https://andie.work/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"  // Makes the anchor tag take up the full space of the div
            >
  <div
    className="bg-white p-6 laptop:p-3 rounded-lg flex items-center justify-center aspect-square transform-gpu transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-12 hover:scale-105 group relative cursor-pointer"
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <span className="text-lg laptop:text-sm font-medium transform-gpu translate-z-12">
      <img
        src="/images/andie.work.png"
        alt="L2C Image"
        className="w-[120%] h-[125%] object-cover rounded-full mix-blend-screen"
      />
    </span>
  </div>
</a>

            <div
              className="bg-white laptop:p-2 rounded-lg flex items-center justify-center aspect-[2/1] col-span-2 transform-gpu transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6 hover:scale-105 group relative cursor-pointer overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <a
                href="https://huggingface.co/blog/huggingface-and-ibm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src="/images/IBM_IMAGE.jpg"
                  alt="IBM"
                  className="w-full h-full object-cover transform-gpu translate-z-12"
                />
            </a>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form - Mobile Only */}
      <div className="lg:hidden px-8 py-8">
        <ContactForm />
      </div>
    </div>
  );
}
