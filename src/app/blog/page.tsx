import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PageHero from '@/components/common/PageHero';
import Newsletter from '@/components/common/Newsletter';
import blogsData from '@/data/blogs.json';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Our Blog" currentPage="Blog" />

        <div className="blog-page sp2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <div className="hadding2">
                  <h1 className="font-f-2 weight-700 font-30 font-lg-45 line-height-30 line-height-lg-45">
                    Latest <span className="after">News</span> & Insights
                  </h1>
                  <div className="space16" />
                  <p className="font-18 line-height-p-30 font-f-2 weight-400">
                    Stay up to date with real estate intelligence, economic trends, and property design innovations.
                  </p>
                </div>
                <div className="space60" />
              </div>
            </div>

            <div className="row">
              {blogsData.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6 mb-5">
                  <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <Link href={`/blog/${post.slug}`}>
                        <img src={post.image} alt={post.title} className="card-img-top w-100 object-fit-cover" style={{ height: '240px' }} />
                      </Link>
                      <span className="badge bg-primary position-absolute bottom-0 start-0 m-3 font-f-2 font-13 px-3 py-2">
                        {post.category}
                      </span>
                    </div>

                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex align-items-center gap-3 text-muted font-f-2 font-13 mb-3">
                        <span><i className="fa-solid fa-calendar me-1" /> {post.date}</span>
                        <span><i className="fa-solid fa-user me-1" /> {post.author}</span>
                      </div>

                      <h4 className="font-f-2 font-20 weight-700 mb-3">
                        <Link href={`/blog/${post.slug}`} className="text-dark text-decoration-none">
                          {post.title}
                        </Link>
                      </h4>

                      <p className="font-f-2 font-15 text-muted flex-grow-1 line-height-24">
                        {post.excerpt}
                      </p>

                      <div className="mt-3 pt-3 border-top">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="font-f-2 font-14 weight-700 text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                        >
                          Read Article <i className="fa-solid fa-arrow-right font-12" />
                        </Link>
                      </div>
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
