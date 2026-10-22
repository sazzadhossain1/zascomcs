import { notFound } from "next/navigation";
import type { Metadata } from "next";

import InnerPage from "@/components/common/InnerPage";
import { innerPages } from "@/data/innerPages";

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(innerPages).map((path) => {
    const [, category, slug] = path.split("/");

    return {
      category,
      slug,
    };
  });
}

export function generateMetadata({ params }: PageProps): Metadata {
  const path = `/${params.category}/${params.slug}`;
  const page = innerPages[path];

  if (!page) {
    return {
      title: "Page Not Found | ZASCOMCS",
    };
  }

  return {
    title: `${page.title} | ZASCOMCS`,
    description: page.description,
  };
}

export default function DynamicInnerPage({ params }: PageProps) {
  const path = `/${params.category}/${params.slug}`;
  const page = innerPages[path];

  if (!page) {
    notFound();
  }

  return <InnerPage page={page} />;
}
