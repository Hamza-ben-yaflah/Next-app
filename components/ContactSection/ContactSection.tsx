import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const { TextArea } = Input;
import styles from "./ContactSection.module.css";
import Image from "next/image";
import contact from "../../public/contact.jpg";

function ContactSection() {
  return (
    <section>
      <Row gutter={24}>
        <Col lg={8} className={styles.col}>
          <Title level={1}>Drop us a line</Title>
          <Form layout="vertical">
            <Form.Item
              label="Full Name"
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="what`s your full name ?" />
            </Form.Item>
            <Form.Item
              label="Email address"
              name="email"
              rules={[{ required: true, message: "Please input Email" }]}
            >
              <Input placeholder="you@example.com" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please input message" }]}
            >
              <TextArea
                rows={4}
                placeholder="Write your message for the team"
              />
            </Form.Item>
            <Button type="primary" className={styles.btn} size="large">
              Submit Message
            </Button>
          </Form>
        </Col>
        <Col lg={16} className={styles.col2Sectio3}>
          <Image src={contact} alt="contact image" width={530} height={500} />
        </Col>
      </Row>
    </section>
  );
}

export default ContactSection;
