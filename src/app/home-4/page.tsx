'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function Home4Page() {
  const [domainName, setDomainName] = useState('');
  const [domainType, setDomainType] = useState('com');
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero Area */}
        <div className="hero-area home4-hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="home4-main-hadding">
                  <span
                    className="font-f-4 font-16 line-height-16 weight-500 font-w span badge bg-warning text-dark px-3 py-2 mb-3"
                    data-aos="fade-right"
                    data-aos-duration="600"
                  >
                    Best Cloud & Web Hosting
                  </span>
                  <div className="space20" />
                  <h1
                    className="font-f-4 font-lg-70 font-40 line-height-lg-80 weight-800 line-height-48 font-w"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    Web hosting provider <br />
                    for businesses & <br />
                    <span className="after">creative</span> professionals
                  </h1>
                  <div className="space24" />
                  <p
                    data-aos="fade-right"
                    data-aos-duration="600"
                    className="font-f-4 weight-400 font-16 line-height-24 text-white-50"
                  >
                    Reliable 99.9% uptime infrastructure engineered for high-traffic real estate portals, agency web apps, and enterprise databases.
                  </p>
                  <div className="space32" />
                  <div className="home4-buttons d-flex gap-3" data-aos="fade-right" data-aos-duration="1000">
                    <Link className="btn btn-primary font-f-4 font-16 px-4 py-3 weight-700" href="/contact">
                      Get Started
                    </Link>
                    <Link className="btn btn-outline-light font-f-4 font-16 px-4 py-3 weight-700" href="/pricing">
                      View Pricing
                    </Link>
                  </div>
                  <div className="space40" />
                  <div className="reviews-all d-flex align-items-center gap-3" data-aos="fade-right" data-aos-duration="1200">
                    <div className="review-images">
                      <img src="/assets/img/image/review-all.png" alt="User reviews" />
                    </div>
                    <div className="star-reviews">
                      <div className="d-flex align-items-center gap-2">
                        <div className="text-warning">
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                        <span className="font-f-4 font-w font-16 fw-bold">(5.0)</span>
                      </div>
                      <p className="font-f-4 font-14 text-white-50 mb-0">From 560+ Verified Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain Search Section */}
        <section className="position-relative zindex-2 my-5" data-aos="zoom-in-up" data-aos-duration="800">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="p-5 bg-white border rounded-4 shadow">
                  <h3 className="text-center font-lg-40 font-30 font-f-4 weight-800 mb-3">
                    Looking For Your Perfect Domain?
                  </h3>
                  <p className="text-center text-muted mb-4 font-f-4 font-16">
                    Check availability and claim your unique online identity instantly.
                  </p>

                  <form
                    className="row g-2 mb-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(`Searching availability for ${domainName}.${domainType}`);
                    }}
                  >
                    <div className="col-md-7">
                      <input
                        type="text"
                        className="form-control form-control-lg font-f-4"
                        placeholder="yourdomainname"
                        value={domainName}
                        onChange={(e) => setDomainName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select form-select-lg font-f-4"
                        value={domainType}
                        onChange={(e) => setDomainType(e.target.value)}
                      >
                        <option value="com">.com ($8.99)</option>
                        <option value="net">.net ($4.99)</option>
                        <option value="org">.org ($2.99)</option>
                        <option value="io">.io ($29.99)</option>
                        <option value="online">.online ($0.99)</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button type="submit" className="btn btn-primary btn-lg w-100 font-f-4 weight-700">
                        <i className="fas fa-search pe-1" /> Search
                      </button>
                    </div>
                  </form>

                  <div className="d-flex flex-wrap justify-content-center gap-3 text-center">
                    {[
                      { ext: '.com', price: '$8.99' },
                      { ext: '.online', price: '$0.99' },
                      { ext: '.net', price: '$4.99' },
                      { ext: '.org', price: '$2.99' },
                      { ext: '.store', price: '$0.99' },
                    ].map((d, i) => (
                      <div key={i} className="border px-4 py-2 rounded-3 bg-light">
                        <strong className="font-f-4 text-primary d-block">{d.ext}</strong>
                        <small className="text-muted font-f-4">{d.price}/yr</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="hostika-features sp3" id="features">
          <div className="container">
            <div className="row">
              <div className="col-md-7 m-auto text-center">
                <div className="hadding4">
                  <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-up" data-aos-duration="600">
                    Hostika Core <span className="after">Features</span>
                  </h1>
                  <div className="space24" />
                  <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p1" data-aos="fade-up" data-aos-duration="800">
                    High-performance cloud compute engineered on top of AWS, Rackspace, and Google Cloud networks.
                  </p>
                </div>
              </div>
            </div>

            <div className="space30" />

            <div className="row">
              {[
                { title: 'NVMe SSD Storage', icon: '/assets/img/icons/features4-icon1.svg', desc: 'Ultra-fast read/write throughput giving your web apps instantaneous loading speeds.' },
                { title: 'Free SSL Certificates', icon: '/assets/img/icons/features4-icon2.svg', desc: 'Automated HTTPS setup protecting user transactions and boosting search engine trust.' },
                { title: 'Super Easy Dashboard', icon: '/assets/img/icons/features4-icon3.svg', desc: 'Intuitive modern control panel to manage DNS records, email boxes, and staging environments.' },
                { title: 'Fast & Reliable 99.9%', icon: '/assets/img/icons/features4-icon4.svg', desc: 'Fault-tolerant server clusters ensuring your site remains online around the clock.' },
              ].map((item, idx) => (
                <div key={idx} className="col-md-6 col-lg-3 text-center mb-4" data-aos="fade-up" data-aos-duration={`${600 + idx * 200}`}>
                  <div className="p-4 border rounded-4 bg-white h-100 shadow-sm">
                    <div className="mb-3">
                      <img src={item.icon} alt={item.title} style={{ height: '48px' }} />
                    </div>
                    <h5 className="font-f-4 font-20 weight-700 mb-2">{item.title}</h5>
                    <p className="font-f-4 font-14 text-muted line-height-22 mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Plan Section */}
        <div className="home2-pricing-plan sp2" id="plan">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto text-center">
                <div className="hadding4">
                  <h1 className="font-f-4 font-30 font-lg-40 line-height-38 line-height-lg-40 weight-800" data-aos="fade-up" data-aos-duration="600">
                    Scale With Our Hosting <span className="after">Plans</span>
                  </h1>
                  <div className="space16" />
                  <p className="font-f-4 font-16 line-height-28 weight-500 hadding4-p2" data-aos="fade-up" data-aos-duration="800">
                    Transparent pricing with unmetered bandwidth, automated backups, and 24/7 technical assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              {[
                { title: 'Starlight Plan', price: '$2.99', space: '2GB SSD', sites: '2 Websites', active: false },
                { title: 'Business Plan', price: '$19.99', space: '4GB SSD', sites: '5 Websites', active: true },
                { title: 'Premium Plan', price: '$29.99', space: '8GB SSD', sites: '8 Websites', active: false },
              ].map((tier, idx) => (
                <div key={idx} className="col-md-6 col-lg-4 mb-4">
                  <div className={`p-4 border rounded-4 bg-white h-100 shadow-sm ${tier.active ? 'border-primary border-2' : ''}`}>
                    <h4 className="font-f-4 font-22 weight-700 mb-2">{tier.title}</h4>
                    <h2 className="font-f-4 font-36 weight-800 text-primary mb-3">
                      {tier.price}<small className="text-muted font-16 fw-normal">/month</small>
                    </h2>
                    <ul className="list-unstyled font-f-4 font-15 mb-4">
                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2" /> {tier.space} Storage</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2" /> Unmetered Bandwidth</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2" /> {tier.sites}</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2" /> Free Domain Name</li>
                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2" /> 24/7 Technical Support</li>
                    </ul>
                    <Link href="/contact" className={`btn w-100 py-3 font-f-4 weight-700 ${tier.active ? 'btn-primary' : 'btn-outline-primary'}`}>
                      Get Started Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
