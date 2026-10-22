'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import FaqAccordion from '@/components/common/FaqAccordion';
import pricingData from '@/data/pricing.json';
import faqsData from '@/data/faqs.json';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <Header />
      <main>
        <PageHero title="Pricing Plan" currentPage="Pricing Plan" />

        <div className="pricing-plan sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Affordable <span className="after">Plans</span> For Everyone
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    Transparent, simple pricing designed for individual homeowners, top agents, and multinational brokerages.
                  </p>
                </div>
                <div className="space40" />

                {/* Billing Toggle */}
                <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                  <span className={`font-f-2 font-16 ${!isYearly ? 'fw-bold text-primary' : 'text-muted'}`}>
                    Monthly
                  </span>
                  <div
                    className="form-check form-switch"
                    style={{ fontSize: '1.4rem', cursor: 'pointer' }}
                    onClick={() => setIsYearly(!isYearly)}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={isYearly}
                      onChange={() => setIsYearly(!isYearly)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <span className={`font-f-2 font-16 ${isYearly ? 'fw-bold text-primary' : 'text-muted'}`}>
                    Annual <span className="badge bg-success ms-1">Save 20%</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="row">
              {pricingData.map((plan) => {
                const price = isYearly
                  ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 0.8 * 12)}`
                  : plan.price;
                const period = isYearly ? '/year' : '/month';

                return (
                  <div key={plan.id} className="col-lg-4 col-md-6 mb-4">
                    <div
                      className={`card h-100 p-4 border rounded-4 shadow-sm ${
                        plan.isPopular ? 'border-primary border-2 position-relative' : ''
                      }`}
                      style={{ background: '#fff' }}
                    >
                      {plan.isPopular && (
                        <span
                          className="position-absolute top-0 end-0 bg-primary text-white font-12 font-f-2 px-3 py-1 rounded-bl-3 rounded-tr-3 fw-bold"
                          style={{ borderTopRightRadius: '14px', borderBottomLeftRadius: '14px' }}
                        >
                          Most Popular
                        </span>
                      )}
                      <div className="card-body d-flex flex-column">
                        <h4 className="font-f-2 font-22 weight-700">{plan.title}</h4>
                        <div className="space10" />
                        <p className="font-f-2 font-14 text-muted">{plan.description}</p>
                        <div className="space20" />
                        <div className="d-flex align-items-baseline mb-4">
                          <h2 className="font-f-2 font-40 weight-700 text-dark mb-0">{price}</h2>
                          <span className="font-f-2 font-16 text-muted ms-2">{period}</span>
                        </div>
                        <ul className="list-unstyled flex-grow-1 font-f-2 font-15 mb-4">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="d-flex align-items-center mb-3">
                              <i className="fa-solid fa-check text-success me-2" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className={`btn w-100 py-3 font-f-2 weight-700 rounded-3 ${
                            plan.isPopular ? 'btn-primary' : 'btn-outline-primary'
                          }`}
                        >
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space70" />

            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="text-center mb-5">
                  <h2 className="font-f-2 font-30 weight-700">Frequently Asked Questions</h2>
                </div>
                <FaqAccordion items={faqsData} />
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
