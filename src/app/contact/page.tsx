'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    phone: '',
    service: 'Service',
    message: '',
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

        <div className="contact-all-page sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Request a <span className="after">Call Back</span>
                  </h1>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-4 col-md-6 text-center mb-4">
                <div className="contact-page-box">
                  <div className="contact-box-img">
                    <img src="/assets/img/icons/contact-img-icon3.svg" alt="Office" />
                  </div>
                  <div className="space20" />
                  <div className="contact-hadding">
                    <h4>
                      <a className="font-f-2 font-24 line-height-24 weight-700" href="#">
                        Headquarters
                      </a>
                    </h4>
                    <div className="space20" />
                    <p className="font-f-2 font-20 weight-400 line-height-30 mb-1">
                      984 West College St. Sun City,
                    </p>
                    <p className="font-f-2 font-20 weight-400 line-height-30">
                      United States of America
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-4">
                <div className="contact-page-box">
                  <div className="contact-box-img">
                    <img src="/assets/img/icons/contact-img-icon2.svg" alt="Phone" />
                  </div>
                  <div className="space20" />
                  <div className="contact-hadding">
                    <h4>
                      <a className="font-f-2 font-24 line-height-24 weight-700" href="#">
                        Direct Phone
                      </a>
                    </h4>
                    <div className="space20" />
                    <a className="font-f-2 font-20 weight-400 line-height-30 d-block" href="tel:+16744934289">
                      +1 (674) 493-4289
                    </a>
                    <a className="font-f-2 font-20 weight-400 line-height-30 d-block" href="tel:+16066610241">
                      +1 (606) 661-0241
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 text-center mb-4">
                <div className="contact-page-box">
                  <div className="contact-box-img">
                    <img src="/assets/img/icons/contact-img-icon1.svg" alt="Email" />
                  </div>
                  <div className="space20" />
                  <div className="contact-hadding">
                    <h4>
                      <a className="font-f-2 font-24 line-height-24 weight-700" href="#">
                        Email Inquiries
                      </a>
                    </h4>
                    <div className="space20" />
                    <a className="font-f-2 font-20 weight-400 line-height-30 d-block" href="mailto:support@avigo.com">
                      support@avigo.com
                    </a>
                    <a className="font-f-2 font-20 weight-400 line-height-30 d-block" href="mailto:inquiry@avigo.com">
                      inquiry@avigo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space70" />

            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-from-all">
                  <div className="hadding2">
                    <h4 className="font-f-2 weight-700 font-24 font-lg-24 line-height-30 line-height-lg-45">
                      Send us a Message
                    </h4>
                    <div className="space24" />
                    <p className="font-16 line-height-18 font-f-2 weight-400">
                      Looking to buy, list, or consult on European properties? Contact our specialized advisory team today.
                    </p>
                  </div>
                  <div className="space10" />

                  {submitted ? (
                    <div className="alert alert-success mt-4 p-4 text-center">
                      <h4 className="text-success mb-2">Message Sent!</h4>
                      <p className="mb-0">Thank you for reaching out. One of our property consultants will contact you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="contact-page-form">
                        <div className="forom-input">
                          <input
                            type="text"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            required
                          />
                        </div>

                        <div className="forom-input">
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                          <input
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                          />
                        </div>

                        <div className="forom-input">
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                          <select
                            className="wide form-select"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          >
                            <option value="Property Buying">Property Buying</option>
                            <option value="Property Listing">Property Listing</option>
                            <option value="Rental Advisory">Rental Advisory</option>
                            <option value="Commercial Investment">Commercial Investment</option>
                          </select>
                        </div>

                        <div className="forom-input">
                          <textarea
                            cols={30}
                            rows={4}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                          />
                        </div>

                        <div className="space10" />

                        <div className="form-check form-check-inline input-chack-box">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            checked={formData.agree}
                            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                            required
                          />
                          <label className="form-check-label font-f-2" htmlFor="inlineCheckbox2">
                            I agree to the <span>terms</span>, <span>conditions</span> and <span>privacy policy</span>
                          </label>
                        </div>

                        <div className="contact-form-btn">
                          <button type="submit">Send Now</button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-img text-center">
                  <img src="/assets/img/image/contact-page-img.png" alt="Contact Avigo" />
                </div>
              </div>
            </div>

            <div className="space70" />

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196064.65881483705!2d88.93201515862421!3d24.061083775097945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febca82f6a21ed%3A0x4040980d7c6874f8!2sKushtia%20District!5e0!3m2!1sen!2sbd!4v1673751720794!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
