import React from "react";
import styles from "./footer.module.css";
import { Layout, Col, Row } from "antd";
import { Typography } from "antd";

const { Title, Text } = Typography;
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

function FooterP() {
  return (
    <div>
      <Footer className={styles.Footer}>
        <Row>
          <Col lg={8} className={styles.colFooter}>
            <GithubOutlined style={{ fontSize: 35 }} />
            <FacebookOutlined style={{ fontSize: 35 }} />
            <LinkedinOutlined style={{ fontSize: 35 }} />
            <InstagramOutlined style={{ fontSize: 35 }} />
          </Col>
          <Col lg={8} className={styles.colFooter}>
            <Title level={5}>
              BSRcars website ©2022 Created by Hamza Ben Yaflah
            </Title>
          </Col>
          <Col lg={8} className={styles.colFooter}>
            <Title level={5}>Contact us via Email</Title>
            <GoogleOutlined />
          </Col>
        </Row>
      </Footer>
    </div>
  );
}

export default FooterP;
