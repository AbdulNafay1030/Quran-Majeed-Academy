import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const TafseerSurahsPlan = () => {
  const goals = useMemo(
    () => [
      "Deeply understand the meanings, themes, and guidance of selected Surahs.",
      "Learn the principles and methods of Qur’anic interpretation (Tafseer).",
      "Apply Qur’anic wisdom to daily personal, social, and spiritual life.",
      "Strengthen connection with Allah through understanding, not just recitation.",
    ],
    []
  );

  const surahs = useMemo(
    () => ["Surah An-Nisā’", "Surah Yūsuf", "Surah Al-Kahf", "Surah An-Nūr", "Surah Al-Ḥujurāt"],
    []
  );

  const timeline = useMemo(
    () => [
      {
        step: "Step 1 – Foundations of Tafseer",
        time: "(Month 1)",
        surah: "Introduction to Tafseer",
        text:
          "Understand meaning, importance, and types of Tafseer. Learn to approach Qur’anic study with reflection and reverence.",
      },
      {
        step: "Step 2 – Understanding Society through Revelation",
        time: "(Months 2–4)",
        surah: "An-Nisā’",
        text:
          "Explore Qur’anic principles of justice, family, inheritance, and moral conduct. Learn equality, women’s rights, and social ethics.",
      },
      {
        step: "Step 3 – Lessons in Patience and Purity",
        time: "(Months 5–6)",
        surah: "Yūsuf",
        text:
          "Study Prophet Yusuf (AS) — a model of patience, integrity, and divine planning. Learn emotional intelligence and faith in trials.",
      },
      {
        step: "Step 4 – Faith and Trials",
        time: "(Months 7–9)",
        surah: "Al-Kahf",
        text:
          "Analyze trials of faith, wealth, knowledge, and power. Understand parables and how this Surah protects from Dajjal’s fitnah.",
      },
      {
        step: "Step 5 – Social Morality and Light of Guidance",
        time: "(Months 10–11)",
        surah: "An-Nūr",
        text:
          "Study Islamic laws of modesty, justice, and social harmony. Learn teachings on slander, privacy, and community ethics.",
      },
      {
        step: "Step 6 – Ethics of Believers & Character Refinement",
        time: "(Month 12)",
        surah: "Al-Ḥujurāt",
        text:
          "Explore Qur’anic etiquette of speech, respect, and brotherhood. Learn moral framework for Muslim society and self-purification.",
      },
    ],
    []
  );

  const components = useMemo(
    () => [
      { icon: "📖", title: "Classical Tafseer Sources", text: "Ibn Kathir & Ma‘ariful Qur’an" },
      { icon: "🕌", title: "Hadith Integration", text: "Relevant Prophetic narrations for each Surah" },
      { icon: "🗣", title: "Arabic Insights", text: "Key vocabulary reflections" },
      { icon: "🌍", title: "Contextual Study", text: "Shan-e-Nuzool & Rabt al-Ayat" },
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
      {/* ✅ Service 1: Overview */}
      <Card id="service1" title="Course Overview">
        <p className="text-gray-700 leading-relaxed">
          This 12-month journey takes students through the deeper meanings and guidance of
          five transformative Surahs of the Quran focusing on understanding, reflection,
          and real-life application. The course begins with the foundations of Tafseer—its
          purpose, methodology, and importance—before exploring selected Surahs that shape
          faith, character, and society. Students will not only learn classical Tafseer but also
          connect it with modern challenges to strengthen their relationship with the Quran.
        </p>
      </Card>

      {/* ✅ Service 2: Goals */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          {goals.map((g, i) => (
            <Bullet key={i}>{g}</Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ Service 3: Surahs Covered */}
      <Card id="service3" title="Selected Surahs Covered">
        <p className="text-center text-gray-500 mb-5">
          An in-depth journey through the Qur’an’s timeless lessons and moral guidance.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {surahs.map((s, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-[#15803D]/25 bg-[#15803D]/5 text-gray-800 font-semibold text-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </Card>

      {/* ✅ Service 4: Curriculum */}
      <Card id="service4" title="12-Month Curriculum">
        <div className="space-y-4">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-5"
            >
              <h5 className="font-extrabold text-gray-900">
                {t.step} <span className="text-gray-500 font-semibold text-sm">{t.time}</span>
              </h5>
              <h6 className="text-[#15803D] font-bold mt-1">Surah: {t.surah}</h6>
              <p className="text-gray-700 mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* ✅ Service 5: Components */}
      <Card id="service5" title="Study Components">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {components.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-5 text-center"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h6 className="font-extrabold text-gray-900">{c.title}</h6>
              <p className="text-gray-600 mt-2 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* ✅ Service 6: Outcomes */}
      <Card id="service6" title="Expected Outcomes">
        <ul className="space-y-3 text-gray-700">
          <li>✅ Comprehensive understanding of five essential Surahs</li>
          <li>✅ Mastery of foundational Tafseer principles</li>
          <li>✅ Ability to apply Qur’anic lessons in real life</li>
          <li>✅ Deepened love and reflection upon the Qur’an</li>
        </ul>
      </Card>

      {/* ✅ Service 7: Certification */}
      <Card id="service7" title="Certification">
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="text-gray-700">
            Upon successful completion, students receive a{" "}
            <b>Certificate in Tafseer of Selected Surahs</b>, following an oral evaluation
            focused on comprehension, reflection, and application.
          </p>
        </div>
      </Card>
    </>
  );
};

export default TafseerSurahsPlan;
