import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const CompleteQuranTafseer = () => {
  const goals = useMemo(
    () => [
      "Develop a deep understanding of Qur’anic meanings and messages.",
      "Learn the commands (Ahkaam) of Allah and how to implement them.",
      "Strengthen your connection with the Qur’an through reflection and practice.",
      "Experience the beauty, purpose, and guidance of Qur’anic verses in daily life.",
    ],
    []
  );

  const methodology = useMemo(
    () => [
      "Interactive Tafseer lectures (Zoom / Google Meet)",
      "Reflection questions & practical takeaways",
      "Weekly Q&A & spiritual discussions",
      "Periodic assessments & reflection journals",
    ],
    []
  );

  const outcomes = useMemo(
    () => [
      "Understand the Qur’an directly with context and purpose.",
      "Recognize the divine wisdom behind each revelation.",
      "Strengthen faith through deep reflection (Tadabbur).",
      "Develop a life guided by Qur’anic principles and values.",
    ],
    []
  );

  const studyRows = useMemo(
    () => [
      ["Meaning of Tafseer", "Understand what Tafseer means, its scope, and purpose."],
      [
        "Importance of Tafseer",
        "Discover why Tafseer is essential for proper Qur’an understanding and practice.",
      ],
      [
        "Types of Tafseer",
        "Study classical, linguistic, and thematic types of Qur’anic interpretation.",
      ],
      [
        "Usool al-Tafseer (Principles)",
        "Learn how scholars interpret the Qur’an using hadith, language, and context.",
      ],
      ["Verse Translation & Mafhoom", "Translate and comprehend the meaning and theme of each verse."],
      [
        "Surah Summary (Khulasa)",
        "Each Surah summarized with its message, themes, and practical lessons.",
      ],
      ["Arabic Grammar Essentials", "Basic grammar to help understand the Qur’an directly in Arabic."],
      ["Shan-e-Nuzool", "Study the background and reason for revelation of specific verses."],
      ["Rabt-e-Ayat & Surah", "Understand the connection between verses and between Surahs."],
      ["Ahkaam (Qur’anic Laws)", "Identify practical rulings derived from different verses."],
      ["Lessons from Verses", "Extract moral and spiritual guidance from each passage."],
      ["Hadith References", "Relevant hadiths that explain or support the meaning of the verses."],
      ["Stories of Prophets (Ambiya)", "Explore Qur’anic narratives and their wisdom for today."],
      ["Living the Qur’an", "How to practically implement Qur’anic guidance in modern life."],
    ],
    []
  );

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
      {/* ✅ Service 1: Course Overview */}
      <Card id="service1" title="Course Overview">
        <p className="text-gray-700 leading-relaxed">
          <b>Course:</b> Comprehensive Tafseer of the Qur’an <br />
          <b>From:</b> Surah Al-Baqarah to Surah An-Naas <br />
          <b>Course Type:</b> Long-Term (No fixed duration) <br />
          <b>Schedule:</b> 5 Days a Week (Mon–Fri) <br />
          <b>Class Duration:</b> 30 minutes <br />
          <b>Suitable For:</b> Adults and serious learners with a desire to understand and live by
          the Quran.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          This comprehensive Tafseer program is a complete journey through the Quran from Surah
          Al-Baqarah to Surah An-Naas. It helps students not only understand the meanings and wisdom
          of the Quran but also apply its teachings to daily life. Through in-depth explanations,
          Arabic vocabulary, and context-based learning, this course connects your heart, mind, and
          actions with Allah&apos;s divine message.
        </p>
      </Card>

      {/* ✅ Service 2: Course Goals */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          {goals.map((g, i) => (
            <Bullet key={i}>{g}</Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ Service 3: What You'll Study */}
      <Card id="service3" title="What You’ll Study">
        {/* ✅ Mobile: cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {studyRows.map(([focus, desc], i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-4"
            >
              <p className="font-extrabold text-gray-900">{focus}</p>
              <p className="text-gray-700 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ Desktop: table */}
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
          <table className="min-w-[700px] w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-[#4CAF50] text-white">
                <th className="p-3 font-bold">Focus Area</th>
                <th className="p-3 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              {studyRows.map(([focus, desc], i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 font-semibold text-gray-800">{focus}</td>
                  <td className="p-3 text-gray-700">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ✅ Service 4: Teaching Methodology */}
      <Card id="service4" title="Teaching Methodology">
        <ul className="space-y-3">
          {methodology.map((m, i) => (
            <Bullet key={i}>{m}</Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ Service 5: Expected Outcome */}
      <Card id="service5" title="Expected Outcome">
        <ul className="space-y-3">
          {outcomes.map((o, i) => (
            <Bullet key={i}>{o}</Bullet>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default CompleteQuranTafseer;
