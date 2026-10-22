import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import blogsData from '@/data/blogs.json';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = blogsData.find((b) => b.slug === params.slug) || blogsData[0];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          title={post.title}
          currentPage={post.title}
          parentPage={{ title: 'Blog', href: '/blog' }}
        />

        <div className="blog-details-area sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <article className="blog-details-content">
                  <div className="mb-4 rounded-4 overflow-hidden">
                    <img src={post.image} alt={post.title} className="img-fluid w-100 rounded-4" />
                  </div>

                  <div className="d-flex align-items-center gap-3 text-muted font-f-2 font-14 mb-4">
                    <span><i className="fa-solid fa-folder me-1 text-primary" /> {post.category}</span>
                    <span><i className="fa-solid fa-calendar me-1 text-primary" /> {post.date}</span>
                    <span><i className="fa-solid fa-user me-1 text-primary" /> By {post.author}</span>
                    <span><i className="fa-solid fa-comments me-1 text-primary" /> 3 Comments</span>
                  </div>

                  <h1 className="font-f-2 font-32 weight-700 mb-4">{post.title}</h1>

                  <p className="font-f-2 font-16 line-height-28 text-muted mb-4">
                    {post.excerpt} Navigating competitive urban real estate markets demands disciplined financial preparation, clear zoning evaluations, and sharp timeline management. Whether investing in buy-to-let apartments or acquiring a historic villa, establishing a transparent purchase strategy is key to long-term wealth creation.
                  </p>

                  <blockquote className="p-4 bg-light border-start border-primary border-4 rounded-3 my-4">
                    <p className="font-f-2 font-18 fst-italic mb-2 text-dark">
                      &quot;Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.&quot;
                    </p>
                    <cite className="font-f-2 font-14 text-muted weight-600">— Franklin D. Roosevelt</cite>
                  </blockquote>

                  <h3 className="font-f-2 font-24 weight-700 mb-3">Key Factors Before Making an Offer</h3>
                  <p className="font-f-2 font-16 line-height-28 text-muted mb-4">
                    Before putting pen to paper on any purchase contract, ensure you have conducted a comprehensive legal assessment of the deed, verified local municipal taxes, and consulted with a chartered surveyor to uncover structural or thermal efficiency bottlenecks.
                  </p>

                  <div className="row mb-4">
                    <div className="col-md-6 mb-3">
                      <div className="rounded-3 overflow-hidden">
                        <img src="/assets/img/image/blog-details-video.png" alt="Property interior" className="img-fluid w-100 rounded-3" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="rounded-3 overflow-hidden">
                        <img src="/assets/img/image/blog-details-carosul.png" alt="Living room" className="img-fluid w-100 rounded-3" />
                      </div>
                    </div>
                  </div>

                  {/* Share & Tags */}
                  <div className="d-flex flex-wrap align-items-center justify-content-between p-3 border-top border-bottom my-5 gap-3">
                    <div className="d-flex align-items-center gap-2">
                      <strong className="font-f-2 font-15">Tags:</strong>
                      <span className="badge bg-light text-dark font-f-2">Real Estate</span>
                      <span className="badge bg-light text-dark font-f-2">Investment</span>
                      <span className="badge bg-light text-dark font-f-2">Luxury</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <strong className="font-f-2 font-15">Share:</strong>
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" aria-label="Share on Twitter"><i className="fa-brands fa-twitter" /></a>
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f" /></a>
                      <a href="#" className="btn btn-sm btn-outline-secondary rounded-circle" aria-label="Share on LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
                    </div>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="p-4 border rounded-4 bg-white mb-4">
                  <h4 className="font-f-2 font-20 weight-700 mb-3">Recent Posts</h4>
                  <div className="d-flex flex-column gap-3">
                    {blogsData.map((b) => (
                      <div key={b.id} className="d-flex align-items-center gap-3">
                        <img src={b.image} alt={b.title} style={{ width: '70px', height: '70px', borderRadius: '10px', objectFit: 'cover' }} />
                        <div>
                          <small className="text-muted font-f-2 font-12">{b.date}</small>
                          <h6 className="font-f-2 font-14 weight-600 mb-0 mt-1">
                            <Link href={`/blog/${b.slug}`} className="text-dark text-decoration-none">
                              {b.title}
                            </Link>
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border rounded-4 bg-white mb-4">
                  <h4 className="font-f-2 font-20 weight-700 mb-3">Categories</h4>
                  <ul className="list-unstyled mb-0 font-f-2 font-15">
                    <li className="d-flex justify-content-between py-2 border-bottom"><Link href="/blog" className="text-dark text-decoration-none">Real Estate Market</Link> <span>(14)</span></li>
                    <li className="d-flex justify-content-between py-2 border-bottom"><Link href="/blog" className="text-dark text-decoration-none">Architecture & Design</Link> <span>(09)</span></li>
                    <li className="d-flex justify-content-between py-2 border-bottom"><Link href="/blog" className="text-dark text-decoration-none">Commercial Loans</Link> <span>(05)</span></li>
                    <li className="d-flex justify-content-between py-2"><Link href="/blog" className="text-dark text-decoration-none">Investment Strategy</Link> <span>(18)</span></li>
                  </ul>
                </div>
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
