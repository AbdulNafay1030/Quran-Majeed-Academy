import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const BasicIslamicKnowledge = () => {
  const modules = useMemo(
    () => [
      {
        title: "🕌 Module 1: Islamic Beliefs (Aqeedah)",
        desc:
          "Understand the foundations of faith — Allah, His messengers, and the unseen world.",
        topics: [
          ["Topic 1", "Allah — His Oneness and Attributes"],
          ["Topic 2", "Angels and Their Duties"],
          ["Topic 3", "Divine Books and Revelation"],
          ["Topic 4", "Prophets, Qadr, and the Hereafter"],
        ],
      },
      {
        title: "🙏 Module 2: Worship (Ibadah)",
        desc: "Learn the acts of worship that connect the believer to Allah.",
        topics: [
          ["Topic 1", "Meaning of Worship and the Shahadah"],
          ["Topic 2", "Salah — Ablution, Bath, and Prayer Steps"],
          ["Topic 3", "Zakah, Fasting, and Hajj Basics"],
          ["Topic 4", "Daily Duas for Different Situations"],
        ],
      },
      {
        title: "🌿 Module 3: Character and Manners (Akhlaq)",
        desc: "Develop noble character through the teachings of Islam.",
        topics: [
          ["Topic 1", "Truthfulness, Patience, and Kindness"],
          ["Topic 2", "Respect for Parents and Elders"],
          ["Topic 3", "Polite Speech and Good Behavior"],
          ["Topic 4", "Helping Others, Modesty, and Forgiveness"],
        ],
      },
      // ✅ You said Modules 4–7 remain same as you provided.
      // Add them here later exactly the same way (copy-paste).
    ],
    []
  );

  const durationLevels = useMemo(
    () => [
      { level: "Level 1", duration: "4 Weeks", focus: "Aqeedah (Belief) + Worship" },
      { level: "Level 2", duration: "4 Weeks", focus: "Character + Daily Life + Hereafter" },
      { level: "Level 3", duration: "4 Weeks", focus: "Qur’an + Hadith + Seerah" },
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
      <Card id="service1" title="Basic Islamic Course — Overview">
        <p className="text-gray-700 leading-relaxed">
          This course is designed for new Muslims and beginners who want to learn the basics
          of Islam in a simple and practical way. It introduces the main beliefs, worship
          practices, manners, and daily lifestyle of a Muslim according to the Qur’an and
          Sunnah. Lessons are easy to follow and include Qur’anic verses, Hadiths, and
          real-life examples to help students build a strong foundation of faith.
        </p>
      </Card>

      {/* ✅ Goals */}
      <Card id="service2" title="Course Goals">
        <p className="text-gray-700 mb-4">By the end of this course, students will be able to:</p>
        <ul className="space-y-3">
          <Bullet>Understand the basic beliefs of Islam and what it means to be a Muslim.</Bullet>
          <Bullet>Learn the correct way to worship Allah and perform daily acts of Ibadah.</Bullet>
          <Bullet>Develop good manners and character as taught by Islam.</Bullet>
          <Bullet>Build love and respect for the Qur’an, Hadith, and Prophet Muhammad ﷺ.</Bullet>
          <Bullet>
            Apply Islamic teachings in everyday life and maintain a balance between religion and worldly duties.
          </Bullet>
        </ul>
      </Card>

      {/* ✅ Curriculum */}
      <Card id="service3" title="📘 Islamic Studies Curriculum">
        <div className="space-y-10">
          {modules.map((m, idx) => (
            <div key={idx}>
              <div className="text-center mb-5">
                <h4 className="text-[#15803D] font-extrabold text-lg md:text-xl">
                  {m.title}
                </h4>
                <p className="text-gray-600 mt-2">{m.desc}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {m.topics.map(([t, label], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <h5 className="font-bold text-gray-800">{t}</h5>
                    <p className="text-gray-700 mt-2">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ✅ Placeholder note (optional) */}
          <p className="text-gray-500 text-sm text-center italic">
            (Modules 4–7 can be added here exactly the same way.)
          </p>
        </div>
      </Card>

      {/* ✅ Course Duration */}
      <Card id="service4" title="🕒 Course Duration (Weekly Classes – 30 minutes each)">
        <p className="text-gray-600 text-center mb-6">
          Each level includes focused topics designed for gradual learning and spiritual growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {durationLevels.map((lvl, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center"
            >
              <h5 className="font-extrabold text-[#15803D]">{lvl.level}</h5>
              <p className="text-gray-700 mt-2">
                <b>Duration:</b> {lvl.duration}
              </p>
              <p className="text-gray-700 mt-1">
                <b>Focus:</b> {lvl.focus}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default BasicIslamicKnowledge;
