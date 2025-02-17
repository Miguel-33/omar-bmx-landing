"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page() {
  const [activeSection, setActiveSection] = useState("welcome");
  const { scrollY } = useScroll();

  // Parallax effects
  const parallaxWelcome = useTransform(scrollY, [0, 800], ["0%", "-30%"]);
  const parallaxAbout = useTransform(scrollY, [800, 1600], ["0%", "-20%"]);
  const parallaxGallery = useTransform(scrollY, [1600, 2400], ["0%", "-15%"]);
  const parallaxHighlights = useTransform(scrollY, [2400, 3200], ["0%", "-10%"]);
  const parallaxContact = useTransform(scrollY, [3200, 4000], ["0%", "-5%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["welcome", "about", "gallery", "highlights", "contact"];
      let currentSection = "welcome";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Load Instagram Embed Script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative font-sans bg-gray-100 text-gray-800 min-h-screen">
      <div className="hidden bg-green-500 bg-purple-500"></div>
      {/* Navigation Dots */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50"
      >
        {["welcome", "about", "gallery", "highlights", "contact"].map((section) => (
          <a key={section} href={`#${section}`} className="group">
            <div
              className={`w-5 h-5 rounded-full shadow-lg transition-all duration-300 transform 
                ${activeSection === section ? "scale-150 shadow-neon" : "scale-100"}
                ${section === "welcome" ? "bg-red-600" :
                  section === "about" ? "bg-yellow-500" :
                    section === "gallery" ? "bg-green-500" :
                      section === "highlights" ? "bg-purple-500" :
                        "bg-blue-500"
                }`}
            ></div>
          </a>
        ))}
      </motion.div>

      {/* Welcome Section */}
      <section id="welcome" className="h-screen flex items-center justify-center relative text-white">
        <motion.div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/ODJJersey.jpg)" }} animate={{ y: parallaxWelcome }}
        ></motion.div>
        <div className="relative z-10 text-center">
          <motion.h1 className="text-9xl font-extrabold tracking-wide mb-4 drop-shadow-lg text-white z-10"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white bg-clip-text ">
              Omar De Jesus
            </span>
          </motion.h1>
          <a href="#about">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black py-4 px-10 rounded-full text-2xl font-bold uppercase tracking-wider relative overflow-hidden transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-gray-900 hover:shadow-xl shadow-lg"
            >
              <span className="relative z-10">Let's Fly 🚀</span>
              <div className="absolute inset-0 bg-white opacity-40 rounded-full ripple-effect"></div>
            </motion.button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
        <motion.div className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/images/ODJBMX8.jpg)" }} animate={{ y: parallaxAbout }}
        ></motion.div>
        <h2 className="text-5xl font-bold mb-6">About Omar</h2>
        <p className="text-xl text-center mb-8 max-w-3xl z-10">
          Omar De Jesus is a passionate BMX racer from Puerto Rico who is a part of the renowned Factory LRC/Mongoose BMX Team <a href="https://www.instagram.com/weareflrcm/"><span className="font-bold">[ @weareflrcm ]</span></a>. From training sessions at local tracks to making waves at global competitions like the 2024 UCI BMX Worlds, Omar's journey in BMX racing has been filled with hard work, victories, and the constant pursuit of improvement. He recently took second place in the opening day race at Derby City BMX and competed at the Music City Nationals, where his love for the sport shone through, despite facing setbacks. With a resilient spirit, Omar embraces the highs and lows of BMX, always focused on getting back stronger.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
        <h2 className="text-5xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
            <motion.div key={num} className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <img src={`/images/ODJBMX${num}.jpg`} alt={`BMX Shot ${num}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}

        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative"><motion.div className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(/images/ODJBMX7.jpg)" }}
      ></motion.div>
        <h2 className="text-5xl font-bold mb-6">Highlights</h2>
        <div className="max-w-4xl mx-auto z-10">
          {[
            { year: "2024", event: "UCI BMX Worlds - Incredible Experience", location: "Rock Hill, SC", result: "Represented Puerto Rico in one of the biggest BMX competitions worldwide" },
            { year: "2024", event: "Music City Nationals", location: "Nashville, TN", result: "Won the 31+ Mix Open moto and faced setbacks in the 36-40 Intermediate race after a crash" },
            { year: "2024", event: "Derby City BMX - Opening Day", location: "Louisville, KY", result: "Took 2nd place in Cruiser race during opening day" },
            { year: "2024", event: "Recovery & Training", location: "Home", result: "Focused on rehabilitation after injury and continued riding for fun while preparing for future races" }
          ].map((highlight, index) => (
            <motion.div key={index} className="p-6 mb-6 bg-gray-800 rounded-lg shadow-lg z-10"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-semibold">{highlight.year}</h3>
              <p className="text-xl z-10">{highlight.event} - {highlight.location}</p>
              <p className="text-xl z-10">{highlight.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 h-screen bg-gray-800 text-white flex flex-col items-center justify-center relative">
        <motion.div className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url(/images/ODJatGate.jpg)" }} animate={{ y: parallaxContact }}
        ></motion.div>

        <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>

        {/* Instagram Embed */}
        <div className="mt-6 z-10">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/omar.dejesus33/"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: "0",
              width: "99.375%",
            }}
          ></blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} <span>Omar De Jesus</span> | All Rights Reserved</p>
        <p className="text-sm mt-2">Powered by <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Thirty3 Digital</a></p>
      </footer>

    </div>
  );
}
