'use client';

import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brandLogos = [
  '/assets/img/logo/brend-logo-1.svg',
  '/assets/img/logo/brend-logo-2.svg',
  '/assets/img/logo/brend-logo-3.svg',
  '/assets/img/logo/brend-logo-4.svg',
  '/assets/img/logo/brend-logo-5.svg',
  '/assets/img/logo/brend-logo-1.svg',
  '/assets/img/logo/brend-logo-2.svg',
  '/assets/img/logo/brend-logo-3.svg',
];

export default function Home2Page() {
  return (
    <>
      <Header variant="home2" />
      <main>
        {/* Hero Area */}
        <div className="hero-area hero-1 _relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-5">
                <div className="home2-hero-hadding">
                  <div className="hadding1">
                    <h1
                      className="font-f-1 weight-700 font-40 font-lg-80 line-height-48 line-height-lg-86"
                      data-aos="fade-right"
                      data-aos-duration="600"
                    >
                      <span className="after">Organize</span> your life with one tool.
                    </h1>
                    <div className="space24" />
                    <p
                      className="font-20 font-f-2 weight-400 line-height-p-30 pera-c-1"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      Remember everything and tackle any project with your notes, tasks, and schedule all in one place.
                    </p>
                  </div>
                  <div className="space40" />
                  <form
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.location.href = '/contact';
                    }}
                  >
                    <div className="header-input-form">
                      <input type="email" placeholder="Enter email address" name="email" required />
                      <div className="input-form-btn button1 font-f-1">
                        <button type="submit">Start for free</button>
                      </div>
                      <div className="space10" />
                      <div className="pera-c-1 font-14 font-f-2 weight-400">
                        <p>No subscription. No annual fees. No credit card required.</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="home1-main-hero-img">
            <img src="/assets/img/image/home1-hero-img.png" alt="Management dashboard preview" />
          </div>
        </div>

        {/* Brands Slider */}
        <div className="our-brands our-brands-all2 sp3" data-aos="zoom-in-up" data-aos-duration="900">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brands-hadding text-center">
                  <h4 className="hadding-c1 font-18 weight-500 font-f-2 line-height-18">
                    Trusted by 20,000+ Happy Customers Worldwide
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

        {/* Needs Section */}
        <div className="sec-needs sp3 _relative" id="need">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <div className="need-hadding">
                  <h1
                    className="font-30 font-lg-42 weight-700 font-w line-height-lg-50 line-height-38 font-f-1"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    An app built for <span className="after">your needs.</span>
                  </h1>
                  <div className="space20" />
                  <p
                    className="font-20 weight-400 line-height-30 font-f-2 pera-c-2"
                    data-aos-duration="900"
                    data-aos="fade-up"
                  >
                    Avigo project management helps you stay in full control of all your projects and keep track of all the moving parts.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {[
                { icon: '/assets/img/icons/need-icon-1.svg', title: 'Stay Organised', delay: '1000' },
                { icon: '/assets/img/icons/need-icon-2.svg', title: 'Manage your task', delay: '600' },
                { icon: '/assets/img/icons/need-icon-3.svg', title: 'Centre communication', delay: '900' },
                { icon: '/assets/img/icons/need-icon-4.svg', title: 'Meet your deadline', delay: '600' },
              ].map((need, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 text-center mb-4">
                  <div className="needs-single-box font-w" data-aos="fade-up" data-aos-duration={need.delay}>
                    <div className="needs-icons">
                      <img src={need.icon} alt={need.title} />
                    </div>
                    <div className="space30" />
                    <div className="hadding">
                      <h4 className="font-20 weight-700 line-height-20 font-f-1">
                        <Link className="font-w" href="/contact">{need.title}</Link>
                      </h4>
                      <div className="space20" />
                      <p className="font-16 weight-400 line-height-24 font-f-2">
                        Resource calendar and reports give you complete visibility across all your current and future timelines.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img className="shopes1" src="/assets/img/shapes/sce-after-1.svg" alt="Shape" />
        </div>

        {/* Task Management Section */}
        <div className="sec-task sp4" id="task">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 mb-4 mb-md-0">
                <div className="task-img">
                  <img src="/assets/img/image/task-img.png" alt="Task management software" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="hadding task-hadding">
                  <div className="hadding-span" data-aos="zoom-out" data-aos-duration="900">
                    <img src="/assets/img/icons/titel-icon-5.svg" alt="Icon" />
                  </div>
                  <h1
                    className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1"
                    data-aos="fade-left"
                    data-aos-duration="600"
                  >
                    A <span className="after">task manager</span> <br />
                    you can trust for <br />
                    life saving.
                  </h1>
                  <div className="space24" />
                  <p
                    className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    Keep all your tasks, documents, and conversations in a single centralized hub. Storing important information together means you and your team can always find the latest files and chats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Work Section */}
        <div className="team-work sp5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="hadding task-hadding">
                  <div className="hadding-span" data-aos="zoom-out" data-aos-duration="900">
                    <img src="/assets/img/icons/titel-icon-4.svg" alt="Icon" />
                  </div>
                  <h1
                    className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1"
                    data-aos="fade-right"
                    data-aos-duration="600"
                  >
                    Track your team work, hit every <span className="after">deadline.</span>
                  </h1>
                  <div className="space24" />
                  <p
                    className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    Measure work time at the office and on the go via desktop and mobile apps for iOS and Android. Timesheet views allow you to view, add, and edit time entries with only a few clicks.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="task-img">
                  <img src="/assets/img/image/team-work.png" alt="Team Work" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Integration */}
        <div className="toos sp2" id="tools">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7 mb-4 mb-md-0">
                <div className="tools-img">
                  <img src="/assets/img/image/tools.png" alt="Tools Integrations" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="hadding task-hadding">
                  <div className="hadding-span" data-aos="zoom-out" data-aos-duration="900">
                    <img src="/assets/img/icons/titel-icon-3.svg" alt="Icon" />
                  </div>
                  <h1
                    className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1"
                    data-aos="fade-left"
                    data-aos-duration="600"
                  >
                    Easily <span className="after">integrate</span> with all your favorite tools.
                  </h1>
                  <div className="space24" />
                  <p
                    className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2"
                    data-aos="fade-left"
                    data-aos-duration="900"
                  >
                    Seamlessly connect your workspace with modern tools of your workflow like Zapier, Google Analytics, Stripe, Hotjar, Mailchimp and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Friendly */}
        <div className="mobile sp2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 mb-4 mb-md-0">
                <div className="hadding mobile-hadding">
                  <div className="hadding-span" data-aos="zoom-out" data-aos-duration="900">
                    <img src="/assets/img/icons/titel-icon-1.svg" alt="Icon" />
                  </div>
                  <h1
                    className="font-30 font-lg-42 hadding-c1 weight-700 line-height-38 line-height-lg-50 font-f-1"
                    data-aos="fade-left"
                    data-aos-duration="600"
                  >
                    Project <span className="after">management</span> is mobile friendly!
                  </h1>
                  <div className="space24" />
                  <p
                    className="font-20 pera-c-1 weight-400 line-height-p-30 font-f-2"
                    data-aos="fade-right"
                    data-aos-duration="900"
                  >
                    Stay connected with your team with Avigo for iOS and Android. Sync tasks across desktop, browser, and email in real time.
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
                <div className="task-img">
                  <img src="/assets/img/image/mobile.png" alt="Mobile Friendly" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="subcribe sp2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-7">
                <div className="need-hadding subsribe-hadding">
                  <h1 className="font-30 font-lg-42 weight-700 font-w line-height-lg-50 line-height-38 font-f-1">
                    <span className="after">Get started</span> with us today.
                  </h1>
                  <div className="space24" />
                  <p className="font-20 weight-400 line-height-30 font-f-2 pera-c-2">
                    Start your 14-day free trial. No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = '/contact';
                  }}
                >
                  <div className="header-input-form">
                    <input type="email" placeholder="Enter email address" name="email" required />
                    <div className="input-form-btn button1 font-f-1">
                      <button type="submit">Subscribe Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
