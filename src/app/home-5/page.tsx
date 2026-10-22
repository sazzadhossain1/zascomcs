import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import servicesData from '@/data/services.json';
import teamData from '@/data/team.json';
import Newsletter from '@/components/common/Newsletter';

export default function Home5Page() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Area */}
        <div className="hero-area home5-hero sp2 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <span className="badge bg-primary text-white font-f-2 px-3 py-2 mb-3">
                  Strategic Real Estate Advisory
                </span>
                <h1 className="font-f-2 font-40 font-lg-60 weight-700 line-height-48 line-height-lg-65 text-dark mb-4">
                  Elevate Your Property Portfolio With <span className="after">Expert Guidance.</span>
                </h1>
                <p className="font-f-2 font-18 text-muted line-height-32 mb-4">
                  We empower family offices, high-net-worth individuals, and corporate institutions with data-driven real estate acquisitions and structured wealth growth across Europe.
                </p>
                <div className="d-flex gap-3">
                  <Link href="/contact" className="btn btn-primary font-f-2 px-4 py-3 weight-700">
                    Book Free Strategy Session
                  </Link>
                  <Link href="/about" className="btn btn-outline-dark font-f-2 px-4 py-3 weight-700">
                    Our Track Record
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src="/assets/img/image/home5-hero-img.png"
                  alt="Consulting Advisory"
                  className="img-fluid rounded-4 shadow"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Services */}
        <div className="services-section sp2">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="font-f-2 font-36 weight-700">Strategic Practice Areas</h1>
              <p className="font-f-2 font-16 text-muted">Focused cross-border real estate solutions tailored to client objectives.</p>
            </div>

            <div className="row">
              {servicesData.map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 p-4 border rounded-4 shadow-sm">
                    <div className="mb-3">
                      <img src={service.icon} alt={service.title} style={{ width: '40px', height: '40px' }} />
                    </div>
                    <h4 className="font-f-2 font-22 weight-700 mb-2">
                      <Link href={`/service/${service.slug}`} className="text-dark text-decoration-none">
                        {service.title}
                      </Link>
                    </h4>
                    <p className="font-f-2 font-15 text-muted flex-grow-1">
                      {service.description}
                    </p>
                    <Link href={`/service/${service.slug}`} className="font-f-2 font-14 weight-700 text-primary text-decoration-none">
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisors */}
        <div className="advisors-section sp2 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="font-f-2 font-36 weight-700">Senior Partners & Directors</h1>
              <p className="font-f-2 font-16 text-muted">Over $2.4B in European property transactions structured and closed.</p>
            </div>

            <div className="row">
              {teamData.map((member) => (
                <div key={member.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-circle mx-auto mb-3"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <h5 className="font-f-2 font-18 weight-700 mb-1">{member.name}</h5>
                    <p className="font-f-2 font-14 text-muted mb-0">{member.role}</p>
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
