import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  const handleNavTop = (to) => {
    // If navigating to the same page, still scroll to top
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // For route change, ScrollToTop component will handle it
      // but this ensures instant feedback on click
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative text-white z-10"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#15803D]/95 via-[#15803D]/90 to-[#15803D]/95 z-0" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 border-t border-white/20">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Quran Majeed Academy</h2>
          <p className="text-white/90 text-sm leading-relaxed">
            We provide online Quran classes for kids and adults, taught by
            certified Aalim and Hafiz teachers. Our programs include Noorani
            Qaida, Quran Reading, Tajweed, and Hifz, with flexible schedules for
            students worldwide. Learn Quran online through one-on-one live
            sessions on Zoom, Google Meet and Teams.
          </p>
        </div>

        {/* Center Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Our Links</h3>

          <ul className="space-y-2">
            <li>
              <Link
                to="/courses"
                onClick={() => handleNavTop("/courses")}
                className="block py-1 px-2 -mx-2 rounded-lg font-semibold text-white/90
                           hover:text-white hover:bg-white/10
                           active:bg-white/15 active:text-white
                           transition-all duration-200
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                onClick={() => handleNavTop("/contact-us")}
                className="block py-1 px-2 -mx-2 rounded-lg font-semibold text-white/90
                           hover:text-white hover:bg-white/10
                           active:bg-white/15 active:text-white
                           transition-all duration-200
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Connect With Us</h3>

          <div className="flex gap-4 mt-2 flex-wrap">
            <a
              href="https://www.facebook.com/QuranMajeedAcademyOfficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 text-white/90 group-hover:text-white transition" />
            </a>

            <a
              href="https://www.instagram.com/quranmajeedacademyofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 text-white/90 hover:text-white transition" />
            </a>

            <a
              href="https://www.youtube.com/@QuranMajeedAcademyOfficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/10 active:bg-white/15 transition-all duration-200
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 text-white/90 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative text-center py-4 text-sm text-white/90 border-t border-white/20 space-y-1">
        <div>© {new Date().getFullYear()} Quran Majeed Academy. All rights reserved.</div>

        <div>
          Developed by{" "}
          <a
            href="https://qmaonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-[#C0A34E] transition-colors duration-200"
          >
            Quran Majeed Academy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
