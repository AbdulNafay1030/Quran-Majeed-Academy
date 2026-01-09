"use client";

import React, { useEffect, useMemo, useState } from "react";
import "../assets/PremiumMembership.scss";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import BookOpenIcon from "@mui/icons-material/MenuBook";

/* ==========================
  ✅ CLASSNAME MAP
  Change ONLY here if needed
========================== */
const cn = {
  wrap: "feeplans-wrap",
  container: "feeplans-container",

  section: "fee-section",
  title: "fee-title",
  subtitle: "fee-subtitle",
  greenText: "green-text",

  toggle: "fee-toggle",
  switch: "fee-switch",
  knob: "fee-knob",
  activeLabel: "active-label",

  pricingContainer: "pricing-container",
  cardsWrapper: "pricing-cards-wrapper",

  card: "pricing-card",
  popular: "popular",
  discountBanner: "discount-banner",
  cardContent: "card-content",
  planName: "plan-name",
  saveTag: "save-tag",

  priceContainer: "price-container",
  dollarSign: "dollar-sign",
  priceAmount: "price-amount",
  greenPrice: "green-price",
  pricePeriod: "price-period",

  originalPriceContainer: "original-price-container",
  originalPrice: "original-price",

  billingInfo: "billing-info",

  selectBtn: "select-plan-button",
  specialBtn: "special-deal-button",

  features: "plan-features",
  featureItem: "feature-item",
  featureIcon: "feature-icon",
  guarantee: "guarantee-text",
  badge: "popular-badge",
  fireIcon: "fire-icon",

  // mobile
  mobileWrap: "mobile-premium-membershipp",
  mobileTitle: "mobile-title",
  mobileSubtitle: "mobile-subtitle",
  greenTextMobile: "green-text-mobile",
  greenTextMobileSubtitle: "green-text-mobile-subtitle",

  mobileFeatures: "mobile-features",
  mobileFeatureItem: "mobile-feature-item",
  mobileCheckIcon: "mobile-check-icon",

  mobilePricingOptions: "mobile-pricing-options",
  mobileOption: "mobile-pricing-option",
  mobileSelected: "selected",
  mobilePopular: "popular",

  mobileOptionLeft: "mobile-option-left",
  mobileRadioIcon: "mobile-radio-icon",
  mobilePlanInfo: "mobile-plan-info",
  mobilePlanName: "mobile-plan-name",
  mobilePopularTag: "mobile-popular-tag",

  mobilePriceContainer: "mobile-price-container",
  mobilePlanPrice: "mobile-plan-price",

  mobileActionButtons: "mobile-action-buttons",
  mobileSubscribeBtn: "mobile-subscribe-button",
};

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
  PRICING
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

