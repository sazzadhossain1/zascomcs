// import Image from "next/image";
// import styles from "./HeroSection.module.css";

// export default function HeroSection() {
//   return (
//     <section
//       className={styles.heroSection}
//       aria-label="ZASCO Multipurpose Cooperative Society"
//     >
//       <div className={styles.bannerContainer}>
//         <Image
//           src="/assets/img/banners/zascomcs-hero.png"
//           alt="ZASCO Multipurpose Cooperative Society - Humanitarian Service, Social Responsibility and Sustainable Prosperity"
//           width={800}
//           height={375}
//           priority
//           sizes="100vw"
//           className={styles.heroImage}
//         />
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.heroSection}
      aria-label="ZASCO Multipurpose Cooperative Society"
    >
      <div className={styles.bannerContainer}>
        {/* HERO BANNER IMAGE */}
        <Image
          src="/assets/img/banners/zascomcs-hero.png"
          alt="ZASCO Multipurpose Cooperative Society - Humanitarian Service, Social Responsibility and Sustainable Prosperity"
          width={1920}
          height={900}
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        {/* REGISTER BUTTON */}
        <div className={styles.buttonContainer}>
          <a
            href="https://app.zascomcs.org/register"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerButton}
            aria-label="Register as a ZASCO MCS member"
          >
            <span>Register</span>

            {/* <span className={styles.buttonArrow} aria-hidden="true">
              →
            </span> */}
          </a>
        </div>
      </div>
    </section>
  );
}
