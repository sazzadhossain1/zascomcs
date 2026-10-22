import Link from 'next/link';
import { City } from '@/types';

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="citie-box">
      <div className="citie-box-img text-center">
        <img src={city.image} alt={city.name} />
      </div>
      <div className="citie-haddings">
        <div>
          <div className="citie-hadding hadding2">
            <h4 className="font-f-2 line-height-22 font-20 weight-500">{city.name}</h4>
            <div className="space10" />
            <p className="font-f-2 font-16 line-height-16 weight-400">{city.listings}</p>
          </div>
        </div>
        <div>
          <div className="citie-bottom-btn">
            <Link className="font-f-2 font-16 weight-500" href="/contact">
              View Listing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
