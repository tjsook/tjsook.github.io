export interface Blog {
  // type also works
  title: string;
  date: string;
  description: string;
  content: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Blog 1",
    date: "Oct 16, 2025",
    description: "This is my first blog using the H4I Milestone 1",
    content:
      "Welcome to my first blog post!\n\nHere I am testing paragraph division\n\nStay tuned for more posts about my web development journey!",
    image: "/img1.jpg",
    imageAlt: "This is a test image of me and my friends",
    slug: "blog-number-one",
  },
  {
    title: "Blog 2",
    date: "Also, Oct 16, 2025",
    description: "This is my second blog using the H4I Milestone 1",
    content:
      "Welcome to my second blog post!\n\nHere I am testing paragraph division\n\nStay tuned for more posts about my web development journey!",
    image: "/img2.jpg",
    imageAlt: "This is a test image of me and my friends",
    slug: "blog-number-two",
  },
];

export default blogs;
