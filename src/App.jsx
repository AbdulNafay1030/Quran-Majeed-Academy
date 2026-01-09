import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Components/Layout/Home";
import AboutUs from "./Components/About us/AboutUs";
import ContactUs from "./Components/Contact Us/Contact";
import Courses from "./Components/Our Courses/Courses";
import CourseDetail from "./Components/Our Courses/CourseDetail";
import PrayerTimes from "./Components/Prayer/PrayerTimes";
import Quiz from "./Components/Quizes/Quiz";

import CoursesKids from "./Components/CoursesKids";
import CoursesAdults from "./Components/CoursesAdults";
import FeePlans from "./Components/FeePlans";
import Testimonials from "./Components/Testimonials";
import Trial from "./Components/Trial";
import ScrollToTop from "./Components/ScrollToTop";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  
  { path: "/about-us", element: <AboutUs /> },

  { path: "/FeePlans", element: <FeePlans /> },
  { path: "/Testimonials", element: <Testimonials /> },

  // ✅ ADD THIS
  { path: "/trial", element: <Trial /> },

  { path: "/courses", element: <Courses /> },
  { path: "/courses/kids", element: <CoursesKids /> },
  { path: "/courses/adults", element: <CoursesAdults /> },
  { path: "/courses/:id", element: <CourseDetail /> },

  { path: "/contact-us", element: <ContactUs /> },
  { path: "/prayer-times", element: <PrayerTimes /> },
  { path: "/quizzes", element: <Quiz /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
