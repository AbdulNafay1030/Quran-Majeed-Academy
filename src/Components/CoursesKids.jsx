import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";

const CoursesKids = () => {
  const courses = [
    { id: 1, title: "Basic Qaida" },
    { id: 2, title: "Quran Recitation" },
    { id: 3, title: "Hifz Surah's Plan" },
    { id: 4, title: "Hifz Complete Quran" },
    { id: 5, title: "Tajweed Mystery" },
  ];

  return (
    <MainLayout>
      <section className="bg-[#ffffff]  py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">

          {/* Page Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
            Courses for Kids
          </h1>

          <p className="text-[#000000] max-w-2xl mx-auto mb-12">
            Structured Quran learning programs for adults to deepen
            understanding, Tajweed, and Tafseer.
          </p>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-[#fffff] border border-[#15803D]/20
                           rounded-xl p-6 text-[#000000]
                           hover:border-[#15803D]
                           hover:-translate-y-1 transition
                           shadow-lg flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {course.title}
                </h3>

                <span className="text-sm text-[#15803D] mt-auto">
                  View Course →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default CoursesKids;
