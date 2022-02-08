import React from "react";
import { Typography, Button } from "antd";

interface CardProp {
  title: string;
  description: string;
  Click: string;
}

const { Title, Paragraph } = Typography;

function Card({ title, description, Click }: CardProp) {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Button type="primary" size="large">
        {Click}
      </Button>
    </div>
  );
}

export default Card;
