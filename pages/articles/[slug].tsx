import React from "react";
import { Space, Typography } from "antd";
import Image from "next/image";
import styles from "./article.module.css";

const { Title, Text, Paragraph } = Typography;

const client = require("contentful").createClient({
  space: process.env.CONTENTFULLY_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({ content_type: "blog" });
  return {
    paths: data.items.map((item: any) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  let data = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });
  console.log(data, "data");

  return {
    props: {
      article: data.items[0],
    },
  };
}

function Article({ article }: any) {
  return (
    <Space className={styles.article} size="large">
      <Title>{article.fields.title}</Title>
      <Title level={2}>{article.fields.author}</Title>
      <Image
        alt="car Image"
        src={"https:" + article.fields.carImage.fields.file.url}
        width={600}
        height={300}
      />
      <Paragraph>{article.fields.description}</Paragraph>
    </Space>
  );
}

export default Article;
