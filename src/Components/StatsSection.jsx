import React, { useEffect, useRef, useState } from "react";
import { Landmark, MessageCircleIcon, Sparkles } from "lucide-react";

const StatsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const [countries, setCountries] = useState(0);
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const animate = (setter, max, speed = 40) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count === max) clearInterval(interval);
      }, speed);
    };

    animate(setCountries, 40, 30);
    animate(setStudents, 400, 8);
    animate(setTeachers, 20, 60);
  }, [visible]);

return (
  <div
    ref={ref}
    className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full
               place-items-center text-center"
  >

    {/* Countries */}
    <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        <Landmark className="w-8 h-8 text-[#000000]" />
      </div>
      <h3 className="text-2xl font-bold text-[#000000]">
        {countries}+
      </h3>
      <p className="text-sm text-black-200">
        Countries
      </p>
    </div>

    {/* Students */}
    <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        <MessageCircleIcon className="w-8 h-8 text-[#000000]" />
      </div>
      <h3 className="text-2xl font-bold text-[#000000]">
        {students}+
      </h3>
      <p className="text-sm text-black-200">
        Students
      </p>
    </div>

    {/* Teachers */}
    <div className="flex flex-col items-center justify-center h-full min-h-[140px]">
      <div className="w-12 h-12 flex items-center justify-center mb-2">
        <Sparkles className="w-8 h-8 text-[#000000]" />
      </div>
      <h3 className="text-2xl font-bold text-[#000000]">
        {teachers}+
      </h3>
      <p className="text-sm text-black-200">
        Certified Teachers
      </p>
    </div>

  </div>
);

};

export default StatsSection;
