import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import FaqAccordion from '@/components/common/FaqAccordion';
import faqsData from '@/data/faqs.json';

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Frequently Asked Questions" currentPage="FAQ" />

        <div className="faq-area sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Common Questions & <span className="after">Answers</span>
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    Everything you need to know about buying, renting, and listing properties on Avigo.
                  </p>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 m-auto">
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
