import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Card from "../UI/Card";
import Container from "../Layout/Container";
import FullWidth from "../Layout/FullWidth";
import courseData from "../../Data/courseData.json";
import qualities from "../../Data/Qualities.js";

/* =========================
   Slider settings
========================= */
const sliderSettings = {
  dots: true,
  arrows: true,          // 👈 make sure arrows are ON
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};


/* =========================
   Animation variants
========================= */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LandingCourses = () => {
  return (
    <FullWidth>

      {/* =========================
          COURSES SECTION
      ========================== */}
      <section className="bg-[#DCF2E9] py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-12">
            Our Popular Courses
          </h2>

          <Slider {...sliderSettings}>
{courseData.slice(0, 5).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="px-3"
              >
                <Card
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  img={course.image}
                />
              </motion.div>
            ))}
          </Slider>
        </Container>
      </section>

      {/* =========================
          QUALITIES SECTION
      ========================== */}
      <section className="bg-[#ffffff] py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#000000] mb-14">
          What Makes Us Different?
        </h2>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-5"
              variants={cardVariants}
              custom={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[50px] h-[50px] md:w-[50px] md:h-[50px] object-contain"
              />

              <h3 className="text-lg md:text-xl font-semibold text-[#00000]">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-[#000000] max-w-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </FullWidth>
  );
};

export default LandingCourses;
