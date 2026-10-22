import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import teamData from '@/data/team.json';

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Our Team" currentPage="Our Team" />

        <div className="about-team sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Meet Our Expert <span className="after">Advisors</span>
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    A global team of seasoned real estate strategists, architects, and legal partners.
                  </p>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row">
              {teamData.concat(teamData).map((member, idx) => (
                <div key={`${member.id}-${idx}`} className="col-lg-3 col-md-6 mb-4">
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
