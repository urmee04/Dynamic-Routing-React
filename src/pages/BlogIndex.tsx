import { Link } from "react-router-dom";
//import the mock data
import { posts } from "../lib/posts";

const BlogIndex = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-8 border-b pb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {/* Map over the posts array to create a list item for each post */}
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link
              //dynamic link using the post's slug
              to={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
