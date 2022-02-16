import React from "react";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { client } from "../client/contentful";

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
    <div>
      <FeatureSection cards={cards} />
    </div>
  );
};

export default ChoicePage;
