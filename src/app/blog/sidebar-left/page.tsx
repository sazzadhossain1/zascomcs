import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import blogsData from '@/data/blogs.json';

export default function BlogSidebarLeftPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Blog Sidebar Left" currentPage="Blog Left" />

        <div className="blog-page sp2">
          <div className="container">
            <div className="row">
              {/* Sidebar Left */}
              <div className="col-lg-4 order-2 order-lg-1">
                <div className="p-4 border rounded-4 bg-white mb-4">
                  <h4 className="font-f-2 font-20 weight-700 mb-3">Search</h4>
                  <div className="input-group">
                    <input type="text" className="form-control font-f-2" placeholder="Search articles..." />
                    <button className="btn btn-primary" type="button" aria-label="Search"><i className="fa-solid fa-search" /></button>
                  </div>
                </div>

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
              </div>

              {/* Main Content */}
              <div className="col-lg-8 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row">
                  {blogsData.map((post) => (
                    <div key={post.id} className="col-md-6 mb-4">
                      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                        <img src={post.image} alt={post.title} className="card-img-top w-100" style={{ height: '220px', objectFit: 'cover' }} />
                        <div className="card-body p-4 d-flex flex-column">
                          <small className="text-muted font-f-2 mb-2"><i className="fa-solid fa-calendar me-1" /> {post.date}</small>
                          <h5 className="font-f-2 font-18 weight-700 mb-2">
                            <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none">{post.title}</Link>
                          </h5>
                          <p className="font-f-2 font-14 text-muted flex-grow-1">{post.excerpt}</p>
                          <Link href={`/blog/${post.slug}`} className="font-f-2 font-14 weight-700 text-primary text-decoration-none">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
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
