import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import servicesData from '@/data/services.json';

interface ServiceDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = servicesData.find((s) => s.slug === params.slug) || servicesData[0];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={service.title}
          currentPage={service.title}
          parentPage={{ title: 'Services', href: '/service' }}
        />

        <div className="service-details-area sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="service-details-content">
                  <div className="mb-4 rounded-4 overflow-hidden">
                    <img
                      src="/assets/img/image/service-details-img.png"
                      alt={service.title}
                      className="img-fluid w-100 rounded-4"
                    />
                  </div>

                  <h2 className="font-f-2 font-32 weight-700 mb-3">{service.title}</h2>
                  <p className="font-f-2 font-16 line-height-28 text-muted mb-4">
                    {service.description} We combine decades of proprietary market intelligence with deep localized networks to present buyers and developers with verified high-yield opportunities across London, Paris, Madrid, and Zurich.
                  </p>

                  <h3 className="font-f-2 font-24 weight-700 mb-3">Key Highlights</h3>
                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                        <i className="fa-solid fa-shield-halved text-primary font-24" />
                        <div>
                          <h6 className="font-f-2 weight-700 mb-0">Legal Compliance</h6>
                          <small className="text-muted">Rigorous title & boundary vetting</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                        <i className="fa-solid fa-chart-line text-primary font-24" />
                        <div>
                          <h6 className="font-f-2 weight-700 mb-0">Yield Forecasting</h6>
                          <small className="text-muted">Conservative IRR & rental models</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-f-2 font-24 weight-700 mb-3">Our Methodology</h3>
                  <p className="font-f-2 font-16 line-height-28 text-muted mb-4">
                    From preliminary site assessment to final notary closing, our dedicated client success managers supervise all legal filings, translation services, tax considerations, and property asset onboarding.
                  </p>

                  <div className="p-4 bg-primary text-white rounded-4 mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <div>
                      <h4 className="font-f-2 weight-700 mb-1 text-white">Need Customized Advice?</h4>
                      <p className="font-f-2 font-14 mb-0 text-white-50">Speak directly with an accredited European property advisor.</p>
                    </div>
                    <Link href="/contact" className="btn btn-light font-f-2 weight-700 px-4 py-2 text-nowrap">
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="p-4 border rounded-4 bg-white mb-4">
                  <h4 className="font-f-2 font-20 weight-700 mb-3">All Services</h4>
                  <ul className="list-unstyled mb-0 font-f-2">
                    {servicesData.map((s) => (
                      <li key={s.id} className="mb-2">
                        <Link
                          href={`/service/${s.slug}`}
                          className={`d-flex align-items-center justify-content-between p-3 rounded-3 text-decoration-none ${
                            s.slug === service.slug
                              ? 'bg-primary text-white'
                              : 'bg-light text-dark hover-bg-primary'
                          }`}
                        >
                          <span>{s.title}</span>
                          <i className="fa-solid fa-angle-right font-12" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 border rounded-4 bg-dark text-white text-center">
                  <h4 className="font-f-2 weight-700 mb-3 text-white">Direct Assistance</h4>
                  <p className="font-f-2 font-14 text-white-50 mb-4">Call our international helpline for immediate inquiries.</p>
                  <h3 className="font-f-2 weight-700 text-primary mb-3">+1 (555) 258-0556</h3>
                  <Link href="/contact" className="btn btn-outline-light w-100 font-f-2">
                    Contact Us
                  </Link>
                </div>
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
