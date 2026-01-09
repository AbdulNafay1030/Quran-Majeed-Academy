"use client";

import React, { useEffect, useMemo, useState } from "react";
import MainLayout from "./Layout/MainLayout";
import "../assets/PremiumMembership.scss";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import BookOpenIcon from "@mui/icons-material/MenuBook";

/* ==========================
  PLANS (4 + 4)
========================== */
const INDIVIDUAL_PLANS_META = [
  { id: 1, title: "2 Days / Week", classes: 8, duration: 30 },
  { id: 2, title: "3 Days / Week", classes: 12, duration: 30 },
  { id: 3, title: "5 Days / Week", classes: 20, duration: 30, popular: true },
  { id: 4, title: "Hifz Plan", classes: 20, duration: 60 },
];

const SADAQAH_PLANS_META = [
  { id: 1, title: "Sponsor 1 Student" },
  { id: 2, title: "Sponsor 3 Students", popular: true },
  { id: 3, title: "Sponsor 5 Students" },
  { id: 4, title: "Sponsor a Class (Complete)" },
];

/* ==========================
  PRICING (YOUR DATA)
  Keys: USD, GB, AU, SA
========================== */
const pricingData = {
  USD: [
    { monthly: 45, yearly: 450, originalMonthly: 55, originalYearly: 550 },
    { monthly: 65, yearly: 650, originalMonthly: 80, originalYearly: 800 },
    { monthly: 99, yearly: 990, originalMonthly: 120, originalYearly: 1300 },
    { monthly: 150, yearly: 1500, originalMonthly: 180, originalYearly: 1750 },
  ],
  GB: [
    { monthly: 25, yearly: 250, originalMonthly: 30, originalYearly: 280 },
    { monthly: 40, yearly: 400, originalMonthly: 45, originalYearly: 450 },
    { monthly: 60, yearly: 600, originalMonthly: 70, originalYearly: 650 },
    { monthly: 90, yearly: 900, originalMonthly: 100, originalYearly: 1000 },
  ],
  AU: [
    { monthly: 50, yearly: 500, originalMonthly: 70, originalYearly: 720 },
    { monthly: 75, yearly: 700, originalMonthly: 90, originalYearly: 840 },
    { monthly: 110, yearly: 1100, originalMonthly: 150, originalYearly: 1600 },
    { monthly: 170, yearly: 1700, originalMonthly: 200, originalYearly: 1940 },
  ],
  SA: [
    { monthly: 140, yearly: 1400, originalMonthly: 160, originalYearly: 1800 },
    { monthly: 200, yearly: 2000, originalMonthly: 230, originalYearly: 2500 },
    { monthly: 300, yearly: 3000, originalMonthly: 350, originalYearly: 3800 },
    { monthly: 450, yearly: 4500, originalMonthly: 500, originalYearly: 5200 },
  ],
};

const sadaqahPricingData = {
  USD: [
    { monthly: 80, yearly: 800, originalMonthly: 100, originalYearly: 960 },
    { monthly: 200, yearly: 2000, originalMonthly: 240, originalYearly: 2400 },
    { monthly: 300, yearly: 3000, originalMonthly: 400, originalYearly: 3600 },
    { monthly: 400, yearly: 4000, originalMonthly: 500, originalYearly: 4800 },
  ],
  AU: [
    { monthly: 100, yearly: 1000, originalMonthly: 75, originalYearly: 720 },
    { monthly: 250, yearly: 2500, originalMonthly: 100, originalYearly: 960 },
    { monthly: 400, yearly: 4000, originalMonthly: 160, originalYearly: 1500 },
    { monthly: 500, yearly: 5000, originalMonthly: 220, originalYearly: 2100 },
  ],
  SA: [
    { monthly: 250, yearly: 2500, originalMonthly: 190, originalYearly: 2000 },
    { monthly: 600, yearly: 6000, originalMonthly: 270, originalYearly: 2800 },
    { monthly: 900, yearly: 9000, originalMonthly: 380, originalYearly: 3600 },
    { monthly: 1200, yearly: 12000, originalMonthly: 560, originalYearly: 5400 },
  ],
  GB: [
    { monthly: 50, yearly: 500, originalMonthly: 35, originalYearly: 600 },
    { monthly: 130, yearly: 1300, originalMonthly: 55, originalYearly: 1560 },
    { monthly: 200, yearly: 2000, originalMonthly: 320, originalYearly: 2400 },
    { monthly: 250, yearly: 2500, originalMonthly: 350, originalYearly: 3000 },
  ],
};

