import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { client } from "../client/contentful";

export async function getStaticProps() {
  const data = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: data.items,
    },
  };
}

function Blog({ blogs }: any) {
  return (
    <div>
      {blogs.map((blog: any) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
