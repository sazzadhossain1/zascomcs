import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

/* ==========================================
   ZASCO MCS OFFICIAL LOGO
========================================== */

function Logo() {
  return (
    <Link
      href="/"
      aria-label="ZASCO Multipurpose Cooperative Society Home"
      className={styles.logoLink}
    >
      <Image
        src="/images/zasco-logo.png"
        alt="ZASCO Multipurpose Cooperative Society"
        width={320}
        height={110}
        className={styles.footerLogo}
        sizes="(max-width: 575px) 190px, (max-width: 991px) 220px, 240px"
      />
    </Link>
  );
}

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {
  return (
    <footer className="footer-area padding-top font-f-2">
      <div className="container">
        <div className={`row ${styles.footerRow}`}>
          {/* LOGO AND CONTACT INFORMATION */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer mr50 hadding2">
              <div
                className={`site-logo home1-site-logo ${styles.logoContainer}`}
              >
                <Logo />
              </div>

              <div className="space30" />

              <div className="single-footer-contact">
                {/* ADDRESS */}
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img
                        src="/assets/img/icons/footer-icon-2.svg"
                        alt="Address"
                      />
                    </div>
                  </div>

                  <div className="foonter-contact-p">
                    <span>
                      Rupsha Tower, Unit 9/B,
                      <br />
                      Building - 7, Road - 17,
                      <br />
                      Banani, Dhaka-1213
                    </span>
                  </div>
                </div>

                {/* PHONE */}
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img
                        src="/assets/img/icons/footer-icon-1.svg"
                        alt="Phone"
                      />
                    </div>
                  </div>

                  <div className="foonter-contact-p">
                    <a href="tel:+8801793596432">0179 359 6432</a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="foonter-contact-1">
                  <div className="foonter-contact-icon-1">
                    <div>
                      <img
                        src="/assets/img/icons/footer-icon-2.svg"
                        alt="Email"
                      />
                    </div>
                  </div>

                  <div className="foonter-contact-p">
                    <a href="mailto:contact@zascomcs.org">
                      contact@zascomcs.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DISCOVER */}
          <div className="col-lg col-sm-6 hadding2">
            <div className="single-footer">
              <h3 className="font-f-1 font-20 weight-700 line-height-20">
                Discover
              </h3>

              <div>
                <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/blog">Our Blog</Link>
                  </li>
                  <li>
                    <Link href="/pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="/service">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div className="col-lg col-sm-6 hadding2">
            <div className="single-footer">
              <h3 className="font-f-2 font-20 weight-700 line-height-20">
                Company
              </h3>

              <div>
                <ul className="font-f-2 font-16 line-height-26 pera-c-1">
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GET IN TOUCH */}
          <div className="col-lg-3 col-sm-6 hadding2">
            <div className={`single-footer ${styles.socialSection}`}>
              <h3 className="font-f-2 font-20 weight-700 line-height-20">
                Get in touch
              </h3>

              <div
                className={`social social1 comon-footer-icons ${styles.socialIcons}`}
              >
                <ul className={styles.socialList}>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div
          className={`row align-items-center copyright2 ${styles.copyrightRow}`}
        >
          <div className="col-12">
            <p
              className={`font-16 weight-400 font-f-2 line-height-16 pera-c-1 ${styles.copyrightText}`}
            >
              © {new Date().getFullYear()} ZASCOMCS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
