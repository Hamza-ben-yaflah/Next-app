import React from "react";
import styles from "./footer.module.css";
import { Layout, Col, Row } from "antd";
import { Typography } from "antd";
import Link from "next/link";

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
            <Link href="https://github.com/Hamza-ben-yaflah" passHref>
              <GithubOutlined style={{ fontSize: 35 }} />
            </Link>
            <Link href="https://www.facebook.com/hamza.benyaflah.1/" passHref>
              <FacebookOutlined style={{ fontSize: 35 }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hamza-ben-yaflah-209913200/"
              passHref
            >
              <LinkedinOutlined style={{ fontSize: 35 }} />
            </Link>
            <Link
              href="https://www.instagram.com/hamzabenyaflah/?hl=fr"
              passHref
            >
              <InstagramOutlined style={{ fontSize: 35 }} />
            </Link>
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
