// "use client";

// import styles from "./FeaturedListings.module.css";

// interface FeaturedListingsProps {
//   title?: string;
//   highlightText?: string;
// }

// const englishBenefits = [
//   {
//     title: "Investment Opportunities",
//     icon: "fa-solid fa-chart-line",
//   },
//   {
//     title: "Financial Growth",
//     icon: "fa-solid fa-coins",
//   },
//   {
//     title: "Social & Humanitarian Welfare",
//     icon: "fa-solid fa-hand-holding-heart",
//   },
//   {
//     title: "Transparency & Accountability",
//     icon: "fa-solid fa-shield",
//   },
//   {
//     title: "Collective Strength",
//     icon: "fa-solid fa-users",
//   },
//   {
//     title: "Democratic Participation",
//     icon: "fa-solid fa-users",
//   },
// ];

// const banglaBenefits = [
//   {
//     title: "বিনিয়োগের সুযোগ",
//     icon: "fa-solid fa-chart-line",
//   },
//   {
//     title: "আর্থিক সমৃদ্ধি",
//     icon: "fa-solid fa-coins",
//   },
//   {
//     title: "সামাজিক ও মানবিক কল্যাণ",
//     icon: "fa-solid fa-hand-holding-heart",
//   },
//   {
//     title: "স্বচ্ছতা ও জবাবদিহিতা",
//     icon: "fa-solid fa-shield",
//   },
//   {
//     title: "সম্মিলিত শক্তি",
//     icon: "fa-solid fa-users",
//   },
//   {
//     title: "গণতান্ত্রিক অংশগ্রহণ",
//     icon: "fa-solid fa-users",
//   },
// ];

// export default function FeaturedListings({
//   title = "Our featured",
//   highlightText = "listing",
// }: FeaturedListingsProps) {
//   return (
//     <section className={styles.benefitsSection} id="listings">
//       <div className="container">
//         {/* ENGLISH SECTION */}
//         <div className={styles.languageSection}>
//           <div className={styles.sectionHeading}>
//             <div className="hadding2">
//               <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
//                 Benefits of Becoming a Member of{" "}
//                 <span className="after">ZASCO MCS</span>
//               </h1>
//             </div>
//           </div>

//           <div className={styles.benefitsGrid}>
//             {englishBenefits.map((benefit, index) => (
//               <div className={styles.benefitCard} key={index}>
//                 <div className={styles.iconWrapper}>
//                   <i className={benefit.icon} aria-hidden="true" />
//                 </div>

//                 <h3 className={styles.benefitTitle}>{benefit.title}</h3>

//                 <div className={styles.cardDecoration} />
//               </div>
//             ))}
//           </div>

//           <div className={styles.motto}>
//             <p>Together We Grow, Together We Prosper, Together We Serve.</p>
//           </div>
//         </div>

//         {/* BANGLA SECTION */}
//         <div
//           className={`${styles.languageSection} ${styles.banglaSection}`}
//           lang="bn"
//         >
//           <div className={styles.sectionHeading}>
//             <div className="hadding2">
//               <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
//                 ZASCO MCS-এর সদস্য হওয়ার{" "}
//                 <span className="after">সুবিধাসমূহ</span>
//               </h1>
//             </div>
//           </div>

//           <div className={styles.benefitsGrid}>
//             {banglaBenefits.map((benefit, index) => (
//               <div className={styles.benefitCard} key={index}>
//                 <div className={styles.iconWrapper}>
//                   <i className={benefit.icon} aria-hidden="true" />
//                 </div>

//                 <h3 className={styles.benefitTitle}>{benefit.title}</h3>

//                 <div className={styles.cardDecoration} />
//               </div>
//             ))}
//           </div>

//           <div className={styles.motto}>
//             <p>
//               একসাথে এগিয়ে যাব, একসাথে সমৃদ্ধ হব, একসাথে মানবতার সেবায় নিয়োজিত
//               থাকব।
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import styles from "./FeaturedListings.module.css";

interface FeaturedListingsProps {
  title?: string;
  highlightText?: string;
}

interface Benefit {
  title: string;
  icon: string;
  description: string;
}

const englishDescription =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus neque sequi laborum aspernatur sint ea deleniti magni eum corporis?";

