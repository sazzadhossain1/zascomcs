import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import FaqAccordion from '@/components/common/FaqAccordion';
import faqsData from '@/data/faqs.json';
import teamData from '@/data/team.json';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="About us" currentPage="About us" />

        {/* Business Potential */}
        <div className="about-besniess sp2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="apartment-imgs">
                  <div className="apartment-img1">
                    <img src="/assets/img/shapes/apartment-img-1.svg" alt="Shape" />
                  </div>
                  <div className="apartment-img2">
                    <img src="/assets/img/image/about-image1.png" alt="Business Innovation" />
                  </div>
                  <div className="apartment-img3">
                    <img src="/assets/img/shapes/apartment-img-3.svg" alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hadding2 font-f-2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-55">
                    Business potential by constant <span className="after">innovation.</span>
                  </h1>
                  <div className="space20" />
                  <p className="font-18 line-height-p-30 weight-400">
                    Your perfect property journey is powered by Avigo. Browse thousands of
                    vetted properties worldwide, negotiate terms with confidence, sign agreements
                    online, and stay closely connected with dedicated brokers.
                  </p>
                  <div className="about-icon-box">
                    <div>
                      <div className="about-icon-box-icon">
                        <img src="/assets/img/icons/about-besniess-iocn-1.svg" alt="Benefit" />
                      </div>
                    </div>
                    <div>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line-height-22 weight-500">
                          <Link href="/service">Company benefit</Link>
                        </h4>
                        <div className="space12" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          You focus on finding the ideal lifestyle, we handle legal checks and transaction security!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-icon-box">
                    <div>
                      <div className="about-icon-box-icon">
                        <img src="/assets/img/icons/about-besniess-iocn-2.svg" alt="Value" />
                      </div>
                    </div>
                    <div>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line-height-22 weight-400">
                          <Link href="/service">Competitive Pricing</Link>
                        </h4>
                        <div className="space12" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">
                          Direct connections with property owners eliminate inflated markups and hidden agent commissions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company History & Progress */}
        <div className="about-history sp2 page-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hadding2 font-f-2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Our company <span className="after">history</span>
                  </h1>
                  <div className="space20" />
                  <p className="font-18 line-height-p-30 weight-400">
                    Founded with a passion to revolutionize cross-border European real estate,
                    Avigo has expanded across 70 countries with hundreds of trusted partner brokerages.
                  </p>
                </div>
                <div className="space40" />
                <div className="about-progress">
                  <div className="progress-line mb-3">
                    <h6>Growth Rate (96%)</h6>
                    <div className="progress" style={{ height: '10px', borderRadius: '10px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '96%' }}
                        aria-valuenow={96}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-line mb-3">
                    <h6>Client Retention (94%)</h6>
                    <div className="progress" style={{ height: '10px', borderRadius: '10px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '94%' }}
                        aria-valuenow={94}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="progress-line mb-3">
                    <h6>Verified Listings (100%)</h6>
                    <div className="progress" style={{ height: '10px', borderRadius: '10px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="space30" />
                <div className="home2-btn">
                  <Link className="font-18 line-height-30 font-f-2 font-w" href="/contact">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="apartment-imgs">
                  <div className="apartment-img1-img-right">
                    <img src="/assets/img/shapes/apartment-img-1.svg" alt="Shape" />
                  </div>
                  <div className="apartment-img2-img-right">
                    <img src="/assets/img/image/about-image2.png" alt="History" />
                  </div>
                  <div className="apartment-img3-img-right">
                    <img src="/assets/img/shapes/apartment-img-3.svg" alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mission sp2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Our <span className="after">mission</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="space40" />
            <div className="row">
              {[
                { num: '1', title: 'Strategic Planning', text: 'Tailored property asset growth plans aligned with international tax optimization and long-term capital preservation.' },
                { num: '2', title: 'Market Analysis', text: 'Real-time property valuation benchmarks across metropolitan centers and emerging luxury coastal destinations.' },
                { num: '3', title: 'Seamless Acquisition', text: 'End-to-end guidance through title deed registry, multilingual contracts, and verified escrow deposits.' },
                { num: '4', title: 'Property Management', text: 'Turnkey leasing administration, tenant screening, property maintenance, and continuous ROI monitoring.' },
              ].map((m, idx) => (
                <div key={idx} className="col-lg-3 col-md-6 mb-4">
                  <div className="mission-box-all">
                    <div className="mission-hadding">
                      <h6 className="misson-num">{m.num}</h6>
                      <div className="hadding2">
                        <h4 className="font-f-2 font-22 line--height-22 weight-500">
                          <Link href="/service">{m.title}</Link>
                        </h4>
                        <div className="space16" />
                        <p className="font-f-2 weight-400 line-height-28 font-16">{m.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Accordion */}
        <div className="about-vision sp2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="apartment-imgs">
                  <div className="apartment-img1">
                    <img src="/assets/img/shapes/apartment-img-1.svg" alt="Shape" />
                  </div>
                  <div className="apartment-img2">
                    <img src="/assets/img/image/about-image3.png" alt="Vision" />
                  </div>
                  <div className="apartment-img3">
                    <img src="/assets/img/shapes/apartment-img-3.svg" alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Our <span className="after">Vision</span>
                  </h1>
                  <div className="space24" />
                  <p className="font-f-2 weight-400 line-height-28 font-16">
                    We envision a borderless property market where buying, renting, and managing
                    luxurious real estate across European capitals is transparent, fast, and secure.
                  </p>
                </div>
                <div className="space24" />
                <FaqAccordion items={faqsData.slice(0, 3)} />
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="about-team sp2 page-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Our team <span className="after">members</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="space60" />
            <div className="row">
              {teamData.map((member) => (
                <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="about-slider-single text-center">
                    <div className="about-slider-img">
                      <img src={member.image} alt={member.name} />
                      <div className="about-team-hover">
                        <div className="about-hover-icons">
                          <ul>
                            <li>
                              <a href="#"><i className="fa-brands fa-twitter" /></a>
                              <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                              <a href="#"><i className="fa-brands fa-instagram" /></a>
                              <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="hadding2">
                      <div className="space20" />
                      <h4 className="font-f-2 font-22 line--height-22 weight-500">
                        <Link href="/team">{member.name}</Link>
                      </h4>
                      <div className="space10" />
                      <p className="font-f-2 weight-400 line-height-28 font-16">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
