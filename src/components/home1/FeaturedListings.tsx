"use client";

import styles from "./FeaturedListings.module.css";

interface FeaturedListingsProps {
  title?: string;
  highlightText?: string;
}

const englishBenefits = [
  {
    title: "Investment Opportunities",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Financial Growth",
    icon: "fa-solid fa-coins",
  },
  {
    title: "Social & Humanitarian Welfare",
    icon: "fa-solid fa-hand-holding-heart",
  },
  {
    title: "Transparency & Accountability",
    icon: "fa-solid fa-shield",
  },
  {
    title: "Collective Strength",
    icon: "fa-solid fa-users",
  },
  {
    title: "Democratic Participation",
    icon: "fa-solid fa-users",
  },
];

const banglaBenefits = [
  {
    title: "বিনিয়োগের সুযোগ",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "আর্থিক সমৃদ্ধি",
    icon: "fa-solid fa-coins",
  },
  {
    title: "সামাজিক ও মানবিক কল্যাণ",
    icon: "fa-solid fa-hand-holding-heart",
  },
  {
    title: "স্বচ্ছতা ও জবাবদিহিতা",
    icon: "fa-solid fa-shield",
  },
  {
    title: "সম্মিলিত শক্তি",
    icon: "fa-solid fa-users",
  },
  {
    title: "গণতান্ত্রিক অংশগ্রহণ",
    icon: "fa-solid fa-users",
  },
];

export default function FeaturedListings({
  title = "Our featured",
  highlightText = "listing",
}: FeaturedListingsProps) {
  return (
    <section className={styles.benefitsSection} id="listings">
      <div className="container">
        {/* ENGLISH SECTION */}
        <div className={styles.languageSection}>
          <div className={styles.sectionHeading}>
            <div className="hadding2">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                Benefits of Becoming a Member of{" "}
                <span className="after">ZASCO MCS</span>
              </h1>
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            {englishBenefits.map((benefit, index) => (
              <div className={styles.benefitCard} key={index}>
                <div className={styles.iconWrapper}>
                  <i className={benefit.icon} aria-hidden="true" />
                </div>

                <h3 className={styles.benefitTitle}>{benefit.title}</h3>

                <div className={styles.cardDecoration} />
              </div>
            ))}
          </div>

          <div className={styles.motto}>
            <p>Together We Grow, Together We Prosper, Together We Serve.</p>
          </div>
        </div>

        {/* BANGLA SECTION */}
        <div
          className={`${styles.languageSection} ${styles.banglaSection}`}
          lang="bn"
        >
          <div className={styles.sectionHeading}>
            <div className="hadding2">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                ZASCO MCS-এর সদস্য হওয়ার{" "}
                <span className="after">সুবিধাসমূহ</span>
              </h1>
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            {banglaBenefits.map((benefit, index) => (
              <div className={styles.benefitCard} key={index}>
                <div className={styles.iconWrapper}>
                  <i className={benefit.icon} aria-hidden="true" />
                </div>

                <h3 className={styles.benefitTitle}>{benefit.title}</h3>

                <div className={styles.cardDecoration} />
              </div>
            ))}
          </div>

          <div className={styles.motto}>
            <p>
              একসাথে এগিয়ে যাব, একসাথে সমৃদ্ধ হব, একসাথে মানবতার সেবায় নিয়োজিত
              থাকব।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
