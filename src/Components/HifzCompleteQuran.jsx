import React, { useMemo } from "react";
import { CheckCircle, Clock } from "lucide-react";

const HifzCompleteQuran = () => {
  const classDurations = useMemo(
    () => [
      { label: "Last 2 Juz", value: "30 minutes" },
      { label: "28th–19th Juz", value: "45 minutes" },
      { label: "18th–1st Juz", value: "60 minutes" },
    ],
    []
  );

  const stages = useMemo(
    () => [
      {
        title: "🌱 Stage 1: Foundation & Early Juz",
        subtitle: "(Months 1–10)",
        note: "Goal: Build fluency, Tajweed strength, and memorization rhythm.",
        steps: [
          { step: "Step 1", duration: "Months 1–2", focus: "Tajweed, Fluency & Juz 30" },
          { step: "Step 2", duration: "Months 3–4", focus: "Juz 29" },
          { step: "Step 3", duration: "Months 5–6", focus: "Juz 28–27" },
          { step: "Step 4", duration: "Months 7–8", focus: "Juz 26–25" },
          { step: "Step 5", duration: "Months 9–10", focus: "Juz 24–23" },
        ],
      },
      {
        title: "🌿 Stage 2: Growth & Stability",
        subtitle: "(Months 11–20)",
        note: "Goal: Expand memorization capacity with accuracy and deep understanding.",
        steps: [
          { step: "Step 6", duration: "Months 11–12", focus: "Juz 22–21" },
          { step: "Step 7", duration: "Months 13–14", focus: "Juz 20–19" },
          { step: "Step 8", duration: "Months 15–16", focus: "Juz 18–17" },
          { step: "Step 9", duration: "Months 17–18", focus: "Juz 16–14.5" },
          { step: "Step 10", duration: "Months 19–20", focus: "Juz 14.5–12" },
        ],
      },
      {
        title: "🕊️ Stage 3: Mastery & Completion",
        subtitle: "(Months 21–30)",
        note: "Goal: Complete the Qur’an with mastery, confidence, and strong long-term retention.",
        steps: [
          { step: "Step 11", duration: "Months 21–22", focus: "Juz 11–9.5" },
          { step: "Step 12", duration: "Months 23–24", focus: "Juz 9.5–7" },
          { step: "Step 13", duration: "Months 25–26", focus: "Juz 6–3" },
          { step: "Step 14", duration: "Months 27–28", focus: "Juz 3–1" },
          { step: "Step 15", duration: "Months 29–30", focus: "Revision Test & Certification" },
        ],
      },
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

  const InfoCard = ({ title, children }) => (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <h4 className="font-bold text-[#15803D] mb-2">{title}</h4>
      {children}
    </div>
  );

  return (
    <>
      {/* ✅ Overview */}
      <Card id="service1" title="Complete Quran Memorization Course (30-Month Plan) — Overview">
        <p className="text-gray-700 leading-relaxed">
          This 2.5-year program is designed for students who already have basic Tajweed knowledge,
          accurate pronunciation, and fluent recitation. The course provides a gradual, disciplined,
          and spiritually fulfilling journey toward memorizing the entire Qur’an with perfection.
        </p>
      </Card>

      {/* ✅ Class Details */}
      <Card id="service2" title="Weekly Schedule & Class Details">
        <div className="grid grid-cols-1 gap-4">
          <InfoCard title="📅 Weekly Schedule">
            <p className="text-gray-700">5 days per week <b>(Monday – Friday)</b></p>
          </InfoCard>

          <InfoCard title="⏱️ Class Duration">
            <ul className="space-y-2">
              {classDurations.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-[#15803D] mt-0.5 shrink-0" />
                  <span>
                    <b>{d.label}:</b> {d.value}
                  </span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard title="🏠 Home Practice">
            <p className="text-gray-700">
              <b>Duration:</b> 60–120 minutes daily (new lesson + revision)
            </p>
          </InfoCard>

          <InfoCard title="📖 Daily Routine">
            <p className="text-gray-700">
              Each day includes <b>new portion</b> + <b>old memorized recitation</b> (both required for progress).
            </p>
          </InfoCard>
        </div>
      </Card>

      {/* ✅ Goals */}
      <Card id="service3" title="Course Goals">
        <ul className="space-y-3">
          <Bullet>Memorize the entire Qur’an with accurate Tajweed and clear pronunciation.</Bullet>
          <Bullet>Strengthen retention through consistent daily revision and teacher supervision.</Bullet>
          <Bullet>Develop fluency and discipline with a structured 5-day weekly schedule.</Bullet>
          <Bullet>Build a deep spiritual bond with the Qur’an through reflection and practice.</Bullet>
        </ul>
      </Card>

      {/* ✅ 30 Month Plan */}
      <Card id="service4" title="30-Month Learning Plan">
        <div className="space-y-10">
          {stages.map((stage, idx) => (
            <div key={idx}>
              <div className="text-center mb-5">
                <h4 className="text-[#15803D] font-extrabold text-lg md:text-xl">
                  {stage.title} <span className="font-semibold text-gray-600">{stage.subtitle}</span>
                </h4>
                <p className="text-gray-600 mt-2">{stage.note}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stage.steps.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                  >
                    <h5 className="font-bold text-gray-800">{s.step}</h5>
                    <p className="text-gray-700 mt-2">
                      <b>Duration:</b> {s.duration}
                    </p>
                    <p className="text-gray-600 mt-1">
                      <b>Focus:</b> {s.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* ✅ Teaching Approach */}
      <Card id="service5" title="Teaching Approach">
        <ul className="space-y-3">
          <Bullet>One-to-one online Hifz sessions with certified Huffaz</Bullet>
          <Bullet>Continuous review of new + old portions daily</Bullet>
          <Bullet>Weekly memorization tests and progress tracking</Bullet>
          <Bullet>Focus on Tajweed perfection, retention, and fluency</Bullet>
          <Bullet>Monthly report + evaluation feedback</Bullet>
        </ul>
      </Card>

      {/* ✅ Outcome */}
      <Card id="service6" title="Outcome">
        <p className="text-gray-700 mb-4">By the end of 30 months, students will:</p>
        <ul className="space-y-3">
          <Bullet>Memorize the entire Quran with accuracy and fluency</Bullet>
          <Bullet>Establish a strong revision habit for lifelong retention</Bullet>
          <Bullet>Perfect Tajweed and develop natural recitation rhythm</Bullet>
          <Bullet>Build a deep emotional and spiritual relationship with the Quran</Bullet>
        </ul>
      </Card>

      {/* ✅ For Parents */}
      <Card id="service7" title="For Parents">
        <ul className="space-y-3">
          <Bullet>Receive regular memorization progress reports.</Bullet>
          <Bullet>Teachers provide gentle correction and positive encouragement.</Bullet>
          <Bullet>Supervise and motivate your child’s home practice daily (60–120 minutes).</Bullet>
        </ul>
      </Card>
    </>
  );
};

export default HifzCompleteQuran;
