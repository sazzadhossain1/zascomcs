import Link from 'next/link';

interface PageHeroProps {
  title: string;
  currentPage: string;
  parentPage?: {
    title: string;
    href: string;
  };
}

export default function PageHero({
  title,
  currentPage,
  parentPage = { title: 'Home', href: '/' },
}: PageHeroProps) {
  return (
    <div className="pages-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-hadding hadding2">
              <h1
                className="font-f-2 weight-700 font-40 font-lg-60 line-height-48 line-height-lg-65"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <span className="after">{title}</span>
              </h1>
              <p className="font-f-2 font-16 weight-500 line-height-16">
                <Link href={parentPage.href}>{parentPage.title}</Link>{' '}
                <span>
                  <i className="fa-solid fa-angle-right" />
                </span>{' '}
                {currentPage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
