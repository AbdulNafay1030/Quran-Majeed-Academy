import React, { useState } from "react";


const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Mame",
      country: "France",
      review:
        " Alhamdoulilah! I thank Allah for giving me the opportunity to learn the Holy Qur’an with Quran Majeed. I feel more confident through the advice of my teacher",
    },
    {
      id: 2,
      name: " Awana Abbasi",
      country: "SouthAfrica",
      review:
        "Alhamdulillah I am so happy and proud of myself. Their teachers are patient and help you understand everything clearly.",
    },
    {
      id: 3,
      name: "Hussain",
      country: "Gambia",
      review:
        " MashaaAllah, since I started there’s a great improvement in my Quranic recitation.",
    },
 {
          id: 4,
      name: "Kehenga Maulid",
      country: "Tanzania",
      review:
        "  My kids are doing great with their Quran studies. Thanks to the teachers and the administration.",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? reviews.length - 1 : index - 1);

  const next = () =>
    setIndex(index === reviews.length - 1 ? 0 : index + 1);

  return (
    <section className="bg-[#ffffff] py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
          What Our Students Say
        </h2>

        <p className="text-[#000000] max-w-2xl mx-auto mb-16">
          Honest reviews from parents and students learning with
          Quran Majeed Academy.
        </p>

        {/* Review Card */}
        <div className="relative max-w-3xl mx-auto">

          <div className="bg-[#ffffff] border border-[#15809D]/20 rounded-2xl p-8 shadow-xl">
            <p className="text-[#000000] text-lg leading-relaxed mb-8">
              “{reviews[index].review}”
            </p>

            <div>
              <p className="text-[#15803D] font-semibold">
                {reviews[index].name}
              </p>
              <p className="text-sm text-[#15803D]">
                {reviews[index].country}
              </p>
            </div>
          </div>

          {/* Left Arrow */}
              <button
                onClick={prev}
className="absolute top-1/2 -left-2 md:-left-8 transform -translate-y-1/2
           w-10 h-10 rounded-full border border-[#000000]
           text-[#000000] hover:bg-[#ffffff] hover:text-[#0F2A44]
           transition font-bold"

              >
                &lt;
              </button>

          {/* Right Arrow */}
  <button
    onClick={next}
    className="absolute top-1/2 right-0 md:right-0 transform -translate-y-1/2
               w-10 h-10 rounded-full border border-black
               text-black hover:bg-white hover:text-[#0F2A44]
               transition font-bold"
  >
    &gt;
  </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition
                ${i === index ? "bg-[#000000]" : "bg-[#000000]/40"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
