import React from "react";

const GlobalPresence = () => {
  return (
<section className="bg-[#ffffff] py-20">
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] mb-3">
      Our Global Presence
    </h2>
    <p className="text-[#000000] max-w-2xl mx-auto">
      Connecting students worldwide through our online Quran programs.
    </p>
  </div>

  {/* FULL WIDTH MAP */}
  <div className="relative w-full overflow-hidden">
    <div className="relative mx-auto w-full max-w-7xl px-4">

      {/* Aspect Ratio Box */}
      <div className="relative w-full aspect-[16/8] bg-[#ffffff]
                      rounded-xl border border-[#15803D]/20 shadow-lg overflow-hidden">

        <img
          src="https://quranschool.alimaanonline.co.uk/wp-content/uploads/2025/08/map.png"
          alt="Global Presence Map"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* MAP POINTS */}
        <span className="map-point" style={{ top: "45%", left: "47%" }} data-country="United Kingdom 🇬🇧"></span>
        <span className="map-point" style={{ top: "35%", left: "25%" }} data-country="Canada 🇨🇦"></span>
        <span className="map-point" style={{ top: "40%", left: "15%" }} data-country="USA 🇺🇸"></span>
        <span className="map-point" style={{ top: "70%", left: "30%" }} data-country="South Africa 🇿🇦"></span>
        <span className="map-point" style={{ top: "55%", left: "65%" }} data-country="Pakistan 🇵🇰"></span>
        <span className="map-point" style={{ top: "60%", left: "70%" }} data-country="India 🇮🇳"></span>
        <span className="map-point" style={{ top: "48%", left: "50%" }} data-country="Spain 🇪🇸"></span>
        <span className="map-point" style={{ top: "46%", left: "53%" }} data-country="Switzerland 🇨🇭"></span>
        <span className="map-point" style={{ top: "47%", left: "51%" }} data-country="France 🇫🇷"></span>

      </div>
    </div>
  </div>
</section>

  );
};

export default GlobalPresence;
