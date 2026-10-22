import Link from 'next/link';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="siting-single-sliider">
      <div className="liting-slider-img comon-slider-img">
        <div className="img-border">
          <img src={property.image} alt={property.title} />
        </div>
      </div>
      <div className="space20" />
      <div className="liting-hadding-all hadding2">
        <div className="liting-hadding hadding2">
          <h4 className="font-f-2 font-18 line-height-18 weight-500">
            <Link href="/contact">{property.title}</Link>
          </h4>
          <div className="space8" />
          <p className="font-16 line-height-16 weight-400">{property.location}</p>
        </div>
        <div className="space24" />
        <div className="hadding-pricing">
          <div className="hadding-pricing-1">
            <h2 className="font-f-2 font-26 line-height-26 weight-500">{property.price}</h2>
          </div>
          <div className="liting-hadding-icon">
            <div className="liting-hadding-icon-1">
              <button aria-label="Favorite" style={{ border: 'none', background: 'none', padding: 0 }}>
                <img src="/assets/img/icons/liting-like1.svg" alt="Like" />
              </button>
            </div>
            <div className="liting-hadding-icon-1 liting-hadding-icon-2">
              <button aria-label="Bookmark" style={{ border: 'none', background: 'none', padding: 0 }}>
                <img src="/assets/img/icons/liting-like2.svg" alt="Bookmark" />
              </button>
            </div>
          </div>
        </div>
        <div className="liting-box-bottom-icons">
          <div className="liting-ion">
            <div>
              <img src="/assets/img/icons/liting-3.svg" alt="Bedrooms" />
            </div>
            <div className="featured-p">
              <p className="font-f-2">{property.beds} Bed</p>
            </div>
          </div>
          <div className="liting-ion">
            <div>
              <img src="/assets/img/icons/liting-2.svg" alt="Bathrooms" />
            </div>
            <div className="featured-p">
              <p className="font-f-2">{property.baths} Bath</p>
            </div>
          </div>
          <div className="liting-ion">
            <div>
              <img src="/assets/img/icons/liting-1.svg" alt="Area" />
            </div>
            <div className="featured-p">
              <p className="font-f-2">{property.sqft} SQFT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
