import React from "react";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { client } from "../client/contentful";
import styles from "../PageCss/ChoicePage.module.css";
import { cardContext } from ".";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "card" });

  return {
    props: {
      cards: res.items,
    },
  };
}
const ChoicePage = ({ cards }: { cards: any }) => {
  return (
    <div className={styles.container}>
      <cardContext.Provider value={cards}>
        <FeatureSection />
      </cardContext.Provider>
    </div>
  );
};

export default ChoicePage;
