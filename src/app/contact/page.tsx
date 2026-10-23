// "use client";

// import { useState } from "react";
// import Header from "@/components/common/Header";
// import Footer from "@/components/common/Footer";
// import PageHero from "@/components/common/PageHero";
// import Newsletter from "@/components/common/Newsletter";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     phone: "",
//     service: "Service",
//     message: "",
//     agree: false,
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <PageHero title="Contact Us" currentPage="Contact Us" />

//         <div className="contact-all-page sp2">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 m-auto text-center">
//                 <div className="hadding2"></div>
//                 <div className="space60" />
//               </div>
//             </div>

//             <div className="row align-items-center">
//               <div className="col-lg-4 col-md-6 text-center mb-4">
//                 <div className="contact-page-box">
//                   <div className="contact-box-img">
//                     <img
//                       src="/assets/img/icons/contact-img-icon3.svg"
//                       alt="Office"
//                     />
//                   </div>
//                   <div className="space20" />
//                   <div className="contact-hadding">
//                     <h4>
//                       <a
//                         className="font-f-2 font-24 line-height-24 weight-700"
//                         href="#"
//                       >
//                         Headquarters
//                       </a>
//                     </h4>
//                     <div className="space20" />
//                     <p className="font-f-2 font-20 weight-400 line-height-30 mb-1">
//                       Rupsha Tower, Unit 9/B,
//                     </p>
//                     <p className="font-f-2 font-20 weight-400 line-height-30">
//                       Building - 7, Road - 17, Banani, Dhaka-1213
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-md-6 text-center mb-4">
//                 <div className="contact-page-box">
//                   <div className="contact-box-img">
//                     <img
//                       src="/assets/img/icons/contact-img-icon2.svg"
//                       alt="Phone"
//                     />
//                   </div>
//                   <div className="space20" />
//                   <div className="contact-hadding">
//                     <h4>
//                       <a
//                         className="font-f-2 font-24 line-height-24 weight-700"
//                         href="#"
//                       >
//                         Direct Phone
//                       </a>
//                     </h4>
//                     <div className="space20" />
//                     <a
//                       className="font-f-2 font-20 weight-400 line-height-30 d-block"
//                       href=""
//                     >
//                       0179 359 6432
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-4 col-md-6 text-center mb-4">
//                 <div className="contact-page-box">
//                   <div className="contact-box-img">
//                     <img
//                       src="/assets/img/icons/contact-img-icon1.svg"
//                       alt="Email"
//                     />
//                   </div>
//                   <div className="space20" />
//                   <div className="contact-hadding">
//                     <h4>
//                       <a
//                         className="font-f-2 font-24 line-height-24 weight-700"
//                         href="#"
//                       >
//                         Email Inquiries
//                       </a>
//                     </h4>
//                     <div className="space20" />
//                     <a
//                       className="font-f-2 font-20 weight-400 line-height-30 d-block"
//                       href="mailto:support@avigo.com"
//                     >
//                       contact@zascomcs.org
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="space70" />

//             <div className="space70" />

//             <div>
//               <div className="contact-map">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd"
//                   width="100%"
//                   height="450"
//                   style={{ border: 0, borderRadius: "12px" }}
//                   allowFullScreen={true}
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Office Location"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";

import { useState } from "react";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";

import styles from "./ContactPage.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    phone: "",
    service: "Service",
    message: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main>
        <PageHero title="Contact Us" currentPage="Contact Us" />

        {/* CONTACT SECTION */}
        <section className={styles.contactSection}>
          <div className="container">
            {/* CONTACT CARDS */}
            <div className={styles.contactGrid}>
              {/* HEADQUARTERS */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <img
                    src="/assets/img/icons/contact-img-icon3.svg"
                    alt="Office Location"
                  />
                </div>

                <h3 className={styles.cardTitle}>Headquarters</h3>

                <div className={styles.cardContent}>
                  <p>
                    Rupsha Tower, Unit 9/B,
                    <br />
                    Building - 7, Road - 17,
                    <br />
                    Banani, Dhaka-1213
                  </p>
                </div>

                <div className={styles.cardDecoration} />
              </div>

              {/* DIRECT PHONE */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <img
                    src="/assets/img/icons/contact-img-icon2.svg"
                    alt="Phone"
                  />
                </div>

                <h3 className={styles.cardTitle}>Direct Phone</h3>

                <div className={styles.cardContent}>
                  <a href="tel:+8801793596432">0179 359 6432</a>
                </div>

                <div className={styles.cardDecoration} />
              </div>

              {/* EMAIL */}
              <div className={styles.contactCard}>
                <div className={styles.iconWrapper}>
                  <img
                    src="/assets/img/icons/contact-img-icon1.svg"
                    alt="Email"
                  />
                </div>

                <h3 className={styles.cardTitle}>Email Inquiries</h3>

                <div className={styles.cardContent}>
                  <a href="mailto:contact@zascomcs.org">contact@zascomcs.org</a>
                </div>

                <div className={styles.cardDecoration} />
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
