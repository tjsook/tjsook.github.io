import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <main className="main-bio">
        <div id="blog-container">
          <p>No blogs found or an error occurred.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="main-bio">
      <div id="blog-container">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            slug={blog.slug}
            date={blog.date}
            description={blog.description}
            content={blog.content}
            image={blog.image}
            imageAlt={blog.imageAlt}
          />
        ))}
      </div>
    </main>
  );
}
