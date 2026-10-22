import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import servicesData from '@/data/services.json';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Our Services" currentPage="Our Services" />

        <div className="service-page sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    End-to-End <span className="after">Real Estate</span> Solutions
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    From investment scoping and legal cross-checks to leasing management and architectural refurbishment.
                  </p>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row">
              {servicesData.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 p-4 border rounded-4 shadow-sm hover-shadow transition">
                    <div className="mb-4">
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '12px',
                          backgroundColor: '#f1f5f9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <img src={service.icon} alt={service.title} style={{ width: '32px', height: '32px' }} />
                      </div>
                    </div>
                    <div className="card-body p-0 d-flex flex-column">
                      <h4 className="font-f-2 font-22 weight-700 mb-2">
                        <Link href={`/service/${service.slug}`} className="text-dark text-decoration-none">
                          {service.title}
                        </Link>
                      </h4>
                      <p className="font-f-2 font-15 text-muted flex-grow-1 line-height-24">
                        {service.description}
                      </p>
                      <div className="mt-3">
                        <Link
                          href={`/service/${service.slug}`}
                          className="font-f-2 font-15 weight-500 text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                        >
                          Read Details <i className="fa-solid fa-arrow-right font-12" />
                        </Link>
                      </div>
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
