import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import kidsIcon from "../assets/images/vecteezy_muslim-kids-vector-illustrations-with-charming-and_164135253 (1).svg";
import adultsIcon from "../assets/images/person.png";




const WorkingCourses = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      {/* =========================
          WORKING COURSES SECTION
      ========================== */}
      <section id="courses" className="bg-[#DCF2E9] py-20">
        <div className="container mx-auto px-4">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-4xl font-bold text-[#15803D] mb-1">400+</h3>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#000000] mb-3">
              Students Studying With Us
            </h2>
            <p className="text-[#000000] text-sm md:text-base leading-relaxed">
              Every parent dreams of seeing their child connect deeply with the Quran.
              At <strong className="text-[#000000]"> Quran Majeed Academy</strong>, we’re honored
              to guide your child on this beautiful spiritual journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* For Kids */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#ffffff] rounded-xl p-6 text-center
                         border border-[#000000]/20 shadow-md"
            >
              {/* ICON */}
<div
  className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
             rounded-full border border-[#000000]/30"
>
  <img
    src={kidsIcon}
    alt="For Adults"
    className="w-8 h-8 object-contain"
  />
</div>

              <h4 className="text-lg font-semibold text-[#000000] mb-2">
                For Kids
              </h4>

              <p className="text-[#000000] text-sm mb-5">
                Strong Quranic and Islamic foundations through
                personalized learning.
              </p>

              <button
                onClick={() => setActiveModal("kids")}
                className="bg-[#15803D] hover:bg-[#15803D]/90 font-semibold px-8 py-3 rounded-lg shadow-md text-white">
                View Courses
              </button>
            </motion.div>

            {/* For Adults */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[#ffffff] rounded-xl p-6 text-center
                         border border-[#000000]/20 shadow-md"
            >
              {/* ICON */}
<div
  className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
             rounded-full border border-[#000000]/30"
>
  <img
    src={adultsIcon}
    alt="For Adults"
    className="w-8 h-8 object-contain"
  />
</div>

              <h4 className="text-lg font-semibold text-[#000000] mb-2">
                For Adults
              </h4>

              <p className="text-[#000000] text-sm mb-5">
                Guided Quran learning and Tajweed programs
                for deeper understanding.
              </p>

              <button
                onClick={() => setActiveModal("adults")}
                className="bg-[#15803D] hover:bg-[#15803D]/90 font-semibold px-8 py-3 rounded-lg shadow-md text-white">

                View Courses
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================
          MODALS
      ========================== */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div
                className="bg-[#ffffff] rounded-xl p-6 max-w-lg w-full
                           text-center border border-[#15803D]/30
                            flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3">
                    {activeModal === "kids" ? "Courses for Kids" : "Courses for Adults"}
                  </h3>

                  <p className="text-[#000000] text-sm mb-5">
                    {activeModal === "kids"
                      ? "Courses designed to build strong Quranic and Islamic foundations."
                      : "Select from our structured Quran learning and Tajweed programs."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 grid-auto-rows-fr">
                    {activeModal === "kids" ? (
                      <>
                        <Link to="/courses/1" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Basic Qaida
                        </Link>
                        <Link to="/courses/2" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Quran Recitation
                        </Link>
                        <Link to="/courses/3" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Hifz Surahs Plan
                        </Link>
                        <Link to="/courses/4" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Hifz Complete Quran
                        </Link>
                        <Link to="/courses/5" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Tajweed Mystery
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/courses/6" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Basic Islamic Knowledge
                        </Link>
                        <Link to="/courses/7" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Basic Qaida
                        </Link>
                        <Link to="/courses/8" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Quran Recitation
                        </Link>
                        <Link to="/courses/9" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Tafseer Surahs Plan
                        </Link>
                        <Link to="/courses/10" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Complete Quran Tafseer
                        </Link>
                        <Link to="/courses/11" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Hifz Surahs Plan
                        </Link>
                        <Link to="/courses/12" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Hifz Complete Quran
                        </Link>
                        <Link to="/courses/13" className="btn-course" onClick={() => { setActiveModal(null); window.scrollTo(0, 0); }}>
                          Quran Revision
                        </Link>

                      </>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setActiveModal(null)}
                  className="mt-6 text-[#000000] text-sm hover:underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkingCourses;
