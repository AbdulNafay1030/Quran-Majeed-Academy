import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqsData from "../../Data/FaqData";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#DCF2E9] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#000000] mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className={`cursor-pointer rounded-xl border transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-[#ffffff] border-[#ffffff]/40"
                    : "bg-[#ffffff]/70 border-[#000000]/20 hover:border-[#000000]/40"
                }`}
            >
              {/* Question */}
              <div className="flex justify-between items-center p-5">
                <h3 className="text-base md:text-lg font-semibold text-[#000000]">
                  {faq.question}
                </h3>

                <span className="text-2xl font-bold text-[#000000]">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm md:text-base text-[#000000] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
