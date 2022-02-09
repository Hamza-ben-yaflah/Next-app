import React from "react";
import { Typography, Button } from "antd";
import styles from "./card.module.css";
interface CardProp {
  title: string;
  description: string;
  Click: string;
}

const { Title, Paragraph } = Typography;

function Card({ title, description, Click }: CardProp) {
  return (
    <div className={styles.card}>
      <Title level={4} italic>
        {title}
      </Title>
      <Paragraph>{description}</Paragraph>
      <Button type="primary" size="large">
        {Click}
      </Button>
    </div>
  );
}

export default Card;
