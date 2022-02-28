import React from "react";
import { Space, Typography } from "antd";
import Image from "next/image";
import styles from "./article.module.css";
import { IBlog } from "../../@types/generated/contentful";

const { Title, Paragraph } = Typography;

interface Params {
  params: { slug: string };
}

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({ content_type: "blog" });
  const paths: Params[] = data.items.map((item: IBlog) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  let data = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  return {
    props: {
      article: data.items[0],
    },
  };
}

interface ArticleProps {
  article: IBlog;
}

function Article({ article }: ArticleProps) {
  return (
    <Space className={styles.article} size="large">
      <Title>{article.fields.title}</Title>
      <Title level={2}>{article.fields.author}</Title>
      <Image
        alt="car Image"
        src={"https:" + article.fields.carImage?.fields.file.url}
        width={600}
        height={300}
      />
      <Paragraph>{article.fields.description}</Paragraph>
    </Space>
  );
}

export default Article;
