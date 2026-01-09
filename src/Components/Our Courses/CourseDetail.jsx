import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import {
  BookOpen,
  Target,
  ListChecks,
  Award,
  Users,
  Presentation,
  CheckCircle,
} from "lucide-react";

import coursesData from "../../Data/courses.json";

// ✅ Course pages (content components)
import BasicQaidaForKids from "../BasicQaidaForKids";
import QuranRecitationForKids from "../QuranRecitationForKids";
import HifzSurahsPlan from "../HifzSurahsPlan";
import HifzCompleteQuran from "../HifzCompleteQuran";
import TajweedMystery from "../TajweedMystery";
import BasicIslamicKnowledge from "../BasicIslamicKnowledge";
import TafseerSurahsPlan from "../TafseerSurahsPlan";
import CompleteQuranTafseer from "../CompleteQuranTafseer";
import QuranRevision from "../QuranRevision";

const CourseDetail = () => {
  const { id } = useParams();
  const courseId = Number(id);

  // ✅ (Optional) show correct title/description from JSON
  const course = useMemo(() => {
    return coursesData.find((c) => c.id === courseId);
  }, [courseId]);

  // ✅ OPTION B: Course-wise sidebar labels
  const sectionsByCourseId = {
    1: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum Plan" },
      { id: "service4", label: "Outcome" },
      { id: "service5", label: "For Parents" },
      { id: "service6", label: "Teaching Format" },
    ],

    2: [
      { id: "service1", label: "Phase 01 Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum Plan" },
      { id: "service4", label: "Outcome" },
      { id: "service5", label: "Teaching Format" },
      { id: "service6", label: "Phase 02 Overview" },
      { id: "service7", label: "Outcome" },
    ],

    3: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Outcome" },
      { id: "service3", label: "Surahs Included" },
      { id: "service4", label: "Curriculum" },
      { id: "service5", label: "Class Routine" },
      { id: "service6", label: "Teaching Format" },
      { id: "service7", label: "For Parents" },
    ],

    4: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Class Details" },
      { id: "service3", label: "Goals" },
      { id: "service4", label: "Curriculum" },
      { id: "service5", label: "Teaching Approach" },
      { id: "service6", label: "Outcome" },
      { id: "service7", label: "For Parents" },
    ],

    5: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum Plan" },
      { id: "service4", label: "Highlights" },
      { id: "service5", label: "For Parents" },
    ],

    6: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum" },
      { id: "service4", label: "Course Duration" },
    ],

    7: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum Plan" },
      { id: "service4", label: "Outcome" },
      { id: "service5", label: "Teaching Format" },
    ],

    8: [
      { id: "service1", label: "Phase 01 Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum Plan" },
      { id: "service4", label: "Outcome" },
      { id: "service5", label: "Teaching Format" },
      { id: "service6", label: "Phase 02 Overview" },
      { id: "service7", label: "Outcome" },
    ],

    9: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Surahs Covered" },
      { id: "service4", label: "Curriculum" },
      { id: "service5", label: "Components" },
      { id: "service6", label: "Outcomes" },
      { id: "service7", label: "Certification" },
    ],

    10: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum" },
      { id: "service4", label: "Methodology" },
      { id: "service5", label: "Outcome" },
    ],

    11: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Outcome" },
      { id: "service3", label: "Surahs Included" },
      { id: "service4", label: "Curriculum" },
      { id: "service5", label: "Class Routine" },
      { id: "service6", label: "Teaching Format" },
    ],

    12: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Class Details" },
      { id: "service3", label: "Goals" },
      { id: "service4", label: "Curriculum" },
      { id: "service5", label: "Teaching Approach" },
      { id: "service6", label: "Outcome" },
    ],

    13: [
      { id: "service1", label: "Overview" },
      { id: "service2", label: "Goals" },
      { id: "service3", label: "Curriculum" },
      { id: "service4", label: "Home Practice" },
      { id: "service5", label: "Assessment & Certification" },
      { id: "service6", label: "Outcome" },
    ],
  };

  const defaultSections = [
    { id: "service1", label: "Overview" },
    { id: "service2", label: "Goals" },
    { id: "service3", label: "Curriculum" },
    { id: "service4", label: "Outcome" },
  ];

  // ✅ Auto icons (based on index)
  const iconByIndex = [
    <BookOpen className="w-5 h-5" />,
    <Target className="w-5 h-5" />,
    <ListChecks className="w-5 h-5" />,
    <Award className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <Presentation className="w-5 h-5" />,
    <CheckCircle className="w-5 h-5" />,
  ];

  // ✅ FINAL sections used in sidebar + scroll spy
  const sections = useMemo(() => {
    const list = sectionsByCourseId[courseId] || defaultSections;

    return list.map((s, idx) => ({
      ...s,
      icon: iconByIndex[idx] || <BookOpen className="w-5 h-5" />,
    }));
  }, [courseId]);

  const [activeId, setActiveId] = useState("service1");

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const offset = 100;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = () => {
      const offset = 120;
      let current = "service1";

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
          current = s.id;
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  // ✅ IMPORTANT: Decide which page content to show
  const renderCourseContent = () => {
    switch (courseId) {
      case 1:
      case 7:
        return <BasicQaidaForKids />;

      case 2:
      case 8:
        return <QuranRecitationForKids />;

      case 3:
      case 11:
        return <HifzSurahsPlan />;

      case 4:
      case 12:
        return <HifzCompleteQuran />;

      case 5:
        return <TajweedMystery />;

      case 6:
        return <BasicIslamicKnowledge />;

      case 9:
        return <TafseerSurahsPlan />;

      case 10:
        return <CompleteQuranTafseer />;

      case 13:
        return <QuranRevision />;

      default:
        return null;
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#ffffff] py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* ✅ Page header now dynamic */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              {course?.title || "Course Detail"}
            </h1>
            <p className="text-[#000000] text-lg">
              {course?.description || "Explore course details and curriculum."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div className="bg-white border border-[#15803D]/30 rounded-2xl p-5 shadow-lg sticky top-6">
                <ul className="space-y-3">
                  {sections.map((s) => {
                    const isActive = activeId === s.id;

                    return (
                      <li key={s.id}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(s.id)}
                          className={[
                            "w-full group flex items-center gap-3 text-left px-3 py-3 rounded-xl font-semibold transition",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D]/40",
                            isActive
                              ? "bg-[#15803D] text-white"
                              : "bg-transparent text-black",
                            "hover:bg-[#15803D] hover:text-white active:bg-[#15803D] active:text-white",
                          ].join(" ")}
                        >
                          <span
                            className={[
                              "transition-colors",
                              isActive
                                ? "text-white"
                                : "text-[#15803D] group-hover:text-white group-active:text-white",
                            ].join(" ")}
                          >
                            {s.icon}
                          </span>
                          {s.label}
                        </button>

                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="bg-gradient-to-br from-white to-[#f7fff7] rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.06)]">
                {/* ✅ Render correct course page JSX */}
                {renderCourseContent()}

                {/* CTA */}
                <div className="pt-4">
                  <div
                    className="bg-gradient-to-r from-white via-white to-white
                               rounded-2xl p-10 md:p-14 border border-[#15803D]/30
                               shadow-xl text-center"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                      Enroll Now – Limited Seats Available
                    </h2>
                    <p className="text-black text-lg mb-10">
                      Classes begin on the next available session.
                    </p>
                    <a
                      href="/contact-us"
                      className="inline-block bg-[#15803D] hover:bg-[#116c32]
                                 text-white font-semibold
                                 px-10 py-4 rounded-xl
                                 transition shadow-lg"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CourseDetail;
