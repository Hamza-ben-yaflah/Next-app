import React from "react";
import { Typography, Button } from "antd";
import styles from "./card.module.css";
import Link from "next/link";
import { ICard } from "../../@types/generated/contentful";
// interface CardProp {
//   title: string;
//   description: string;
//   Click: string;
//   LinkTo: string;
// }

const { Title, Paragraph } = Typography;

function Card({ card }: { card: ICard }) {
  return (
    <div className={styles.card}>
      <Title level={4} italic>
        {card.fields.title}
      </Title>
      <Paragraph>{card.fields.descreption}</Paragraph>

      <Button type="primary" size="large">
        <Link href={card.fields.button?.fields.url as string} passHref>
          <a>{card.fields.button?.fields.title as string}</a>
        </Link>
      </Button>
    </div>
  );
}

export default Card;
