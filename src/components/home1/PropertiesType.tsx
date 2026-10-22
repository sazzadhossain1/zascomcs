import Link from 'next/link';

const propertyTypes = [
  { name: 'Apartments', count: '25,690 Listing Available.', icon: '/assets/img/icons/porpertice-icon8.svg', delay: '600' },
  { name: 'Duplexes', count: '14,230 Listing Available.', icon: '/assets/img/icons/porpertice-icon5.svg', delay: '800' },
  { name: 'Plots', count: '8,410 Listing Available.', icon: '/assets/img/icons/porpertice-icon7.svg', delay: '1000' },
  { name: 'Houses', count: '32,150 Listing Available.', icon: '/assets/img/icons/porpertice-icon3.svg', delay: '1300' },
  { name: 'Commercial', count: '11,540 Listing Available.', icon: '/assets/img/icons/porpertice-icon6.svg', delay: '800' },
  { name: 'Townhouses', count: '9,870 Listing Available.', icon: '/assets/img/icons/porpertice-icon2.svg', delay: '1000' },
  { name: 'Rooms', count: '18,920 Listing Available.', icon: '/assets/img/icons/porpertice-icon5.svg', delay: '1300' },
  { name: 'Hotels & Restaurant', count: '5,340 Listing Available.', icon: '/assets/img/icons/porpertice-icon1.svg', delay: '1000' },
];

export default function PropertiesType() {
  return (
    <div className="propertice sp2" id="Properties">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="hadding2" data-aos="fade-up" data-aos-duration="600">
              <h1
                className="font-f-2 weight-700 font-30 font-lg-45 line-height-lg-55"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                Browse by <br />
                <span className="after">properties</span> type.
              </h1>
            </div>
          </div>
        </div>

        <div className="space40" />

        <div className="row">
          {propertyTypes.map((pt, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4">
              <div data-aos="fade-up" data-aos-duration={pt.delay}>
                <div className="porpertice-slider-box">
                  <div className="porpertice-box-icon">
                    <img src={pt.icon} alt={pt.name} />
                  </div>
                  <div className="space60" />
                  <div className="hadding2 font-f-2">
                    <h4 className="font-20 line-height-20 weight-500">
                      <Link href="/contact">{pt.name}</Link>
                    </h4>
                    <div className="space16" />
                    <p className="font-16 line-height-16 weight-400">{pt.count}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
