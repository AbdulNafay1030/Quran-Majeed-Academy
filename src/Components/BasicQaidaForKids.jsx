import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const BasicQaidaForKids = () => {
  const curriculum = useMemo(
    () => [
      ["Week 1", "Mushaf Orientation", "Learn layout & stop signs"],
      ["Week 2", "Arabic Alphabet", "Makharij focus"],
      ["Week 3", "Harakaat", "Short vowels explained"],
      ["Week 4", "Tanween & Sukoon", "Letter joining rules"],
      ["Week 5", "Madd Letters", "Elongation practice"],
      ["Week 6", "Shaddah", "Double letter rules"],
      ["Week 7", "Tajweed Basics", "Ghunna & Qalqalah"],
      ["Week 8", "Joining Practice", "Word reading drills"],
      ["Week 9", "Short Surahs", "Ikhlas – Naas"],
      ["Week 10", "Al-Fatihah", "Daily Duas & rules"],
      ["Week 11", "Revision", "Error correction"],
      ["Week 12", "Final Exam", "Certification"],
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
      <Card id="service1" title="Course Overview">
        <p className="text-gray-700 leading-relaxed">
          This 12-week Qaida for Kids program is designed especially for young
          learners who are beginning their Qur’an reading journey. Through fun,
          interactive sessions, children will learn Arabic letters, basic vowel
          sounds, and simple Qur’anic words step by step. With patient teachers
          and friendly lessons, your child will develop correct pronunciation,
          confidence, and love for Qur’an reading using our Qaida method.
        </p>
      </Card>

      {/* ✅ Goals */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          <Bullet>Recognize and pronounce Arabic letters clearly.</Bullet>
          <Bullet>Learn basic Harakaat (vowels) properly.</Bullet>
          <Bullet>Read simple Arabic words confidently.</Bullet>
          <Bullet>Join letters smoothly and fluently.</Bullet>
          <Bullet>Pass final oral assessment & receive certificate.</Bullet>
        </ul>
      </Card>

      {/* ✅ Curriculum */}
      <Card id="service3" title="Curriculum Plan">
        {/* Mobile: Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {curriculum.map(([week, topic, desc], i) => (
            <div
              key={i}
              className="flex gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
            >
              <div className="bg-gray-50 p-2 rounded-lg h-fit">
                <CheckCircle className="w-5 h-5 text-[#15803D]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{week}</p>
                <p className="text-gray-700">{topic}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop/Tablet: Table */}
        <div className="hidden md:block overflow-x-auto rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
          <table className="min-w-[700px] w-full text-center border-collapse bg-white">
            <thead>
              <tr className="bg-[#4CAF50] text-white">
                <th className="p-3 font-bold">Week</th>
                <th className="p-3 font-bold">Topic</th>
                <th className="p-3 font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              {curriculum.map(([week, topic, desc], i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 font-semibold text-gray-800">{week}</td>
                  <td className="p-3 text-gray-700">{topic}</td>
                  <td className="p-3 text-gray-600">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* ✅ Outcome */}
      <Card id="service4" title="Outcome">
        <ul className="space-y-3">
          <Bullet>Know all Arabic letters confidently.</Bullet>
          <Bullet>Read short Qur’anic words smoothly.</Bullet>
          <Bullet>Understand vowel and joining rules.</Bullet>
          <Bullet>Ready to start Qur’an Recitation.</Bullet>
        </ul>
      </Card>

      {/* ✅ For Parents */}
      <Card id="service5" title="For Parents">
        <ul className="space-y-3">
          <Bullet>Weekly progress reports</Bullet>
          <Bullet>Patient, friendly teachers</Bullet>
          <Bullet>Build confidence & fluency</Bullet>
          <Bullet>Lifelong Qur’an connection</Bullet>
        </ul>
      </Card>

      {/* ✅ Teaching Format */}
      <Card id="service6" title="Teaching Format">
        <ul className="space-y-3">
          <Bullet>One-to-one live classes</Bullet>
          <Bullet>Zoom / Meet based lessons</Bullet>
          <Bullet>Weekly reports for parents</Bullet>
          <Bullet>Worksheets + Recitation Practice</Bullet>
        </ul>
      </Card>
    </>
  );
};

export default BasicQaidaForKids;
