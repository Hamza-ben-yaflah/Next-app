import React, { useState } from "react";
import styles from "./Landing.module.css";
import { Row, Col, Button, Space, Form, Input } from "antd";
import { Typography } from "antd";
import Card from "../Card/Card";
import Image from "next/image";
import contact from "../../public/contact.jpg";

const { TextArea } = Input;
const { Title, Text } = Typography;

const Landig = () => {
  return (
    <div>
      <Space direction="vertical" size="large">
        <div className={styles.container}>
          <section className={styles.wraper}>
            <Title style={{ color: "white" }} underline>
              BUY.SEll.RENT
            </Title>
            <Text style={{ color: "white" }}>
              BSRcars make it easy for you to choose your car
            </Text>
          </section>
        </div>
        <Space direction="vertical" size={120}>
          <section>
            <Row className={styles.titleContainer}>
              <Title level={1}>Looking for something in particular?</Title>
            </Row>
            <Row gutter={48} justify="space-between">
              <Col lg={8} className={styles.col}>
                <Card
                  title="Buy"
                  description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                  Click="Click here"
                />
              </Col>
              <Col lg={8} className={styles.col}>
                <Card
                  title="Sell"
                  description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                  Click="Click here"
                />
              </Col>
              <Col lg={8} className={styles.col}>
                <Card
                  title="Rent"
                  description="Choose your car to bur Choose your car to bur Choose your car to bur
        Choose your car to bur Choose your car to bur"
                  Click="Click here"
                />
              </Col>
            </Row>
          </section>

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
                    rules={[
                      { required: true, message: "Please input message" },
                    ]}
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
              <Col lg={16} className={styles.col2}>
                <Image
                  src={contact}
                  alt="contact image"
                  width={530}
                  height={500}
                />
              </Col>
            </Row>
          </section>
        </Space>
      </Space>
    </div>
  );
};

export default Landig;
