import React from "react";
import { Typography, Button } from "antd";
import styles from "./card.module.css";
import Link from "next/link";

const { Title, Paragraph } = Typography;

function Card({ card }: any) {
  console.log(card);

  return (
    <div className={styles.card}>
      <Title level={4} italic>
        {card.fields.title}
      </Title>
      <Paragraph>{card.fields.descreption}</Paragraph>
      <Button type="primary" size="large">
        <Link href={card.fields.button.fields.url} passHref>
          <a>{card.fields.button.fields.title}</a>
        </Link>
      </Button>
    </div>
  );
}

export default Card;
