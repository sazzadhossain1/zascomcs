'use client';

import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import faqsData from '@/data/faqs.json';
import FaqAccordion from '@/components/common/FaqAccordion';
import 'swiper/css';

const brandLogos = [
  '/assets/img/logo/brand2-logo-1.svg',
  '/assets/img/logo/brand2-logo-2.svg',
  '/assets/img/logo/brand2-logo-3.svg',
  '/assets/img/logo/brand2-logo-4.svg',
  '/assets/img/logo/brand2-logo-5.svg',
  '/assets/img/logo/brand2-logo-1.svg',
  '/assets/img/logo/brand2-logo-2.svg',
  '/assets/img/logo/brand2-logo-3.svg',
];

export default function Home3Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Area */}
        <div className="hero-area home3-hero _relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="home3-main-hadding">
                  <h1
                    className="font-f-4 weight-700 font-lg-70 line-height-lg-78 line-height-38 font-w"
                    data-aos="fade-right"
                    data-aos-duration="700"
                  >
                    <span className="after">Make</span> easier your payment with Avigo.
                  </h1>
                  <div className="space12" />
                  <p
                    className="font-f-5 font-20px font-w weight-400 line-height-32"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    A smart mobile application to control all your property investments, transactions, and lease agreements with ease.
                  </p>
                  <div className="space40" />
                  <div className="app-btns d-flex gap-3" data-aos="fade-right" data-aos-duration="1200">
                    <div className="app-btn">
                      <a href="#"><img src="/assets/img/icons/app-1.svg" alt="App Store" /></a>
                    </div>
                    <div className="app-btn">
                      <a href="#"><img src="/assets/img/icons/app-2.svg" alt="Google Play" /></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-7">
                <div className="home3-images" data-aos="zoom-out" data-aos-duration="1000">
                  <div className="home3-img-1">
                    <img src="/assets/img/shapes/home3-hero1.svg" alt="Shape" />
                  </div>
                  <div className="home3-img-2">
                    <img src="/assets/img/image/home3-hero2.png" alt="App Showcase" />
                  </div>
                  <div className="home3-img-3">
                    <img src="/assets/img/icons/home3-star.svg" alt="Star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brands */}
        <div className="our-brands our-brands-h3 our-brands3 sp3" data-aos="zoom-in-up" data-aos-duration="800">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brands-hadding text-center hadding2">
                  <h4 className="font-20 weight-600 font-f-4 line-height-32">
                    Trusted by more than 400+ companies worldwide
                  </h4>
                </div>
                <div className="our-brnad-logos mt-4">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{ delay: 2500 }}
                    breakpoints={{
                      576: { slidesPerView: 3 },
                      768: { slidesPerView: 4 },
                      992: { slidesPerView: 5 },
                    }}
                  >
                    {brandLogos.map((logo, idx) => (
                      <SwiperSlide key={idx} className="brand-logo text-center">
                        <img src={logo} alt="Brand" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Features */}
        <div className="business sp3" id="business">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto text-center">
                <div className="hadding3">
                  <h1
                    className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    The backbone for digital transactions
                  </h1>
                  <div className="space16" />
                  <p className="font-f-5 font-16 line-height-28" data-aos="fade-up" data-aos-duration="800">
                    Engineered to streamline high-value international escrow, rental installments, and mortgage advisory.
                  </p>
                </div>
              </div>
            </div>

            <div className="space30" />

            <div className="row">
              {[
                { title: 'Secure Escrow', icon: '/assets/img/icons/home3-business-icon-2.svg', desc: 'Protected escrow accounts guaranteeing safe deposits and prompt closings.' },
                { title: 'Instant Notifications', icon: '/assets/img/icons/home3-business-icon-3.svg', desc: 'Real-time alert notifications for lease renewals, inspection reports, and rent payouts.' },
                { title: 'Custom Contracts', icon: '/assets/img/icons/home3-business-icon-3.svg', desc: 'Multilingual legally-compliant lease and sale agreements customized per jurisdiction.' },
                { title: 'Multi-Currency Payments', icon: '/assets/img/icons/home3-business-icon-4.svg', desc: 'Effortless conversion and transaction settlement in EUR, USD, GBP, and CHF.' },
              ].map((feat, idx) => (
                <div key={idx} className="col-md-6 mb-4">
                  <div className="business-box p-4 border rounded-4 bg-white h-100" data-aos="fade-up" data-aos-duration={`${700 + idx * 200}`}>
                    <div className="business-icon mb-3">
                      <img src={feat.icon} alt={feat.title} />
                    </div>
                    <div className="hadding3">
                      <h4 className="font-f-4 font-24 line-height-24 weight-700">
                        <Link href="/service">{feat.title}</Link>
                      </h4>
                      <div className="space14" />
                      <p className="p3 font-f-5 font-18 line-height-30 weight-400 text-muted">
                        {feat.desc}
                      </p>
                      <div className="space24" />
                      <div className="home3-learn-more">
                        <Link className="font-f-4 font-16 weight-700 line-height-24 text-primary text-decoration-none" href="/service">
                          Learn More <i className="fa-solid fa-arrow-right ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps / How It Works */}
        <div className="avigo-works sp3" id="work">
          <div className="container">
            <div className="row align-items-center stap-hadding mb-5">
              <div className="col-md-7">
                <div className="stap-imgs sp2" data-aos="zoom-out" data-aos-duration="800">
                  <img src="/assets/img/image/stap-img.png" alt="Step 1" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="hadding3">
                  <span className="font-f-5 line-height-16 font-16 badge bg-primary text-white mb-3" data-aos="fade-left" data-aos-duration="600">
                    Step 01
                  </span>
                  <h2 className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38" data-aos="fade-left" data-aos-duration="800">
                    A step-by-step guide to 24/7 digital property services.
                  </h2>
                  <div className="space24" />
                  <p className="font-f-5 p4 font-16 line-height-28 text-muted" data-aos="fade-left" data-aos-duration="1000">
                    Set up your secure buyer or investor profile in under two minutes. Access vetted property dossiers, verified seller credentials, and comprehensive municipal records directly from your mobile dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center stap-hadding-2">
              <div className="col-md-5 order-2 order-md-1">
                <div className="hadding3">
                  <span className="font-f-5 line-height-16 font-16 badge bg-primary text-white mb-3" data-aos="fade-up" data-aos-duration="600">
                    Step 02
                  </span>
                  <h2 className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38" data-aos="fade-up" data-aos-duration="800">
                    A fully integrated suite of international transaction products.
                  </h2>
                  <div className="space24" />
                  <p className="font-f-5 p4 font-16 line-height-28 text-muted" data-aos="fade-up" data-aos-duration="1000">
                    Manage earnest money deposits, digital notary signatures, and mortgage financing through encrypted bank-grade protocols without needing physical branch visits.
                  </p>
                </div>
              </div>
              <div className="col-md-7 order-1 order-md-2 mb-4 mb-md-0">
                <div className="stap-imgs2" data-aos="zoom-out" data-aos-duration="800">
                  <img src="/assets/img/image/stap-img.png" alt="Step 2" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="home3-faq sp3" id="faq">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto text-center">
                <div className="hadding3">
                  <h1 className="font-lg-40 font-f-4 font-30 weight-700 line-height-lg-48 line-height-38" data-aos="fade-up" data-aos-duration="600">
                    Frequently Asked Questions
                  </h1>
                  <div className="space16" />
                  <p className="font-f-5 font-16 line-height-28" data-aos="fade-up" data-aos-duration="900">
                    Everything you need to know about our mobile property management application.
                  </p>
                </div>
              </div>
            </div>

            <div className="space40" />

            <div className="row">
              <div className="col-lg-8 m-auto">
                <FaqAccordion items={faqsData} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
