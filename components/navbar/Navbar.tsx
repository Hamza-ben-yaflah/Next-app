import React from "react";
import { Layout, Button, Input, Menu } from "antd";
import styles from "./Navbar.module.css";
import Image from "next/image";
import car from "./car.jpg";
import Link from "next/link";

import {
  HomeOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Search } = Input;

function Navbar() {
  return (
    <Header
      className={styles.header}
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={car}
          alt="car image"
          width={70}
          height={50}
          className={styles.imgCar}
        />
        <Link href="/" passHref>
          <Button
            type="link"
            className={styles.btn}
            size="large"
            icon={<HomeOutlined />}
          >
            Home
          </Button>
        </Link>
        <Button
          type="link"
          className={styles.btn}
          size="large"
          icon={<QuestionCircleOutlined />}
        >
          About
        </Button>
        <Button
          type="link"
          className={styles.btn}
          size="large"
          icon={<CustomerServiceOutlined />}
        >
          Service
        </Button>

        <Button
          type="link"
          className={styles.btn}
          size="large"
          icon={<SnippetsOutlined />}
        >
          <Link href="/Blog" passHref>
            <a>Blog</a>
          </Link>
        </Button>
      </div>
      <div className={styles.loginContainer}>
        <Search placeholder="Search" style={{ width: 300 }} size="large" />
        <Button type="primary" className={styles.btn} size="large">
          <Link href="/LoginRegister" passHref>
            <a>Log in</a>
          </Link>
        </Button>
        <Button type="primary" className={styles.btn} size="large">
          <Link href="/RegisterPage" passHref>
            <a>Sign up</a>
          </Link>
        </Button>
      </div>
    </Header>
  );
}

export default Navbar;
