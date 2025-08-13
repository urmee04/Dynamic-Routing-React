//This page displays the content of a single blog post

import { useParams } from "react-router-dom";
//import the finder function
import { getPostBySlug } from "../lib/posts";
import NotFound from "./NotFound";

const BlogPost = () => {
  //useParams hook extracts URL parameters and slug must match the route path
  const { slug } = useParams<{ slug: string }>();

  //find the post using the slug from the URL
  // The non-null assertion (!) tells TS that slug will not be undefined
  const post = getPostBySlug(slug!);

  // If no post is found for the given slug, render the NotFound component
  if (!post) {
    return <NotFound />;
  }

  //If the post is found, display its title and content
  return (
    <article className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </article>
  );
};

export default BlogPost;
