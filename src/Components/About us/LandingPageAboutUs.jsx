import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';
import AboutImage from '../../assets/images/head-image.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const LandingPageAboutUs = () => {
  return (
    <section className="bg-[#ffffff]">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 py-20">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00000]">
              About Us
            </h2>

            <p className="text-[#000000] leading-relaxed">
              We provide Quranic education through online courses, making it accessible
              for national and international students. Join us to deepen your understanding
              of the Quran from the comfort of your home.
            </p>

            <Link to="/about-us">
<Button
  className="mt-8 bg-[#15803D] hover:bg-[#15803D] text-white font-semibold px-8 py-3 rounded-lg shadow-md"
>
  Learn More
</Button>

            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm relative"
          >
            {/* subtle frame */}
            <div className="absolute inset-0 rounded-2xl border border-[#C9A24D]/20"></div>

            <img
              src={AboutImage}
              alt="About Us"
              className="relative w-full h-auto rounded-2xl"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default LandingPageAboutUs;
