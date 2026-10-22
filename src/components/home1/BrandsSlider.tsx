"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brandLogos = [
  "/assets/img/logo/brand2-logo-1.svg",
  "/assets/img/logo/brand2-logo-2.svg",
  "/assets/img/logo/brand2-logo-3.svg",
  "/assets/img/logo/brand2-logo-4.svg",
  "/assets/img/logo/brand2-logo-5.svg",
  "/assets/img/logo/brand2-logo-1.svg",
  "/assets/img/logo/brand2-logo-2.svg",
  "/assets/img/logo/brand2-logo-3.svg",
  "/assets/img/logo/brand2-logo-4.svg",
  "/assets/img/logo/brand2-logo-5.svg",
];

export default function BrandsSlider() {
  return (
    <div className="our-brands padding50 our-brands2">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            {/* <div className="brands-hadding brands-hadding-all1 text-center hadding2">
              <h4 className="font-16 weight-500 font-f-2 line-height-18">
                Partners With 100+ Companies
              </h4>
            </div> */}

            <div className="our-brnad-logos">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 5 },
                }}
              >
                {brandLogos.map((logo, idx) => (
                  <SwiperSlide key={idx} className="brand-logo text-center">
                    <img src={logo} alt={`Partner brand ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
