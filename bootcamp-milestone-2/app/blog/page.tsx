import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function BlogPage() {
  return (
    <main className="main-bio">
      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} /> // This is how we call the component
        ))}
      </div>
    </main>
  );
}
