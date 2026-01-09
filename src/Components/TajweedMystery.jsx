import React, { useMemo } from "react";
import { CheckCircle, Quote } from "lucide-react";

const TajweedMystery = () => {
  const plan = useMemo(
    () => [
      [
        "Month 1 – Sounds & Secrets",
        "Makharij & Sifaat",
        "Learn letter points and qualities; differentiate bold & soft sounds.",
      ],
      [
        "Month 2 – Hidden Rules",
        "Noon Saakin, Tanween & Meem Saakin",
        "Understand Izhaar, Idghaam, Ikhfaa, Iqlab, and Shafaawi rules through examples.",
      ],
      [
        "Month 3 – Bounce & Flow",
        "Qalqalah & Madd",
        "Practice echo letters and elongation rules for smooth recitation.",
      ],
      [
        "Month 4 – Mystery Practice",
        "Mixed Rules & Qur’an Practice",
        "Combine all learned rules with selected Qur’an passages for fluency and beauty.",
      ],
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

  const QuoteBox = ({ children }) => (
    <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative">
      <Quote className="w-6 h-6 text-[#4CAF50] absolute left-4 top-4" />
      <p className="text-gray-700 italic text-center px-6">{children}</p>
      <Quote className="w-6 h-6 text-[#4CAF50] absolute right-4 bottom-4 rotate-180" />
    </div>
  );

  return (
    <>
      {/* ✅ Overview (service1) */}
      <Card id="service1" title="Course Overview">
        <p className="text-gray-700 leading-relaxed">
          The Tajweed Mystery Course is an advanced-level Qur’an recitation program designed for students who have already completed the basic Qaida and are familiar with fundamental Tajweed rules.
          This 4-month course dives deeper into pronunciation, articulation, and rhythm—focusing on accuracy, fluency, and beauty of recitation.
        </p>
      </Card>

      {/* ✅ Goals (service2) */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          <Bullet>Improve pronunciation and fluency in Qur’an recitation.</Bullet>
          <Bullet>Master common Tajweed rules through fun and repetition.</Bullet>
          <Bullet>Understand and apply rules like Idghaam, Qalqalah, and Madd.</Bullet>
          <Bullet>Build love and confidence in reading the Qur’an beautifully.</Bullet>
        </ul>
      </Card>

      {/* ✅ Curriculum Plan (service3) */}
<Card id="service3" title="Curriculum Plan">
  {/* Mobile cards */}
  <div className="grid grid-cols-1 gap-4 md:hidden">
    {plan.map(([month, focus, objectives], i) => (
      <div
        key={i}
        className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      >
        <p className="font-semibold text-gray-800">{month}</p>
        <p className="text-gray-700 mt-1">
          <b>Focus:</b> {focus}
        </p>
        <p className="text-gray-600 mt-1">{objectives}</p>
      </div>
    ))}
  </div>

  {/* Desktop/tablet table (NO SCROLL) */}
<div className="hidden md:block rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
  <table className="w-full border-collapse bg-white">
    <thead>
      <tr className="bg-[#4CAF50] text-white">
        <th className="p-3 font-bold w-[140px] text-left">Month</th>
        <th className="p-3 font-bold w-[260px] text-left">Focus Area</th>
        <th className="p-3 font-bold text-left">Key Objectives</th>
      </tr>
    </thead>

    <tbody>
      {plan.map(([month, focus, objectives], i) => (
        <tr key={i} className="border-t">
          <td className="p-3 font-semibold text-gray-800 whitespace-nowrap align-top">
            {month}
          </td>

          <td className="p-3 text-gray-700 align-top">
            <p className="leading-relaxed break-words">{focus}</p>
          </td>

          <td className="p-3 text-gray-600 align-top">
            <p className="leading-relaxed break-words">{objectives}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</Card>


      {/* ✅ Highlights (service4) */}
      <Card id="service4" title="Course Highlights">
        <ul className="space-y-3">
          <Bullet>Step-by-step Tajweed mastery with practical Qur’an application.</Bullet>
          <Bullet>Live feedback from expert male & female instructors.</Bullet>
          <Bullet>End-of-course Tajweed test and completion certificate.</Bullet>
        </ul>

        <QuoteBox>“Perfect your recitation — perfect your connection with the Qur’an.”</QuoteBox>
      </Card>

      {/* ✅ For Parents (service5) */}
      <Card id="service5" title="For Parents">
        <ul className="space-y-3">
          <Bullet>Receive regular progress updates on your child’s Tajweed performance.</Bullet>
          <Bullet>Encourage daily 15–20 minutes of practice at home.</Bullet>
          <Bullet>Support positive reinforcement and confidence building.</Bullet>
        </ul>

        <QuoteBox>“Clear words today build a beautiful Qur’an voice tomorrow.”</QuoteBox>
      </Card>
    </>
  );
};

export default TajweedMystery;
