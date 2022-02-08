import React from "react";
import { Typography, Button } from "antd";

interface CardProp {
  title: string;
  description: string;
  Click: string;
}

const { Title, Text } = Typography;

function Card({ title, description, Click }: CardProp) {
  return (
    <div>
      <Title level={4}>{title}</Title>
      <p>{description}</p>
      <Button type="primary" size="large">
        {Click}
      </Button>
    </div>
  );
}

export default Card;
