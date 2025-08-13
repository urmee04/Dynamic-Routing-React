//define the structure of a single blog post object
export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

//create an array of mock blog posts
export const posts: Post[] = [
  {
    id: 1,
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    content:
      "React is a powerful library for building user interfaces. This post covers the basics...",
  },
  {
    id: 2,
    slug: "dynamic-routing-in-react-router",
    title: "Dynamic Routing in React Router",
    content:
      "Learn how to create dynamic routes using URL parameters to build flexible web applications.",
  },
  {
    id: 3,
    slug: "state-management-with-context",
    title: "State Management with Context API",
    content:
      "The Context API provides a way to pass data through the component tree without prop-drilling.",
  },
];

//function to find a post by its slug
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
