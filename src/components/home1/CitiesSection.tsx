// "use client";

// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import citiesData from "@/data/cities.json";
// import CityCard from "@/components/cards/CityCard";
// import "swiper/css";

// export default function CitiesSection() {
//   const swiperRef = useRef<SwiperType>();

//   return (
//     <div className="cities sp2 _relative" id="cities">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6" data-aos="fade-up" data-aos-duration="800">
//             <div className="hadding2">
//               <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
//                 Become a <span className="after">Member</span>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container" data-aos="zoom-out" data-aos-duration="800">
//         <div className="row">
//           <div className="citi-slider-all comon-slider">
//             <Swiper
//               modules={[Navigation]}
//               onBeforeInit={(swiper) => {
//                 swiperRef.current = swiper;
//               }}
//               spaceBetween={24}
//               slidesPerView={1}
//               loop={true}
//               breakpoints={{
//                 576: { slidesPerView: 2 },
//                 768: { slidesPerView: 3 },
//                 1200: { slidesPerView: 4 },
//               }}
//             >
//               {citiesData.map((city) => (
//                 <SwiperSlide key={city.id}>
//                   <CityCard city={city} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             <div className="owl-nav mt-4 text-center">
//               <button
//                 type="button"
//                 className="owl-prev h1p me-2"
//                 onClick={() => swiperRef.current?.slidePrev()}
//                 aria-label="Previous city"
//               >
//                 <i className="fa-solid fa-arrow-left" />
//               </button>
//               <button
//                 type="button"
//                 className="owl-next h1n"
//                 onClick={() => swiperRef.current?.slideNext()}
//                 aria-label="Next city"
//               >
//                 <i className="fa-solid fa-arrow-right" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import styles from "./CitiesSection.module.css";

export default function CitiesSection() {
  return (
    <section
      className={`cities sp2 _relative ${styles.memberSection}`}
      id="cities"
    >
      <div className="container">
        {/* SECTION HEADING */}
        <div className="row justify-content-center">
          <div
            className="col-12 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="hadding2">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                Become a <span className="after">Member</span>
              </h1>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div
          className={styles.contentWrapper}
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className={styles.contentCard}>
            <div className={styles.description}>
              <p>
                জ্যাসকো বহুমুখী সমবায় সমিতি বাংলাদেশের সর্বস্তরের মানুষের মধ্যে
                সম্প্রীতি, কল্যাণ ও সহযোগিতাপূর্ণ সম্পর্ক তৈরি, সুদমুক্ত
                ব্যবসায়িক কর্মকাণ্ডের মাধ্যমে কর্মসংস্থান ও দক্ষতা উন্নয়নে
                সহযোগিতা এবং সর্বোপরি সদস্যদের সামাজিক ও অর্থনৈতিক কল্যাণে অবদান
                রাখার লক্ষ্যে প্রতিষ্ঠিত।
              </p>

              <p>
                বাংলাদেশের সর্বস্তরের মানুষের কল্যাণার্থে এবং সদস্যদের পারস্পরিক
                সহযোগিতা, উন্নয়ন ও সমৃদ্ধির লক্ষ্যে এই সংগঠনটি গঠন করা হইল।
              </p>
            </div>

            {/* REGISTRATION AREA */}
            <div className={styles.registrationArea}>
              <p className={styles.registrationText}>
                সমিতির সদস্য হইতে এই বাটন এ ক্লিক করুন
              </p>

              <Link
                href="https://app.zascomcs.org/register"
                className={styles.registerButton}
                target="_blank"
              >
                সদস্য হতে ক্লিক করুন
                <span aria-hidden="true">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
