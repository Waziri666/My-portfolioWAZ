import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  Award,
  Briefcase,
} from "lucide-react";

const Summary = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalPages = 4;

  const handlePageChange = (direction) => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (direction === "next" && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/TauficAbdallahWaziriResume.pdf";
    link.download = "Taufic's_cv.pdf";
    link.click();
  };

  const pages = [
    // Page 1: Bio
    {
      title: (
        <h1 className="text-3xl font-extrabold text-white mb-4">About Me</h1>
      ),
      content: (
        <div className="space-y-6 bg-black-200">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br bg-black-300 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold ">WT</span>
            </div>
            <h2 className="text-2xl font-bold  mb-2 text-white">
              Waziri Taufic Abdallah
            </h2>
            <p className="text-book-text-secondary font-medium grid-subtext ">
              FrontEnd Developer
            </p>
          </div>

          <div className="space-y-4 bg-black-200">
            <p className="grid-subtext">
              Passionate frontend developer with 1+ years of experience creating
              innovative web solutions. I specialize in React, Tailwind css, and
              modern web technologies.
            </p>
            <p className="grid-subtext">
              I'm driven by the challenge of solving complex problems and
              creating user-friendly applications that make a real difference.
            </p>
          </div>
          <div className="flex items-center justify-center pt-4">
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-black-500 grid-subtext  px-6 py-3 rounded-lg font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>
        </div>
      ),
    },
    // Page 2: Work Experience
    {
      title: (
        <h1 className="text-3xl font-extrabold text-white mb-4">Experience</h1>
      ),
      content: (
        <div className="space-y-6">
          <div className="border-l-4 pl-4 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-accent text-white" />
                <h3 className="text-lg text-white font-semibold text-book-text-primary">
                  Senior Frontend Developer
                </h3>
              </div>
              <p className="grid-subtext font-medium mb-1">Web developer</p>
              <div className="flex items-center gap-4 text-sm grid-subtext mb-3">
                <span className="flex items-center gap-1 grid-subtext">
                  <Calendar className="w-4 h-4" />
                  2025 - Present
                </span>
                <span className="flex items-center gap-1 grid-subtext">
                  <MapPin className="w-4 h-4" />
                  Colarodo, USA
                </span>
              </div>
              <ul className="text-sm grid-subtext space-y-1">
                <li>
                  • Built responsive React Web Application with 99.9% uptime
                </li>
                <li>
                  • Optimized application performance improving load times by
                  40%
                </li>
                <li>• Collaborated with UX/UI team on user-centered design</li>
                <li className="text-blue-600">
                  {" "}
                  <a href="https://youtu.be/M1J0MmBVIxA">• View Project</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-l-4 border-primary pl-4 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-white" />
                <h3 className="text-lg font-semibold grid-headtext">
                  Front End
                </h3>
              </div>
              <p className="grid-subtext font-medium mb-1">Start Up</p>
              <div className="flex items-center gap-4 text-sm grid-subtext mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2024 - Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Remote
                </span>
              </div>
              <ul className="text-sm grid-subtext space-y-1">
                <li>
                  • Developed the user interface with React and Tailwind CSS for
                  responsive, real-time visualization.
                </li>
                <li>
                  • Implemented secure data handling and dynamic chart rendering
                </li>
                <li>
                  • Designed the layout to clearly present system metrics and
                  anomaly trends.
                </li>
                <li>
                  • Collaborated with backend and data science components to
                  connect live detection results.
                </li>
                <li className="text-blue-600">
                  <a href="https://youtu.be/S3W5GG2Imkc">• View Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <h1 className="text-3xl font-extrabold text-white mb-4">Education</h1>
      ),
      content: (
        <div className="space-y-6">
          <div className="border-l-4 border-white-600 pl-4">
            <div className="flex items-center gap-2 mb-2 grid-headtext">
              <Award className="w-5 h-5" />
              <h3 className="text-lg font-semibold">
                Bachelor of Information Technology
              </h3>
            </div>
            <p className="grid-subtext font-medium mb-1">University of Ghana</p>
            <div className="flex items-center gap-4 text-sm grid-subtext mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                2022 - 2025
              </span>
              <span className="flex items-center gap-1 grid-subtext">
                <MapPin className="w-4 h-4" />
                Legon, Accra
              </span>
            </div>
            <p className=" grid-subtext">
              Specialized in Cybersecurity and Web Technologies.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-4 grid-headtext">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-book-text-primary">
                Visual Art
              </h3>
            </div>
            <p className="text-book-accent font-medium mb-1 grid-subtext">
              Ideal College, Madina
            </p>
            <div className="flex items-center gap-4 mb-3 grid-subtext">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                2018 - 2021
              </span>
              <span className="flex items-center gap-1 grid-subtext">
                <MapPin className="w-4 h-4" />
                Upsa, Madina
              </span>
            </div>
            <p className="text-sm text-book-text-primary grid-subtext">
              Graduated with 3.4gpa
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4 grid-headtext">
            <h4 className="font-semibold text-book-text-primary mb-3">
              Certifications
            </h4>
            <div className="space-y-2 grid-subtext">
              <div className="flex justify-between">
                <span className="text-book-text-primary">
                  CEH, Certified Ethical Hacking
                </span>
                <span className="text-sm">about to take</span>
              </div>
              <div className="flex justify-between">
                <span className="text-book-text-primary">
                  Front-End Development
                </span>
                <span className="text-book-text-secondary">Udemy</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Page 4: Services
    {
      title: "My Services",
      content: (
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="bg-gradient-to-r grid-subtext rounded-lg p-4 border border-primary/20">
              <h3 className="font-semibold text-book-text-primary mb-2">
                Cybersecurity Solutions
              </h3>
              <p className="text-sm text-book-text-secondary mb-3">
                Developing secure, modern web applications that follow best
                practices in both design and cybersecurity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  Vulnerability assessments
                </span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  Secure system
                </span>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  Python
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r grid-subtext rounded-lg p-4 border border-accent/20">
              <h3 className="font-semibold text-book-text-primary mb-2">
                Web Development
              </h3>
              <p className="text-sm text-book-text-secondary mb-3">
                Cross-platform web applications with React performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  React js
                </span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  Tailwind
                </span>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  Three js
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r grid-subtext rounded-lg p-4 border border-book-border">
              <h3 className="font-semibold text-book-text-primary mb-2">
                Consulting
              </h3>
              <p className="text-sm text-book-text-secondary mb-3">
                Technical architecture and strategic guidance for your projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-muted text-book-text-primary px-2 py-1 rounded">
                  Advice
                </span>
                <span className="text-xs bg-muted text-book-text-primary px-2 py-1 rounded">
                  Code Review
                </span>
                <span className="text-xs bg-muted text-book-text-primary px-2 py-1 rounded">
                  Mentoring
                </span>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-book-text-secondary text-sm mb-4">
              Ready to work together? Let's discuss your project.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      ),
    },
  ];
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  return (
    <section id="work" className="md:pt-32">
      <div className="max-w-6xl mx-auto p-4 grid-container">
        {/* Book Container */}
        <div className="relative  bg-black-200 rounded-2xl shadow-[var(--shadow-book)] overflow-hidden">
          {/* Desktop View - Two Pages Side by Side */}
          <div className="hidden md:block">
            <div className="flex min-h-[600px]">
              {/* Left Page */}
              <div className="flex-1 relative overflow-hidden">
                <div
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    isAnimating ? "translate-x-[-100%]" : "translate-x-0"
                  }`}
                >
                  <div className="p-8 h-full flex flex-col">
                    <h1 className="text-3xl font-bold text-white mb-8 border-b  pb-4">
                      {pages[currentPage]?.title}
                    </h1>
                    <div className="flex-1 overflow-y-auto">
                      {pages[currentPage]?.content}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Spine */}
              <div className="w-1 bg-gradient-to-b from-book-spine/20 via-book-spine/40 to-book-spine/20"></div>

              {/* Right Page */}
              <div className="flex-1 relative overflow-hidden">
                <div
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    isAnimating ? "translate-x-[100%]" : "translate-x-0"
                  }`}
                >
                  {currentPage + 1 < totalPages ? (
                    <div className="p-8 h-full flex flex-col">
                      <h1 className="text-3xl font-bold text-white mb-8 border-b border-book-border pb-4">
                        {pages[currentPage + 1]?.title}
                      </h1>
                      <div className="flex-1 overflow-y-auto">
                        {pages[currentPage + 1]?.content}
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 h-full flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-lg mb-4 grid-headtext">
                          Thank you for reading!
                        </p>
                        <p className="text-sm grid-subtext">
                          Let's connect and build something amazing together.
                        </p>
                      </div>
                      <div>
                        <button className="bg-black-500 grid-subtext flex rounded-xl p-2 mt-5 text-white hover:shadow-lg hover:scale-110">
                          <a href="#contact"></a>
                          Lets Work
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View - Single Page */}
          <div className="block md:hidden">
            <div className="min-h-[500px] relative overflow-hidden">
              <div
                className={`transition-transform duration-500 ease-in-out ${
                  isAnimating ? "translate-x-[-100%]" : "translate-x-0"
                }`}
              >
                <div className="p-6">
                  <h1 className="text-2xl font-bold gird-headtext mb-6 border-b border-book-border pb-3">
                    {pages[currentPage]?.title}
                  </h1>
                  <div className="overflow-y-auto">
                    {pages[currentPage]?.content}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-white mb-0">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={!canGoPrev || isAnimating}
              className={`p-3 rounded-full transition-all duration-300  ${
                canGoPrev && !isAnimating
                  ? "bg-black-500 text-white hover:shadow-lg hover:scale-110"
                  : "bg-book-border  cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentPage ? "bg-white w-6" : "bg-white-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => handlePageChange("next")}
              disabled={!canGoNext || isAnimating}
              className={`p-3 rounded-full transition-all duration-300 ${
                canGoNext && !isAnimating
                  ? "bg-black-500 text-white hover:shadow-lg hover:scale-110"
                  : "bg-book-border text-white cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Summary;
