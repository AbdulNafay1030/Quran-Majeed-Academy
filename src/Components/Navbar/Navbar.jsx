import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Container from "../Layout/Container";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDropdownOpen, setSidebarDropdownOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Fee Plans", path: "/FeePlans" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const courses = [
    { id: 1, title: "For Kids", path: "/courses/kids" },
    { id: 2, title: "For Adults", path: "/courses/adults" },
  ];

  return (
    <>
      {/* ✅ Full-width GREEN navbar background */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar-main w-full bg-[#15803D] text-white"
      >
        {/* ✅ Keep content centered using Container */}
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="Quran Majeed Academy"
                className="max-w-[200px] md:max-w-[200px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-left space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition ${
                        isActive
                          ? "text-black"
                          : "text-white hover:text-[#E5F5E0]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="text-lg font-medium text-white hover:text-black flex items-center gap-1">
                  Our Courses
                  <span>{dropdownOpen ? "▲" : "▼"}</span>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 mt-3 w-56 bg-[#15803D] border border-black/30 rounded-xl shadow-xl z-50"
                    >
                      {courses.map((course) => (
                        <li key={course.id}>
                          <Link
                            to={course.path}
                            className="block px-4 py-3 text-sm hover:bg-white hover:text-black transition rounded-xl"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {course.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-white"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-[#15803D] text-white z-50"
            >
              <div className="flex justify-between items-center p-4 border-b border-black/20 all">
                <img src={logo} alt="Logo" className="max-w-[200px]" />
                <button onClick={() => setSidebarOpen(false)}>×</button>
              </div>

              <nav className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="text-lg text-white hover:text-[#E5F5E0]"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Mobile Courses Dropdown */}
                <button
                  className="flex items-center justify-between text-lg text-white"
                  onClick={() => setSidebarDropdownOpen((prev) => !prev)}
                >
                  Our Courses
                  <span>{sidebarDropdownOpen ? "▲" : "▼"}</span>
                </button>

                <AnimatePresence>
                  {sidebarDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="pl-4 space-y-2"
                    >
                      {courses.map((course) => (
                        <li key={course.id}>
                          <Link
                            to={course.path}
                            className="block text-sm text-white hover:text-amber-500"
                            onClick={() => {
                              setSidebarOpen(false);
                              setSidebarDropdownOpen(false);
                            }}
                          >
                            {course.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </nav>
            </motion.div>

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setSidebarOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