const currencyLabel = {
  USD: "USD",
  GB: "GBP",
  AU: "AUD",
  SA: "SAR",
};

/* ==========================
  HELPERS
========================== */
const getPricingKeyFromIpapi = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const cc = (data?.country_code || "US").toUpperCase();
    const map = { US: "USD", GB: "GB", AU: "AU", SA: "SA" };
    return map[cc] || "USD";
  } catch {
    return "USD";
  }
};

const calcSavePercent = (original, actual) => {
  if (!original || !actual) return "0";
  const save = ((original - actual) / original) * 100;
  return save > 0 ? Math.round(save).toString() : "0";
};

const FeePlans = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [pricingKey, setPricingKey] = useState("USD");

  const [yearlyIndividual, setYearlyIndividual] = useState(false);
  const [yearlySadaqah, setYearlySadaqah] = useState(false);

  const [selectedIndividualId, setSelectedIndividualId] = useState(3);
  const [selectedSadaqahId, setSelectedSadaqahId] = useState(2);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    (async () => {
      const key = await getPricingKeyFromIpapi();
      setPricingKey(key);
    })();
  }, []);

  const currencyText = currencyLabel[pricingKey] || "USD";

  const individualPlans = useMemo(() => {
    const prices = pricingData[pricingKey] || pricingData.USD;
    return INDIVIDUAL_PLANS_META.map((m, idx) => ({ ...m, ...(prices[idx] || {}) }));
  }, [pricingKey]);

  const sadaqahPlans = useMemo(() => {
    const prices = sadaqahPricingData[pricingKey] || sadaqahPricingData.USD;
    return SADAQAH_PLANS_META.map((m, idx) => ({ ...m, ...(prices[idx] || {}) }));
  }, [pricingKey]);

  const selectedIndividual = useMemo(
    () => individualPlans.find((p) => p.id === selectedIndividualId) || individualPlans[2],
    [individualPlans, selectedIndividualId]
  );

  /* ==========================
    ✅ PHP CHECKOUT URL (XAMPP MAC)
    Put your folder in:
    /Applications/XAMPP/htdocs/qma/checkout/checkout.php
  ========================== */
