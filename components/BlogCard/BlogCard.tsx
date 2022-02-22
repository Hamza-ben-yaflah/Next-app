import { Typography, Col, Row, Space } from "antd";
const { Title, Text, Paragraph } = Typography;
import React from "react";
import Image from "next/image";
import styles from "./Blog.module.css";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { IBlog } from "../../@types/generated/contentful";
import { Sys } from "contentful";
const classeRow = "reverse";

function BlogCard({ blog }: { blog: IBlog }) {
  return (
    <Space direction="vertical" size="large">
      <Row
        className={(blog.sys as Sys).revision! % 2 === 0 ? styles.reverse : ""}
      >
        <Col lg={12}>
          <Image
            alt="car Image"
            src={"https:" + blog.fields.carImage?.fields.file.url}
            width={600}
            height={400}
          />
        </Col>
        <Col lg={12} className={styles.colTwoBlog}>
          <Title level={2}>{blog.fields.title}</Title>
          <Paragraph>
            {blog.fields.description + "  "}
            <Link href={"/articles/" + blog.fields.slug}>
              <a>
                <Text type="danger">{blog.fields.details}</Text>
              </a>
            </Link>
          </Paragraph>
          <Title level={4}>
            <UserOutlined />
            {blog.fields.author}
          </Title>
        </Col>
      </Row>
    </Space>
  );
}

export default BlogCard;
