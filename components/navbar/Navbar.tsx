import React from "react";
import { Layout, Button, Input } from "antd";
import styles from "./Navbar.module.css";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import car from "./car.jpg";

const { Header } = Layout;
const { Search } = Input;
function Navbar() {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.imageContainer}>
          <Image
            src={car}
            alt="car image"
            width={120}
            height={70}
            className={styles.imgCar}
          />
        </div>
        <Search placeholder="Search" style={{ width: 200 }} size="large" />

        <Button type="primary" className={styles.btn} size="large">
          Log in
        </Button>
        <Button type="primary" className={styles.btn} size="large">
          Sign up
        </Button>
      </Header>
    </div>
  );
}

export default Navbar;
