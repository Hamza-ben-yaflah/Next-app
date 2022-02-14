import { Typography, Col, Row, Space } from "antd";
const { Title, Text, Paragraph } = Typography;
import React from "react";
import Image from "next/image";
import styles from "./Blog.module.css";
import Link from "next/link";

const classeRow = "reverse";

function BlogCard({ blog }: any) {
  return (
    <Space direction="vertical" size="large">
      <Row className={blog.sys.revision % 2 === 0 ? styles.reverse : ""}>
        <Col lg={12}>
          <Image
            alt="car Image"
            src={"https:" + blog.fields.carImage.fields.file.url}
            width={600}
            height={400}
          />
        </Col>
        <Col lg={12}>
          <Title level={2}>{blog.fields.title}</Title>
          <Paragraph>
            {blog.fields.description + "  "}
            <Link href={"/articles/" + blog.fields.slug}>
              <a>
                <Text>{blog.fields.details}</Text>
              </a>
            </Link>
          </Paragraph>
          <Title>{blog.fields.author}</Title>
        </Col>
      </Row>
    </Space>
  );
}

export default BlogCard;
