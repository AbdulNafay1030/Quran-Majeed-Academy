import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import LandingPageAboutUs from '../About us/LandingPageAboutUs'
import LandingCoures from '../Our Courses/LandingCoures'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer'
import FaqSection from '../Faqs/FaqSection'
import ContactUs from '../Contact Us/Contact'
import AboutUs from '../About us/AboutUs'
import WorkingCourses from "../WorkingCourses";
import GlobalPresence from "../GlobalPresence";
import PremiumPricing from "../PremiumPricing";
import FeePlans from "../FeePlans";
import ReviewsSection from "../ReviewsSection";
import ScrollToTop from "../ScrollToTop";









const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <LandingPageAboutUs />
      <WorkingCourses />
      <LandingCoures />
      <PremiumPricing />
      <ReviewsSection />
      <FaqSection />
      <GlobalPresence />
<ScrollToTop />


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home