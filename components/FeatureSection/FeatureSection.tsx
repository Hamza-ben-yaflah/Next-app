import React from "react";
import { Typography, Row, Col } from "antd";
const { Title } = Typography;
import Card from "../Card/Card";
import styles from "./FeatureSection.module.css";
import { createClient } from "contentful";

function FeatureSection({ cards }: { cards: any }) {
  return (
    <section>
      <Row className={styles.titleContainer}>
        <Title level={1}>Looking for something in particular?</Title>
      </Row>
      <Row gutter={48} justify="space-between">
        {cards.map((card: any) => (
          <Col key={card.sys.id} lg={8} className={styles.col}>
            <Card card={card} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default FeatureSection;
