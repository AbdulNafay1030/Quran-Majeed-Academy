import React, { useState } from "react";
import MainLayout from "../Components/Layout/MainLayout";


const Testimonials = () => {
  // ✅ Put real VIDEO IDS here
  // Example:
  // https://www.youtube.com/watch?v=D08vHiCQVKw  -> youtubeId: "D08vHiCQVKw"
  // https://www.youtube.com/shorts/D3OONqH1I24   -> youtubeId: "D3OONqH1I24"
  const videoTestimonials = [
    {
      id: 1,
      title: "Student Review – Quran Majeed Academy",
      youtubeId: "D08vHiCQVKw",
    },
    {
      id: 2,
      title: "Student Review – Quran Majeed Academy",
      youtubeId: "D3OONqH1I24",
    },
  ];

  const textTestimonials = [
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? textTestimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === textTestimonials.length - 1 ? 0 : prev + 1));
  };

  const currentReview = textTestimonials[currentIndex];

  return (
    <MainLayout>
      <section className="bg-[#ffffff] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              What Our Students Say
            </h1>
            <p className="text-[#000000] max-w-2xl mx-auto">
              Real experiences from parents and students who are learning the Quran with Quran Majeed Academy.
            </p>
          </div>

          {/* ================= VIDEO TESTIMONIALS ================= */}
{/* ================= VIDEO TESTIMONIALS ================= */}
<div className="mb-24">
  <h2 className="text-2xl font-semibold text-[#000000] text-center mb-12">
    Video Testimonials
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {videoTestimonials.map((video) => {
      const isShort = video.type === "short";

      return (
        <div
          key={video.id}
          className="group rounded-2xl overflow-hidden border border-[#15803D]/20
                     shadow-xl transition hover:shadow-2xl hover:-translate-y-1
                     bg-[#15803D]"
        >
          {/* VIDEO WRAPPER */}
          <div className="relative bg-black flex justify-center">
            <div
              className={
                isShort
                  ? "aspect-[9/16] w-full max-w-[320px]" // ✅ SHORTS (vertical)
                  : "aspect-video w-full"               // ✅ NORMAL (horizontal)
              }
            >
              <iframe
                className="w-full h-full rounded-t-2xl"
                src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                title={video.title}
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* soft hover overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
                opacity-0 group-hover:opacity-100 transition pointer-events-none" />
          </div>

          {/* TITLE */}
          <div className="p-5 text-center">
            <h3 className="text-[#F9FAFB] font-semibold text-lg">
              {video.title}
            </h3>
            <p className="text-[#F9FAFB]/80 text-sm mt-1">
              {isShort ? "Watch Short" : "Watch Video"}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>


          {/* ================= TEXT REVIEWS SLIDER ================= */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#000000] mb-12">
              Student Reviews
            </h2>

            <div className="relative max-w-3xl mx-auto">
              {/* Review Card */}
              <div className="bg-[#ffffff] border border-[#C9A24D]/20 rounded-2xl p-8 shadow-xl">
                <p className="text-[#000000] text-lg leading-relaxed mb-8">
                  “{currentReview.review}”
                </p>

                <div>
                  <p className="text-[#15803D] font-semibold">{currentReview.name}</p>
                  <p className="text-sm text-[#15803D]">{currentReview.country}</p>
                </div>
              </div>

              {/* LEFT ARROW */}
              <button
                onClick={prevReview}
                className="absolute top-1/2 -left-2 md:-left-8 transform -translate-y-1/2
                           w-10 h-10 rounded-full border border-[#000000]
                           text-[#000000] hover:bg-[#ffffff] hover:text-[#0F2A44]
                           transition font-bold"
              >
                &lt;
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextReview}
                className="absolute top-1/2 right-0 md:right-0 transform -translate-y-1/2
                           w-10 h-10 rounded-full border border-black
                           text-black hover:bg-white hover:text-[#0F2A44]
                           transition font-bold"
              >
                &gt;
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {textTestimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    index === currentIndex ? "bg-[#000000]" : "bg-[#000000]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Testimonials;
