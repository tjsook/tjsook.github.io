import Link from "next/link";
import Image from "next/image";
import blogs, { Blog } from "../../blogData";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  console.log("Received slug:", resolvedParams.slug); // Debug log
  console.log(
    "Available blogs:",
    blogs.map((b) => b.slug)
  ); // Debug log

  // Find the blog post by slug
  const blog = blogs.find((b: Blog) => b.slug === resolvedParams.slug);

  // If blog not found, show 404
  if (!blog) {
    console.log("Blog not found for slug:", resolvedParams.slug); // Debug log
    return (
      <main className="main-blog-single">
        <div className="back-button">
          <Link href="/blog" style={{ textDecoration: "none" }}>
            ← back to blog
          </Link>
        </div>
        <h1>Blog post not found</h1>
        <p>Slug: {resolvedParams.slug}</p>
        <p>Available slugs: {blogs.map((b) => b.slug).join(", ")}</p>
      </main>
    );
  }

  return (
    <main className="main-blog-single">
      <div className="back-button">
        <Link href="/blog" style={{ textDecoration: "none" }}>
          ← back to blog
        </Link>
        <Link href="/" style={{ textDecoration: "none", marginLeft: "20px" }}>
          home
        </Link>
      </div>

      <article className="blog-article">
        <header className="blog-header">
          <h1 className="blog-title-single">{blog.title}</h1>
          <p className="blog-date-single">{blog.date}</p>
        </header>

        <div className="blog-image-container">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            width={600}
            height={400}
            className="blog-image-single"
          />
        </div>

        <div className="blog-content">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
