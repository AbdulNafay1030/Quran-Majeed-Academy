"use client";

import React, { useMemo, useState } from "react";
import MainLayout from "./Layout/MainLayout";
import coursesData from "../Data/courses.json";

const TRIAL_API_URL = "https://qmaonline.com/checkout/trial_submit.php";

const Trial = () => {
  /* =========================
     Normalize courses.json
  ========================== */
  const courses = useMemo(() => {
    const raw = coursesData;
    const list = Array.isArray(raw)
      ? raw
      : Array.isArray(raw?.courses)
      ? raw.courses
      : Array.isArray(raw?.data)
      ? raw.data
      : [];

    return list.map((c, idx) => ({
      id: c?.id ?? idx + 1,
      title: c?.title ?? c?.name ?? c?.courseName ?? `Course ${idx + 1}`,
    }));
  }, []);

  /* =========================
     Form state
  ========================== */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    course: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // popup
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  const setField = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setStatus("");
  };

  /* =========================
     Validation
  ========================== */
  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.preferredTime) e.preferredTime = "Preferred time is required";
    if (!form.course) e.course = "Please select a course";
    return e;
  }, [form]);

  const submit = async (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      preferredTime: true,
      course: true,
    });

    if (Object.keys(errors).length) {
      setStatus("Please fix the errors below.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      const res = await fetch(TRIAL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setStatus(data?.message || "Something went wrong. Please try again.");
        return;
      }

      // ✅ success
      setStatus("Your trial request has been submitted successfully!");
      setShowPopup(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        preferredTime: "",
        course: "",
        message: "",
      });
      setTouched({});
    } catch (err) {
      setStatus("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="trial-wrap">
        <div className="trial-card">
          <h2>
            Book a <span>Free Trial</span>
          </h2>
          <p className="subtitle">
            Select your course and preferred time — we’ll take care of the rest.
          </p>

          <form onSubmit={submit}>
            {/* Name */}
            <div className="field">
              <label>Full Name *</label>
              <input
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, name: true }))}
              />
              {touched.name && errors.name && <small>{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="field">
              <label>Email *</label>
              <input
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              />
              {touched.email && errors.email && <small>{errors.email}</small>}
            </div>

            {/* Phone */}
            <div className="field">
              <label>Phone *</label>
              <input
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
              />
              {touched.phone && errors.phone && <small>{errors.phone}</small>}
            </div>

            {/* Preferred Time */}
            <div className="field">
              <label>Preferred Time *</label>
              <select
                value={form.preferredTime}
                onChange={(e) => setField("preferredTime", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, preferredTime: true }))}
              >
                <option value="">Select time</option>
                <option value="Morning">Morning (6am – 11am)</option>
                <option value="Afternoon">Afternoon (12pm – 4pm)</option>
                <option value="Evening">Evening (5pm – 9pm)</option>
                <option value="Late Night">Late Night (10pm – 1am)</option>
              </select>
              {touched.preferredTime && errors.preferredTime && (
                <small>{errors.preferredTime}</small>
              )}
            </div>

            {/* Course */}
            <div className="field">
              <label>Select Course *</label>
              <select
                value={form.course}
                onChange={(e) => setField("course", e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, course: true }))}
              >
                <option value="">Choose a course</option>
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
              {touched.course && errors.course && <small>{errors.course}</small>}
            </div>

            {/* Message */}
            <div className="field">
              <label>Message (optional)</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
              />
            </div>

            {status && <div className="status">{status}</div>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Trial Request"}
            </button>
          </form>
        </div>

        {/* ✅ POPUP */}
        {showPopup && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <h3>✅ Submitted Successfully</h3>
              <p>
                Your form has been submitted. Our team will contact you shortly.
              </p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        )}

        <style>{`
          .trial-wrap{
            padding:80px 16px;
            background:#f5f7fa;
            display:flex;
            justify-content:center;
          }
          .trial-card{
            width:100%;
            max-width:600px;
            background:#fff;
            border-radius:16px;
            padding:32px;
            box-shadow:0 10px 30px rgba(0,0,0,.08);
          }
          h2{ font-size:34px; margin-bottom:8px; }
          h2 span{ color:#26a96c; }
          .subtitle{ color:#555; margin-bottom:24px; }
          form{ display:grid; gap:16px; }
          .field label{
            font-size:14px;
            font-weight:700;
            display:block;
            margin-bottom:6px;
          }
          input, select, textarea{
            width:100%;
            padding:12px;
            border-radius:10px;
            border:1px solid #ddd;
            font-size:14px;
          }
          input:focus, select:focus, textarea:focus{
            outline:none;
            border-color:#26a96c;
            box-shadow:0 0 0 3px rgba(38,169,108,.15);
          }
          small{
            color:#d32f2f;
            font-weight:600;
            margin-top:4px;
            display:block;
          }
          .submit-btn{
            margin-top:12px;
            background:#15803D;
            color:#fff;
            border:none;
            padding:14px;
            border-radius:30px;
            font-size:16px;
            font-weight:700;
            cursor:pointer;
          }
          .submit-btn:hover{ opacity:.9; }
          .submit-btn:disabled{ opacity:.6; cursor:not-allowed; }
          .status{
            background:#e9f7ef;
            padding:12px;
            border-radius:10px;
            color:#107962;
            font-weight:700;
            text-align:center;
          }

          /* Popup */
          .popup-overlay{
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.55);
            display:flex;
            align-items:center;
            justify-content:center;
            z-index:9999;
            padding:16px;
          }
          .popup{
            width:100%;
            max-width:420px;
            background:#fff;
            border-radius:14px;
            padding:20px;
            box-shadow:0 10px 30px rgba(0,0,0,.2);
            text-align:center;
          }
          .popup h3{ margin:0 0 10px; font-size:20px; }
          .popup p{ margin:0 0 16px; color:#444; }
          .popup button{
            background:#15803D;
            color:#fff;
            border:none;
            padding:10px 18px;
            border-radius:10px;
            cursor:pointer;
            font-weight:700;
          }

          @media(max-width:600px){
            .trial-card{ padding:24px; }
            h2{ font-size:28px; }
          }
        `}</style>
      </section>
    </MainLayout>
  );
};

export default Trial;
