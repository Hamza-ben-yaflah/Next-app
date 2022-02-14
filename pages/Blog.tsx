import React from "react";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard/BlogCard";
import { Row, Col } from "antd";

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFULLY_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: data.items,
    },
  };
}

function Blog({ blogs }: any) {
  console.log(blogs);

  return (
    <div>
      {blogs.map((blog: any) => (
        <BlogCard key={blog.sys.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
