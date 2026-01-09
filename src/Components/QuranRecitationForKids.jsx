import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const QuranRecitationForKids = () => {
  const curriculum = useMemo(
    () => [
      ["1", "Mushaf Orientation & Stop Signs", "Learn Mushaf layout and understand stop signs (م، ط، ج، لا، قلی). Practice pausing correctly in short verses."],
      ["2", "Basic Tajweed – Ghunna & Qalqalah", "Identify and apply these rules while reading selected verses."],
      ["3", "Fluent Reading Practice – Short Surahs (Ikhlaas to Naas)", "Begin reading short Surahs fluently with teacher guidance and Tajweed correction."],
      ["4", "Reading Continuation – Surahs (Al-Qadr to Al-Lahab)", "Continue practice to strengthen fluency and rhythm through daily reading drills and correction."],
      ["5", "Applied Practice – Surah Al-Mulk (Half)", "Start reading longer Surahs with controlled breathing and proper pauses. Teacher assistance in difficult words."],
      ["6", "Correction & Stop/Start Practice – Surah Al-Mulk (Complete)", "Complete Surah Al-Mulk with correct Waqf and Ibtida. Focus on continuity and confidence."],
      ["7", "Guided Recitation – Surah Al-Jinn", "Read with teacher support and apply previously learned Tajweed rules in full-length recitation."],
      ["8", "Guided Recitation – Surah Ad-Dahr", "Continue improving fluency and accuracy with teacher guidance and feedback."],
      ["9", "Guided Recitation – Surah Ya-Sin (Half)", "Read the first half of Surah Ya-Sin with teacher assistance. Focus on correct Tajweed, rhythm, and pronunciation."],
      ["10", "Independent Reading – Surah Ya-Sin (Complete)", "Recite the full Surah Ya-Sin independently. Maintain fluency, tone, and Waqf without teacher guidance."],
      ["11", "Extended Practice – Surah Ar-Rahman", "Practice a longer Surah to build stamina, consistency, and confidence in fluent recitation."],
      ["12", "Final Assessment & Fluency Test", "Oral evaluation of Tajweed, pronunciation, and fluency. Certificate awarded upon successful completion."],
    ],
    []
  );

  // Reuse the same Card look from CourseDetail so it matches perfectly
  const Card = ({ title, id, children }) => (
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
      {/* ✅ Page heading section (your HTML header) */}


      {/* ✅ PHASE 01 OVERVIEW */}
      <Card id="service1" title="PHASE 01 — Overview">
        <p className="text-gray-700 leading-relaxed">
          This 12-week Qur’an Recitation program helps students build fluency,
          accuracy, and confidence. Focused on basic Tajweed, stop signs (Waqf rules),
          and short to medium Surahs, it guides learners in proper rhythm, tone, and
          pronunciation. Through guided recitation, practice, and teacher feedback,
          students strengthen their skills, correct mistakes, and gain confidence to read
          longer Surahs. By the end, participants will have a solid foundation for
          advanced Qur’an recitation.
        </p>
      </Card>

      {/* ✅ GOALS */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          <Bullet>Develop fluency and confidence in Qur’an recitation</Bullet>
          <Bullet>Learn and apply basic Tajweed rules</Bullet>
          <Bullet>Understand and apply stop signs (Waqf rules) while reading</Bullet>
          <Bullet>Begin reading joined letters smoothly and fluently</Bullet>
          <Bullet>Recite short and medium Surahs with proper rhythm, clarity, and Tajweed</Bullet>
        </ul>
      </Card>

      {/* ✅ CURRICULUM PLAN (Responsive) */}
      <Card id="service3" title="Curriculum Plan">
        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {curriculum.map(([week, focus, tasks], i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <p className="font-semibold text-gray-800">Week {week}</p>
              <p className="text-gray-700">{focus}</p>
              <p className="text-gray-500 text-sm mt-1">{tasks}</p>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
{/* Desktop Table */}
<div className="hidden md:block rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
  <table className="w-full text-left border-collapse bg-white">
    <thead>
      <tr className="bg-[#4CAF50] text-white">
        <th className="p-3 font-bold">Week</th>
        <th className="p-3 font-bold">Focus Area</th>
        <th className="p-3 font-bold">Main Tasks & Objectives</th>
      </tr>
    </thead>
    <tbody>
      {curriculum.map(([week, focus, tasks], i) => (
        <tr key={i} className="border-t">
          <td className="p-3 font-semibold text-gray-800 whitespace-nowrap">
            {week}
          </td>
          <td className="p-3 text-gray-700 break-words">
            {focus}
          </td>
          <td className="p-3 text-gray-600 break-words">
            {tasks}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </Card>

      {/* ✅ OUTCOME (PHASE 01) */}
      <Card id="service4" title="Outcome (Phase 01)">
        <p className="text-gray-700 mb-4">By the end of 12 weeks, students will:</p>
        <ul className="space-y-3">
          <Bullet>Recite the Qur’an fluently with correct Tajweed and rhythm</Bullet>
          <Bullet>Recognize and apply stop signs accurately</Bullet>
          <Bullet>Correct their own mistakes while reading</Bullet>
          <Bullet>Build stamina and confidence for longer Surahs</Bullet>
          <Bullet>Be prepared for Phase 2: Advanced Quran recitation</Bullet>
        </ul>
      </Card>

      {/* ✅ TEACHING FORMAT */}
      <Card id="service5" title="Teaching Format">
        <ul className="space-y-3">
          <Bullet>Live interactive sessions (Zoom/Google Meet)</Bullet>
          <Bullet>One-on-one correction and personalized feedback</Bullet>
          <Bullet>Audio drills and daily practice tasks</Bullet>
          <Bullet>Weekly progress evaluation and certificate after final test</Bullet>
        </ul>
      </Card>

      {/* ✅ PHASE 02 OVERVIEW */}
      <Card id="service6" title="Phase 02 Overview">
        <p className="text-gray-700 leading-relaxed mb-6">
          This one-year course takes students through a complete Qur’an recitation
          journey focusing on fluency, Tajweed, rhythm, and confidence. Designed for
          children & adults with basic Qur’an reading ability, it gradually builds
          from shorter to longer portions while perfecting Tajweed and voice control.
        </p>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <h4 className="font-bold text-gray-800">
              🕋 Step 1 – Foundation of Fluency{" "}
              <span className="font-normal text-gray-500">(Months 1–4)</span>
            </h4>
            <p className="text-gray-700 mt-1">
              <strong>Focus:</strong> First 8 Juz
            </p>
            <ul className="space-y-3 mt-4">
              <Bullet>Strengthen Tajweed fundamentals and correct pronunciation.</Bullet>
              <Bullet>Develop smooth recitation flow and stop/start awareness.</Bullet>
              <Bullet>Build stamina through consistent daily reading and practice.</Bullet>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <h4 className="font-bold text-gray-800">
              🌿 Step 2 – Strength & Stability{" "}
              <span className="font-normal text-gray-500">(Months 5–8)</span>
            </h4>
            <p className="text-gray-700 mt-1">
              <strong>Focus:</strong> Next 10 Juz
            </p>
            <ul className="space-y-3 mt-4">
              <Bullet>Strengthen fluency in longer Surahs with rhythm and clarity.</Bullet>
              <Bullet>Improve tone, breath control, and emotional connection with recitation.</Bullet>
              <Bullet>Apply Tajweed rules confidently across varying recitation speeds.</Bullet>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <h4 className="font-bold text-gray-800">
              🕊️ Step 3 – Mastery & Expression{" "}
              <span className="font-normal text-gray-500">(Months 9–12)</span>
            </h4>
            <p className="text-gray-700 mt-1">
              <strong>Focus:</strong> Last 12 Juz
            </p>
            <ul className="space-y-3 mt-4">
              <Bullet>Recite continuously with beauty, balance, and control.</Bullet>
              <Bullet>Refine Makharij and voice expression for heartfelt Qur’an recitation.</Bullet>
              <Bullet>Prepare for full-Qur’an assessment and final completion.</Bullet>
            </ul>
          </div>
        </div>
      </Card>

      {/* ✅ OUTCOME (PHASE 02) */}
      <Card id="service7" title="Outcome (Phase 02)">
        <p className="text-gray-700 mb-4">By the end of the program, students will:</p>
        <ul className="space-y-3">
          <Bullet>Recite the entire Qur’an fluently with strong Tajweed accuracy.</Bullet>
          <Bullet>Master recitation flow, tone, and expression.</Bullet>
          <Bullet>Build lifelong confidence and love for reading the Qur’an beautifully.</Bullet>
          <Bullet>Receive a Certificate of Qur’an Recitation Completion.</Bullet>
        </ul>
      </Card>
    </>
  );
};

export default QuranRecitationForKids;
