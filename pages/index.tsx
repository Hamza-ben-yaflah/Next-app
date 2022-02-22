import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/Landing/Landing";
import { client } from "../client/contentful";
import { ICard } from "../@types/generated/contentful";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "card" });

  return {
    props: {
      cards: res.items,
    },
  };
}

const Home = ({ cards }: { cards: ICard[] }) => {
  return (
    <div>
      <Head>
        <title>Landig page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing cards={cards} />
    </div>
  );
};

export default Home;