const PHP_CHECKOUT_URL = "https://qmaonline.com/checkout/checkout.php";

  /* ✅ IMPORTANT:
     We DO NOT send price from React (security).
     PHP will calculate price from pricing.php by (plan + cycle + currency).
  */
  const goToCheckout = ({ plan, isYearly, section }) => {
    const cycle = isYearly ? "yearly" : "monthly";

    const params = new URLSearchParams({
      plan: plan.title,        // must match pricing.php keys exactly
      cycle,                  // monthly/yearly
      currency: currencyText, // USD/GBP/AUD/SAR
      section,                // individual/sadaqah (optional)
    });

    window.location.href = `${PHP_CHECKOUT_URL}?${params.toString()}`;
  };

  const handleIndividualCheckout = (plan) =>
    goToCheckout({ plan, isYearly: yearlyIndividual, section: "individual" });

  const handleSadaqahCheckout = (plan) =>
    goToCheckout({ plan, isYearly: yearlySadaqah, section: "sadaqah" });

  const BillingToggle = ({ value, onChange }) => (
    <div className="fee-toggle">
      <span className={!value ? "active-label" : ""}>Monthly</span>
      <button
        type="button"
        aria-label="toggle billing"
        onClick={() => onChange(!value)}
        className="fee-switch"
      >
        <span className={`fee-knob ${value ? "on" : ""}`} />
      </button>
      <span className={value ? "active-label" : ""}>Yearly</span>
    </div>
  );

  const PricingCard = ({ plan, isYearly, isSadaqah = false, onCheckout }) => {
    const amount = isYearly ? plan.yearly : plan.monthly;

    const showSave = !isSadaqah && isYearly;
    const showOriginal = !isSadaqah && isYearly;

    const original = isYearly ? plan.originalYearly : plan.originalMonthly;
    const savePercent = calcSavePercent(original, amount);

    return (
      <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
        {plan.popular && (
          <div className="discount-banner">{isSadaqah ? "MOST IMPACTFUL" : "MOST POPULAR"}</div>
        )}

        <div className="card-content">
          <h2 className="plan-name">
            {plan.title}
            {!isSadaqah && plan.duration === 60 ? <span className="green-text"> (60 min)</span> : null}
          </h2>

          {showSave ? (
            <div className="save-tag">SAVE {savePercent}%</div>
          ) : (
            <div className="save-tag" style={{ visibility: "hidden" }}>
              SAVE 0%
            </div>
          )}

<div className="price-container">
  <span className="dollar-sign">{currencyText}</span>

  <span className={`price-amount ${plan.popular ? "green-price" : ""}`}>
    {amount}
  </span>

  <span className="price-period">/{isYearly ? "yr" : "mo"}</span>
</div>

{/* show original ONLY for individual yearly */}
{!isSadaqah && isYearly && (
  <div className="original-price-container">
    <span className="original-price">
      {currencyText}
      {plan.originalYearly}
    </span>
    <span className="price-period">/yr</span>
  </div>
)}


          <p className="billing-info">
            {isSadaqah ? "Continuous Sadaqah Jariyah" : "One-on-One Quran Learning"}
          </p>

          <button
            type="button"
            className={plan.popular ? "special-deal-button" : "select-plan-button"}
            onClick={() => onCheckout(plan)}
          >
            {isSadaqah ? "Sponsor Now" : plan.popular ? "Select Popular Plan" : "Select Plan"}
          </button>

          <div className="plan-features">
            {!isSadaqah ? (
              <>
                <div className="feature-item">
                  <BookOpenIcon className="feature-icon" />
                  <p>{plan.classes} Classes Monthly</p>
                </div>
                <p className="guarantee-text">Each session: {plan.duration} minutes</p>

                {plan.popular && (
                  <div className="popular-badge">
                    <LocalFireDepartmentIcon className="fire-icon" />
                    <p>MOST POPULAR</p>
                  </div>
                )}
              </>
            ) : (
              <div style={{ height: 72 }} />
            )}
          </div>
        </div>
      </div>
    );
  };

  const MobilePicker = ({
    title,
    subtitle,
    isYearly,
    onToggle,
    plans,
    selectedId,
    setSelectedId,
    onCheckout,
    showFeatures = false,
    selectedSummary,
  }) => (
    <div className="mobile-premium-membershipp">
      <h1 className="mobile-title">
        {title} <span className="green-text-mobile">– Explore Our Plans</span>
      </h1>

      <p className="mobile-subtitle">
        {subtitle} <span className="green-text-mobile-subtitle">less than a cup of coffee</span>
      </p>

      {showFeatures && selectedSummary && (
        <div className="mobile-features">
          <div className="mobile-feature-item">
            <CheckIcon className="mobile-check-icon" />
            <p>{selectedSummary.duration} min per class</p>
          </div>
          <div className="mobile-feature-item">
            <CheckIcon className="mobile-check-icon" />
            <p>{selectedSummary.classes} classes per Month</p>
          </div>
          <div className="mobile-feature-item">
            <CheckIcon className="mobile-check-icon" />
            <p>24/7 Availability</p>
          </div>
          <div className="mobile-feature-item">
            <CheckIcon className="mobile-check-icon" />
            <p>One-To-One Session</p>
          </div>
        </div>
      )}

      <BillingToggle value={isYearly} onChange={onToggle} />

      <div className="mobile-pricing-options">
        {plans.map((plan) => {
          const amount = isYearly ? plan.yearly : plan.monthly;

          return (
            <div
              key={plan.id}
              className={`mobile-pricing-option ${plan.popular ? "popular" : ""} ${
                selectedId === plan.id ? "selected" : ""
              }`}
              onClick={() => setSelectedId(plan.id)}
              role="button"
              tabIndex={0}
            >
              <div className="mobile-option-left">
                {selectedId === plan.id ? (
                  <RadioButtonCheckedIcon className="mobile-radio-icon selected" />
                ) : (
                  <RadioButtonUncheckedIcon className="mobile-radio-icon" />
                )}

                <div className="mobile-plan-info">
                  <span className="mobile-plan-name">{plan.title}</span>
                  {plan.popular && <span className="mobile-popular-tag">Most Popular</span>}
                </div>
              </div>

              <div className="mobile-price-container">
                <span className="mobile-plan-price">
                  {currencyText}
                  {amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mobile-action-buttons">
        <button
          className="mobile-subscribe-button"
          onClick={() => {
            const plan = plans.find((p) => p.id === selectedId);
            if (plan) onCheckout(plan);
          }}
        >
          {showFeatures ? "Enroll Now" : "Sponsor Now"}
        </button>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <section className="feeplans-wrap">
        <div className="feeplans-container">
          {/* ========== INDIVIDUAL ========== */}
          {!isMobile ? (
            <div className="fee-section">
              <h2 className="fee-title">Individual Quran Learning Plans</h2>
              <p className="fee-subtitle">
                Stay connected every day for{" "}
                <span className="green-text">less than the cost of your daily coffee</span>
              </p>

              <BillingToggle value={yearlyIndividual} onChange={setYearlyIndividual} />

              <div className="pricing-container">
                <div className="pricing-cards-wrapper">
                  {individualPlans.map((plan) => (
                    <PricingCard
                      key={plan.id}
                      plan={plan}
                      isYearly={yearlyIndividual}
                      isSadaqah={false}
                      onCheckout={handleIndividualCheckout}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <MobilePicker
              title="Start Your Quran Journey"
              subtitle="Stay connected with the Quran daily for"
              isYearly={yearlyIndividual}
              onToggle={setYearlyIndividual}
              plans={individualPlans}
              selectedId={selectedIndividualId}
              setSelectedId={setSelectedIndividualId}
              onCheckout={handleIndividualCheckout}
              showFeatures
              selectedSummary={selectedIndividual}
            />
          )}

          {/* ========== SADAQAH ========== */}
          {!isMobile ? (
            <div className="fee-section">
              <h2 className="fee-title">Sadaqah Jariyah</h2>
              <p className="fee-subtitle">
                Sponsor Quran education and earn continuous reward{" "}
                <span className="green-text">for generations</span>
              </p>

              <BillingToggle value={yearlySadaqah} onChange={setYearlySadaqah} />

              <div className="pricing-container">
                <div className="pricing-cards-wrapper">
                  {sadaqahPlans.map((plan) => (
                    <PricingCard
                      key={plan.id}
                      plan={plan}
                      isYearly={yearlySadaqah}
                      isSadaqah={true}
                      onCheckout={handleSadaqahCheckout}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <MobilePicker
              title="Sadaqah Jariyah"
              subtitle="Sponsor Quran learning for"
              isYearly={yearlySadaqah}
              onToggle={setYearlySadaqah}
              plans={sadaqahPlans}
              selectedId={selectedSadaqahId}
              setSelectedId={setSelectedSadaqahId}
              onCheckout={handleSadaqahCheckout}
              showFeatures={false}
            />
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default FeePlans;
