import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const HifzSurahsPlan = () => {
  const surahs = useMemo(
    () => [
      "Last 20 Surahs of the Qur’an",
      "Surah Al-Mulk",
      "Surah Al-Muzzammil",
      "Surah Al-Waqi‘ah",
      "Surah Ar-Rahman",
      "Surah As-Sajdah",
      "Surah Ya-Sin",
      "Surah Al-Kahf",
    ],
    []
  );

  const plan = useMemo(
    () => [
      ["Step 1 – Foundation", "Month 1", "Review Tajweed & fluency"],
      ["Step 2 – Short Surahs Hifz", "Month 2", "Last 20 Surahs"],
      ["Step 3 – Barakah Surahs I", "Months 3–4", "Al-Mulk, Al-Waqi‘ah"],
      ["Step 4 – Barakah Surahs II", "Months 5–7", "Ar-Rahman, As-Sajdah"],
      ["Step 5 – Heart of Qur’an", "Months 8–9", "Ya-Sin"],
      ["Step 6 – Completion & Review", "Months 10–12", "Al-Kahf + Revision + Final Test"],
    ],
    []
  );

  const Card = ({ title, children, id }) => (
    <div
      id={id}
      className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.07)] mb-8"
      style={{ scrollMarginTop: 110 }}
    >
      <h3 className="text-xl md:text-2xl font-extrabold text-[#1e3c72] relative mb-5">
        {title}
        <span className="block w-12 h-1 bg-[#4CAF50] rounded mt-2" />
      </h3>
      {children}
    </div>
  );

  const Bullet = ({ children }) => (
    <li className="flex items-start gap-3 bg-white rounded-xl border-l-[5px] border-l-[#4CAF50] p-3 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition hover:translate-x-1">
      <CheckCircle className="w-5 h-5 text-[#4CAF50] mt-0.5 shrink-0" />
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <>
      {/* ✅ Overview */}
      <Card
        id="service1"
        title="Selected Surahs Hifz Program (12 Months) — Overview"
      >
        <p className="text-gray-700 leading-relaxed">
          This 12-month Hifz program is designed for learners who already have basic
          Tajweed, correct pronunciation, and fluency in Qur’an reading. It focuses on
          memorizing selected, blessed Surahs — those recited in Salah and known for
          their spiritual rewards — while strengthening the student’s lifelong
          connection with the Qur’an. Students memorize with Tajweed, understanding,
          and consistency, guided one-to-one by qualified Huffaz teachers. Each lesson
          includes new memorization + daily revision, ensuring strong retention and
          lifelong fluency.
        </p>
      </Card>

      {/* ✅ Outcome */}
      <Card id="service2" title="Outcome">
        <ul className="space-y-3">
          <Bullet>Memorize essential Surahs for daily Salah and barakah</Bullet>
          <Bullet>Strengthen spiritual connection and love for the Qur’an</Bullet>
          <Bullet>Build fluency, focus, and Tajweed accuracy</Bullet>
          <Bullet>Develop daily discipline through revision and consistency</Bullet>
          <Bullet>Establish a lifelong relationship with the Qur’an</Bullet>
        </ul>
      </Card>

      {/* ✅ Surahs Included */}
      <Card id="service3" title="Surahs Included in This Program">
        <p className="text-gray-600 mb-6">
          Students will memorize the following Surahs with proper{" "}
          <b>Tajweed</b> and understanding:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {surahs.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center"
            >
              <h5 className="font-semibold text-gray-800">{s}</h5>
            </div>
          ))}
        </div>

        <p className="mt-6 italic text-gray-500">
          (Selection can be customized based on student’s preference or teacher’s recommendation.)
        </p>
      </Card>

      {/* ✅ Curriculum (Responsive) */}
<Card id="service4" title="12-Month Learning Plan">
  {/* Mobile: cards */}
  <div className="grid grid-cols-1 gap-4 md:hidden">
    {plan.map(([phase, duration, focus], i) => (
      <div
        key={i}
        className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      >
        <p className="font-semibold text-gray-800">{phase}</p>
        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Focus:</span> {focus}
        </p>
      </div>
    ))}
  </div>

  {/* Desktop/tablet: table (NO SCROLL) */}
  <div className="hidden md:block rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
    <table className="w-full text-left border-collapse bg-white table-fixed">
      <thead>
        <tr className="bg-[#4CAF50] text-white">
          <th className="p-3 font-bold w-1/4">Phase</th>
          <th className="p-3 font-bold w-1/5">Duration</th>
          <th className="p-3 font-bold w-3/5">Focus Area</th>
        </tr>
      </thead>

      <tbody>
        {plan.map(([phase, duration, focus], i) => (
          <tr key={i} className="border-t align-top">
            <td className="p-3 font-semibold text-gray-800 break-words">
              {phase}
            </td>
            <td className="p-3 text-gray-700 whitespace-nowrap">
              {duration}
            </td>
            <td className="p-3 text-gray-600 break-words">
              {focus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Card>


      {/* ✅ Class Routine */}
      <Card id="service5" title="Class Routine">
        <ul className="space-y-3">
          <Bullet>30 minutes daily</Bullet>
          <Bullet>New memorization + daily review</Bullet>
          <Bullet>Weekly testing & progress tracking</Bullet>
          <Bullet>Old Surahs revised daily before new lesson</Bullet>
        </ul>
      </Card>

      {/* ✅ Teaching Format */}
      <Card id="service6" title="Teaching Format">
        <ul className="space-y-3">
          <Bullet>One-to-one live sessions (Zoom/Google Meet)</Bullet>
          <Bullet>Qualified Huffaz & Tajweed-certified teachers</Bullet>
          <Bullet>Personalized memorization and revision plan</Bullet>
          <Bullet>Weekly progress updates for parents</Bullet>
          <Bullet>Certificate upon completion</Bullet>
        </ul>
      </Card>

      {/* ✅ For Parents */}
      <Card id="service7" title="For Parents">
        <ul className="space-y-3">
          <Bullet>Receive weekly memorization reports</Bullet>
          <Bullet>Gentle correction and encouragement</Bullet>
          <Bullet>Focus on helping children build confidence and love for the Qur’an</Bullet>
        </ul>
      </Card>
    </>
  );
};

export default HifzSurahsPlan;
