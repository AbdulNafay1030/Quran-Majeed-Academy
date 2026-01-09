import React, { useMemo } from "react";
import { CheckCircle } from "lucide-react";

const QuranRevision = () => {
  const goals = useMemo(
    () => [
      "Strengthen and stabilize weak or forgotten memorization.",
      "Build fluency and accuracy in Qur’an recitation.",
      "Develop a consistent and balanced revision habit.",
      "Prepare for fluent Taraweeh or complete Qur’an recitation.",
    ],
    []
  );

  const homePractice = useMemo(
    () => [
      { title: "New Review", desc: "Recently learned portion" },
      { title: "Mid Review", desc: "Reinforcing recent past sections" },
      { title: "Long-Term Revision", desc: "Older memorized sections" },
    ],
    []
  );

  const assessment = useMemo(
    () => [
      "Each student will recite the entire Qur’an twice during Phase 5.",
      "A final oral and accuracy test will be conducted by senior teachers.",
      "Successful students will receive a Certificate of Qur’an Proficiency.",
    ],
    []
  );

  const outcome = useMemo(
    () => [
      "Fully solid and stable memorization of the entire Qur’an",
      "Attain strong fluency, accuracy, and confidence in recitation",
      "Develop a consistent self-revision habit",
      "Receive official certification upon successful completion",
    ],
    []
  );

  const planRows = useMemo(
    () => [
      ["Phase 1", "Juz 1–5", "¼ Juz new revision (sabaq) + ½ Juz old (manzil)", "30 minutes"],
      [
        "Phase 2",
        "Juz 6–10",
        "¼ Juz new (sabaq) + ¼ Juz previous (sabqi) + ½ Juz manzil",
        "45 minutes",
      ],
      ["Phase 3", "Juz 11–20", "¼ Juz new (sabaq) + ¼ Juz sabqi + 1 Juz manzil", "60 minutes"],
      [
        "Phase 4",
        "Juz 21–30",
        "¼ Juz new (sabaq) + ¼ Juz sabqi + 1¼ Juz manzil",
        "60 minutes",
      ],
      ["Phase 5", "Complete Qur’an", "Complete Qur’an twice + Final Evaluation & Certification", "Variable"],
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
      {/* ✅ service1: Overview */}
      <Card id="service1" title="Overview">
        <p className="text-gray-700 leading-relaxed">
          The <b>Qur’an Revision – Strengthening Memorization</b> course is a structured{" "}
          <b>6-month program</b> designed specifically for <b>Huffaaz</b> who wish to
          consolidate, stabilize, and restore their Qur’anic memorization. Through a carefully
          phased plan, students revisit previously memorized portions while reinforcing retention
          through guided practice, fluency building, and expert supervision.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>
            <b>Duration:</b> 6 Months
          </li>
          <li>
            <b>Schedule:</b> 5 Days/Week
          </li>
          <li>
            <b>For:</b> Huffaaz seeking to strengthen or restore their memorization
          </li>
        </ul>
      </Card>

      

      {/* ✅ service2: Goals */}
      <Card id="service2" title="Course Goals">
        <ul className="space-y-3">
          {goals.map((g, i) => (
            <Bullet key={i}>{g}</Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ service3: Course Plan */}
<Card id="service3" title="Course Plan">
  <p className="text-gray-500 text-center mb-6">
    Structured 5-phase plan ensuring complete revision and mastery of the Qur’an.
  </p>



  {/* Mobile cards */}
  <div className="grid grid-cols-1 gap-4 md:hidden">
    {planRows.map(([phase, range, structure, duration], i) => (
      <div
        key={i}
        className="bg-white rounded-xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-4"
      >
        <p className="font-extrabold text-gray-900">{phase}</p>
        <p className="text-gray-700 mt-1">
          <b>Juz Range:</b> {range}
        </p>
        <p className="text-gray-700 mt-1">
          <b>Daily Structure:</b> {structure}
        </p>
        <p className="text-gray-700 mt-1">
          <b>Class Duration:</b> {duration}
        </p>
      </div>
    ))}
  </div>

  {/* Desktop table (NO SCROLL) */}
  <div className="hidden md:block rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.06)]">
    <table className="w-full border-collapse bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 font-bold text-left w-[140px]">Phase</th>
          <th className="p-3 font-bold text-left w-[170px]">Juz Range</th>
          <th className="p-3 font-bold text-left">Daily Structure</th>
          <th className="p-3 font-bold text-left w-[170px]">Class Duration</th>
        </tr>
      </thead>

      <tbody>
        {planRows.map(([phase, range, structure, duration], i) => (
          <tr key={i} className="border-t align-top">
            <td className="p-3 font-semibold text-gray-800 whitespace-nowrap">
              {phase}
            </td>
            <td className="p-3 text-gray-700 whitespace-nowrap">
              {range}
            </td>
            <td className="p-3 text-gray-700">
              <p className="leading-relaxed break-words">{structure}</p>
            </td>
            <td className="p-3 text-gray-700 whitespace-nowrap">
              {duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Card>


      {/* ✅ service4: Home Practice */}
      <Card id="service4" title="Home Practice">
        <p className="text-gray-700">
          <b>Duration:</b> 60–120 minutes daily
        </p>
        <ul className="space-y-3 mt-4">
          {homePractice.map((x, i) => (
            <Bullet key={i}>
              <b>{x.title}:</b> {x.desc}
            </Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ service5: Assessment & Certification */}
      <Card id="service5" title="Final Assessment & Certification">
        <ul className="space-y-3">
          {assessment.map((a, i) => (
            <Bullet key={i}>{a}</Bullet>
          ))}
        </ul>
      </Card>

      {/* ✅ service6: Outcome */}
      <Card id="service6" title="Expected Outcome">
        <ul className="space-y-3">
          {outcome.map((o, i) => (
            <Bullet key={i}>{o}</Bullet>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default QuranRevision;