const banglaDescription =
  "স্পিচ-টু-টেক্সট প্রযুক্তির সাথে বাংলায় টাইপ করা খুব সহজ। আপনি স্পিচ স্বীকৃতি প্রযুক্তি ব্যবহার করে বাংলা টাইপ করতে পারেন। কেবল মাইকের সাথে কথা বলুন এবং অ্যাপটি আপনার কথ্য শব্দগুলিকে বাংলা ভাষার পাঠ্যে রূপান্তর করবে।";

const englishBenefits: Benefit[] = [
  {
    title: "Investment Opportunities",
    icon: "fa-solid fa-chart-line",
    description: englishDescription,
  },
  {
    title: "Financial Growth",
    icon: "fa-solid fa-coins",
    description: englishDescription,
  },
  {
    title: "Social & Humanitarian Welfare",
    icon: "fa-solid fa-hand-holding-heart",
    description: englishDescription,
  },
  {
    title: "Transparency & Accountability",
    icon: "fa-solid fa-shield",
    description: englishDescription,
  },
  {
    title: "Collective Strength",
    icon: "fa-solid fa-users",
    description: englishDescription,
  },
  {
    title: "Democratic Participation",
    icon: "fa-solid fa-users",
    description: englishDescription,
  },
];

const banglaBenefits: Benefit[] = [
  {
    title: "বিনিয়োগের সুযোগ",
    icon: "fa-solid fa-chart-line",
    description: banglaDescription,
  },
  {
    title: "আর্থিক সমৃদ্ধি",
    icon: "fa-solid fa-coins",
    description: banglaDescription,
  },
  {
    title: "সামাজিক ও মানবিক কল্যাণ",
    icon: "fa-solid fa-hand-holding-heart",
    description: banglaDescription,
  },
  {
    title: "স্বচ্ছতা ও জবাবদিহিতা",
    icon: "fa-solid fa-shield",
    description: banglaDescription,
  },
  {
    title: "সম্মিলিত শক্তি",
    icon: "fa-solid fa-users",
    description: banglaDescription,
  },
  {
    title: "গণতান্ত্রিক অংশগ্রহণ",
    icon: "fa-solid fa-users",
    description: banglaDescription,
  },
];

interface BenefitCardProps {
  benefit: Benefit;
  language: "en" | "bn";
}

function BenefitCard({ benefit, language }: BenefitCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((previous) => !previous);
  };

  return (
    <div className={styles.flipContainer}>
      <div
        className={`${styles.benefitCard} ${isFlipped ? styles.isFlipped : ""}`}
      >
        <div className={styles.cardInner}>
          {/* FRONT SIDE */}
          <button
            type="button"
            className={`${styles.cardFace} ${styles.cardFront}`}
            onClick={toggleFlip}
            aria-label={
              language === "bn"
                ? `${benefit.title} সম্পর্কে বিস্তারিত দেখুন`
                : `View details about ${benefit.title}`
            }
            aria-expanded={isFlipped}
            tabIndex={isFlipped ? -1 : 0}
          >
            <div className={styles.iconWrapper}>
              <i className={benefit.icon} aria-hidden="true" />
            </div>

            <h3 className={styles.benefitTitle}>{benefit.title}</h3>

            <span className={styles.cardDecoration} />

            <span className={styles.flipHint}>
              <i className="fa-solid fa-rotate" aria-hidden="true" />
              {language === "bn" ? "বিস্তারিত দেখুন" : "View Details"}
            </span>
          </button>

          {/* BACK SIDE */}
          <div
            className={`${styles.cardFace} ${styles.cardBack}`}
            aria-hidden={!isFlipped}
          >
            <div className={styles.backHeader}>
              <div className={styles.backIcon}>
                <i className={benefit.icon} aria-hidden="true" />
              </div>

              <h3 className={styles.backTitle}>{benefit.title}</h3>
            </div>

            <div className={styles.backContent}>
              <p>{benefit.description}</p>
            </div>

            <button
              type="button"
              className={styles.flipBackButton}
              onClick={toggleFlip}
              tabIndex={isFlipped ? 0 : -1}
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {language === "bn" ? "ফিরে যান" : "Go Back"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
            {englishBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                language="en"
              />
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
            {banglaBenefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                language="bn"
              />
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
