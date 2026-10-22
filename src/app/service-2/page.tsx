import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import servicesData from '@/data/services.json';

export default function Service2Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Services Layout 2" currentPage="Service 2" />

        <div className="service2-area sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Strategic <span className="after">Advisory</span> & Management
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    Comprehensive suite for high-net-worth individuals, institutional buyers, and property companies.
                  </p>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row">
              {servicesData.map((service, idx) => (
                <div key={service.id} className="col-lg-6 mb-4">
                  <div className="p-4 border rounded-4 bg-white d-flex flex-column flex-md-row gap-4 align-items-start">
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        minWidth: '70px',
                        borderRadius: '16px',
                        backgroundColor: '#e0f2fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img src={service.icon} alt={service.title} style={{ width: '36px', height: '36px' }} />
                    </div>
                    <div>
                      <span className="badge bg-light text-primary font-12 font-f-2 mb-2">Service 0{idx + 1}</span>
                      <h4 className="font-f-2 font-22 weight-700 mb-2">
                        <Link href={`/service/${service.slug}`} className="text-dark text-decoration-none">
                          {service.title}
                        </Link>
                      </h4>
                      <p className="font-f-2 font-15 text-muted line-height-24 mb-3">
                        {service.description}
                      </p>
                      <Link
                        href={`/service/${service.slug}`}
                        className="font-f-2 font-14 weight-700 text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                      >
                        Explore Service <i className="fa-solid fa-arrow-right font-12" />
                      </Link>
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
