import Link from "next/link";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ChairmanMessage from "./ChairmanMessage";

import { InnerPageData } from "@/data/innerPages";
import styles from "./InnerPage.module.css";

interface InnerPageProps {
  page: InnerPageData;
}

export default function InnerPage({ page }: InnerPageProps) {
  const isChairmanPage =
    page.category.toLowerCase() === "about" &&
    (page.title.toLowerCase().includes("president") ||
      page.title.toLowerCase().includes("chairman"));

  return (
    <>
      {/* HEADER */}
      <Header variant="home1" />

      <main className={styles.page}>
        {/* HERO SECTION - HIDDEN ON PRESIDENT'S MESSAGE PAGE */}
        {!isChairmanPage && (
          <section className={styles.hero}>
            <div className={styles.container}>
              <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/">Home</Link>

                <span>/</span>

                <span>{page.category}</span>

                <span>/</span>

                <span aria-current="page">{page.title}</span>
              </nav>

              <h1 className={styles.title}>{page.title}</h1>
            </div>
          </section>
        )}

        {/* PAGE CONTENT */}
        {isChairmanPage ? (
          <ChairmanMessage />
        ) : (
          <section className={styles.contentSection}>
            <div className={styles.container}>
              <div className={styles.contentCard}>
                <h2>{page.title}</h2>

                <p>{page.description}</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