/* ==========================
  ✅ COMPONENT: PremiumPricing
========================== */
const PremiumPricing = () => {
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

  const PHP_CHECKOUT_URL = "https://qmaonline.com/checkout/checkout.php";

  const goToCheckout = ({ plan, isYearly, section }) => {
    const cycle = isYearly ? "yearly" : "monthly";
    const params = new URLSearchParams({
      plan: plan.title,
      cycle,
      currency: currencyText,
      section,
    });
    window.location.href = `${PHP_CHECKOUT_URL}?${params.toString()}`;
  };

  const BillingToggle = ({ value, onChange }) => (
    <div className={cn.toggle}>
      <span className={!value ? cn.activeLabel : ""}>Monthly</span>
      <button type="button" aria-label="toggle billing" onClick={() => onChange(!value)} className={cn.switch}>
        <span className={`${cn.knob} ${value ? "on" : ""}`} />
      </button>
      <span className={value ? cn.activeLabel : ""}>Yearly</span>
    </div>
  );

  const PricingCard = ({ plan, isYearly, isSadaqah = false, onCheckout }) => {
    const amount = isYearly ? plan.yearly : plan.monthly;

    // only show save/original for Individual Yearly
    const showSave = !isSadaqah && isYearly;
    const showOriginal = !isSadaqah && isYearly;

    const original = isYearly ? plan.originalYearly : plan.originalMonthly;
    const savePercent = calcSavePercent(original, amount);

    return (
      <div className={`${cn.card} ${plan.popular ? cn.popular : ""}`}>
        {plan.popular && (
          <div className={cn.discountBanner}>{isSadaqah ? "MOST IMPACTFUL" : "MOST POPULAR"}</div>
        )}

        <div className={cn.cardContent}>
          <h2 className={cn.planName}>
            {plan.title}
            {!isSadaqah && plan.duration === 60 ? <span className={cn.greenText}> (60 min)</span> : null}
          </h2>

          {showSave ? (
            <div className={cn.saveTag}>SAVE {savePercent}%</div>
          ) : (
            <div className={cn.saveTag} style={{ visibility: "hidden" }}>
              SAVE 0%
            </div>
          )}

          <div className={cn.priceContainer}>
            <span className={cn.dollarSign}>{currencyText}</span>
            <span className={`${cn.priceAmount} ${plan.popular ? cn.greenPrice : ""}`}>{amount}</span>
            <span className={cn.pricePeriod}>/{isYearly ? "yr" : "mo"}</span>
          </div>

          {showOriginal && (
            <div className={cn.originalPriceContainer}>
              <span className={cn.originalPrice}>
                {currencyText}
                {plan.originalYearly}
              </span>
              <span className={cn.pricePeriod}>/yr</span>
            </div>
          )}

          <p className={cn.billingInfo}>
            {isSadaqah ? "Continuous Sadaqah Jariyah" : "One-on-One Quran Learning"}
          </p>

          <button
            type="button"
            className={plan.popular ? cn.specialBtn : cn.selectBtn}
            onClick={() => onCheckout(plan)}
          >
            {isSadaqah ? "Sponsor Now" : plan.popular ? "Select Popular Plan" : "Select Plan"}
          </button>

          <div className={cn.features}>
            {!isSadaqah ? (
              <>
                <div className={cn.featureItem}>
                  <BookOpenIcon className={cn.featureIcon} />
                  <p>{plan.classes} Classes Monthly</p>
                </div>

                <p className={cn.guarantee}>Each session: {plan.duration} minutes</p>

                {plan.popular && (
                  <div className={cn.badge}>
                    <LocalFireDepartmentIcon className={cn.fireIcon} />
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
    <div className={cn.mobileWrap}>
      <h1 className={cn.mobileTitle}>
        {title} <span className={cn.greenTextMobile}>– Explore Our Plans</span>
      </h1>

      <p className={cn.mobileSubtitle}>
        {subtitle} <span className={cn.greenTextMobileSubtitle}>less than a cup of coffee</span>
      </p>

      {showFeatures && selectedSummary && (
        <div className={cn.mobileFeatures}>
          <div className={cn.mobileFeatureItem}>
            <CheckIcon className={cn.mobileCheckIcon} />
            <p>{selectedSummary.duration} min per class</p>
          </div>
          <div className={cn.mobileFeatureItem}>
            <CheckIcon className={cn.mobileCheckIcon} />
            <p>{selectedSummary.classes} classes per Month</p>
          </div>
          <div className={cn.mobileFeatureItem}>
            <CheckIcon className={cn.mobileCheckIcon} />
            <p>24/7 Availability</p>
          </div>
          <div className={cn.mobileFeatureItem}>
            <CheckIcon className={cn.mobileCheckIcon} />
            <p>One-To-One Session</p>
          </div>
        </div>
      )}

      <BillingToggle value={isYearly} onChange={onToggle} />

      <div className={cn.mobilePricingOptions}>
        {plans.map((plan) => {
          const amount = isYearly ? plan.yearly : plan.monthly;

          return (
            <div
              key={plan.id}
              className={`${cn.mobileOption} ${plan.popular ? cn.mobilePopular : ""} ${
                selectedId === plan.id ? cn.mobileSelected : ""
              }`}
              onClick={() => setSelectedId(plan.id)}
              role="button"
              tabIndex={0}
            >
              <div className={cn.mobileOptionLeft}>
                {selectedId === plan.id ? (
                  <RadioButtonCheckedIcon className={`${cn.mobileRadioIcon} selected`} />
                ) : (
                  <RadioButtonUncheckedIcon className={cn.mobileRadioIcon} />
                )}

                <div className={cn.mobilePlanInfo}>
                  <span className={cn.mobilePlanName}>{plan.title}</span>
                  {plan.popular && <span className={cn.mobilePopularTag}>Most Popular</span>}
                </div>
              </div>

              <div className={cn.mobilePriceContainer}>
                <span className={cn.mobilePlanPrice}>
                  {currencyText}
                  {amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cn.mobileActionButtons}>
        <button
          className={cn.mobileSubscribeBtn}
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
    <section className={cn.wrap}>
      <div className={cn.container}>
        {/* INDIVIDUAL */}
        {!isMobile ? (
          <div className={cn.section}>
            <h2 className={cn.title}>Individual Quran Learning Plans</h2>
            <p className={cn.subtitle}>
              Stay connected every day for{" "}
              <span className={cn.greenText}>less than the cost of your daily coffee</span>
            </p>

            <BillingToggle value={yearlyIndividual} onChange={setYearlyIndividual} />

            <div className={cn.pricingContainer}>
              <div className={cn.cardsWrapper}>
                {individualPlans.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    isYearly={yearlyIndividual}
                    onCheckout={(p) => goToCheckout({ plan: p, isYearly: yearlyIndividual, section: "individual" })}
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
            onCheckout={(p) => goToCheckout({ plan: p, isYearly: yearlyIndividual, section: "individual" })}
            showFeatures
            selectedSummary={selectedIndividual}
          />
        )}

        {/* SADAQAH */}
        {!isMobile ? (
          <div className={cn.section}>
            <h2 className={cn.title}>Sadaqah Jariyah</h2>
            <p className={cn.subtitle}>
              Sponsor Quran education and earn continuous reward{" "}
              <span className={cn.greenText}>for generations</span>
            </p>

            <BillingToggle value={yearlySadaqah} onChange={setYearlySadaqah} />

            <div className={cn.pricingContainer}>
              <div className={cn.cardsWrapper}>
                {sadaqahPlans.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    isYearly={yearlySadaqah}
                    isSadaqah
                    onCheckout={(p) => goToCheckout({ plan: p, isYearly: yearlySadaqah, section: "sadaqah" })}
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
            onCheckout={(p) => goToCheckout({ plan: p, isYearly: yearlySadaqah, section: "sadaqah" })}
          />
        )}
      </div>
    </section>
  );
};

export default PremiumPricing;
