import React from "react";
import { Typography, Button } from "antd";
import styles from "./card.module.css";
import Link from "next/link";
// interface CardProp {
//   title: string;
//   description: string;
//   Click: string;
//   LinkTo: string;
// }

const { Title, Paragraph } = Typography;

function Card({ card }: any) {
  console.log(card);

  return (
    <div className={styles.card}>
      <Title level={4} italic>
        {card.fields.title}
      </Title>
      <Paragraph>{card.fields.descreption}</Paragraph>
      <Link href={card.fields.button.fields.url} passHref>
        <Button type="primary" size="large">
          {card.fields.button.fields.title}
        </Button>
      </Link>
    </div>
  );
}

export default Card;
