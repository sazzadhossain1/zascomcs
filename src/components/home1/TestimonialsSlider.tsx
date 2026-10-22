'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import testimonials from '@/data/testimonials.json';

import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="litings home1-about-us sp2" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <div className="hadding2 apartment2-hadding font-f-2">
              <h1
                className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                What our <span className="after">customers</span> <br />
                say about us.
              </h1>
            </div>
          </div>
        </div>
        <div className="space60"></div>
        <div className="row" data-aos="fade-up" data-aos-duration="900">
          <div className="swiper about-slider-all">
            <Swiper
              modules={[Navigation, Autoplay]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx} className="about-slider-single">
                  <div className="about-slider-commnet-icon">
                    <img src="/assets/img/icons/about-commnet.svg" alt="" />
                  </div>
                  <div className="about-slider-box">
                    <div className="hadding-about">
                      <p className="font-f-2 weight-400 font-18 line-height-p-30">
                        {item.content}
                      </p>
                      <div className="space24"></div>
                      <div className="about-slider-hadding-bottom">
                        <h6 className="font-f-2 font-16 line-height-16 weight-500">
                          {item.name}
                        </h6>
                        <div className="space8"></div>
                        <p className="font-f-2 font-14 line-height-14 weight-400">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="slider-arrow-cs">
            <button
              type="button"
              className="h1p"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              Prev
            </button>
            <button
              type="button"
              className="h1n"
              onClick={() => swiperRef.current?.slideNext()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
