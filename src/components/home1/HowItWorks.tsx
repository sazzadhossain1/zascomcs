import Link from 'next/link';

const steps = [
  {
    icon: '/assets/img/icons/works-icon-1.svg',
    title: 'Choose a property',
    description: 'Browse thousands of curated and verified properties in Europe with complete transparent pricing.',
    duration: '700',
  },
  {
    icon: '/assets/img/icons/works-icon-2.svg',
    title: 'Visit the property',
    description: 'Schedule in-person or live guided 3D virtual tours at your convenience with our local experts.',
    duration: '1000',
  },
  {
    icon: '/assets/img/icons/works-icon-3.svg',
    title: 'Close the deal',
    description: 'Finalize terms, sign digital agreements securely, and receive seamless legal notary support.',
    duration: '1300',
  },
];

export default function HowItWorks() {
  return (
    <div className="works sp2">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto text-center">
            <div className="hadding2" data-aos="fade-up" data-aos-duration="600">
              <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                How it <span className="after">works</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="space40" />

        <div className="row">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-4 text-center">
              <div
                className="work-box"
                data-aos="fade-up"
                data-aos-duration={step.duration}
              >
                <div className="work-box-img">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="space32" />
                <div className="hadding2">
                  <h4 className="font-20 line-height-20 weight-500">
                    <Link className="home2-a weight-500" href="/contact">
                      {step.title}
                    </Link>
                  </h4>
                  <div className="space16" />
                  <p className="font-16 line-height-28 font-f-2 weight-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
