import React from "react";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { client } from "../client/contentful";
import styles from "../PageCss/ChoicePage.module.css";
import { ICard } from "../@types/generated/contentful";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "card" });

  return {
    props: {
      cards: res.items,
    },
  };
}
const ChoicePage = ({ cards }: { cards: ICard[] }) => {
  return (
    <div className={styles.container}>
      <FeatureSection cards={cards} />
    </div>
  );
};

export default ChoicePage;
