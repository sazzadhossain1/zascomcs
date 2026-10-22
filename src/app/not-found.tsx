import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-5 text-center" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="font-f-2 font-lg-80 font-50 weight-800 text-primary mb-3">404</h1>
              <h2 className="font-f-2 font-30 weight-700 mb-3">Oops! Page Not Found</h2>
              <p className="font-f-2 font-16 text-muted mb-4">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <Link href="/" className="btn btn-primary font-f-2 px-4 py-3 weight-700">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
