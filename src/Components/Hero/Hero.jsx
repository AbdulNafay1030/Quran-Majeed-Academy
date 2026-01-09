import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FullWidth from '../Layout/FullWidth.jsx';
import Container from '../Layout/Container.jsx';
import Button from '../UI/Button.jsx';
import HeaderImage from '../../assets/images/head-imagee.png';
import { BookOpenCheck, Landmark, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [ayah, setAyah] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const fetchAyah = async () => {
    try {
      const randomAyah = Math.floor(Math.random() * 6236) + 1;
      const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomAyah}/en.asad`);
      const data = await response.json();
      if (data?.data) setAyah(data.data);
    } catch (error) {
      console.error("Error fetching Ayah:", error);
    }
  };

  useEffect(() => {
    fetchAyah();
    const interval = setInterval(fetchAyah, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FullWidth>
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/8164600/pexels-photo-8164600.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCF2E9]/95 via-[#DCF2E9]/90 to-[#DCF2E9]/95 z-0" />

        <Container className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 min-h-[90vh] py-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col items-center md:items-start max-w-2xl text-black"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-[#15803D]">
                Online Quran Classes
              </span>
              <br />
              with Certified Teachers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-[#000000] mb-6"
            >
              Learn Quran with Tajweed from expert Male and Female teachers.
            </motion.p>

            {ayah && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-full"
              >
                <div
                  className="bg-black/10 backdrop-blur-sm rounded-xl p-5 border border-black/10 relative transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#000000]/10 to-transparent transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                  <p className="relative z-10 italic mb-3 text-black">"{ayah.text}"</p>
                  <p className="text-right text-sm text-[#000000] relative z-10">— Surah {ayah.surah.englishName}, Ayah {ayah.numberInSurah}</p>
                </div>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center md:justify-start">
              <Link to="/courses">
                <Button className="bg-[#15803D] hover:bg-[#15803D]/90 font-semibold px-8 py-3 rounded-lg shadow-md text-white mobile-subscribe-button ">
                  Get Started
                </Button>
              </Link>
              <Link to="/trial">
                <Button className="bg-[#15803D] hover:bg-[#15803D]/90 font-semibold px-8 py-3 rounded-lg shadow-md text-white mobile-subscribe-button ">
                  Free Trial
                </Button>
              </Link>
            </div>

            {/* Hadith Icons Section Below Text */}
<div className="mt-5 grid grid-cols-3 gap-4 w-full text-center">
  <div className="flex flex-col items-center">
    <BookOpenCheck className="w-8 h-8 text-[#15803d]" />
    <p className="text-sm text-black-200 mt-2">Guidance</p>
  </div>

  <div className="flex flex-col items-center">
    <Landmark className="w-8 h-8 text-[#15803d]" />
    <p className="text-sm text-black-200 mt-2">Knowledge</p>
  </div>

  <div className="flex flex-col items-center">
    <Sparkles className="w-8 h-8 text-[#15803d]" />
    <p className="text-sm text-black-200 mt-2">Light</p>
  </div>
</div>

          </motion.div>

          {/* Image Section with Icons Below */}
{/* <motion.div
  initial={{ opacity: 0, x: 100, scale: 0.95 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full max-w-md hidden md:block"
>
  <div className="rounded-2xl overflow-hidden">
    <img
      src="https://images.pexels.com/photos/9127147/pexels-photo-9127147.jpeg"
      alt="Quran"
      className="w-full h-auto object-cover"
      loading="lazy"
    />
  </div>
</motion.div> */}

        </Container>
      </section>
    </FullWidth>
  );
};

export default Hero;
