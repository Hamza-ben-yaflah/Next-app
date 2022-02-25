import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { client } from "../client/contentful";
import { IBlog } from "../@types/generated/contentful";

export async function getStaticProps() {
  const data = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: data.items,
    },
  };
}

function Blog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div>
      {blogs.map((blog: IBlog) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
