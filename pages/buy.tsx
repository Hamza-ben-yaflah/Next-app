import React, { createContext } from "react";
import ContainerBuy from "../components/ContainerBuy/ContainerBuy";
import Navbar from "../components/navbar/Navbar";
import { client } from "../client/contentful";

export const carContext = createContext([]);

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "carCard" });

  return {
    props: {
      cars: res.items,
    },
  };
}

function Buy({ cars }: { cars: any }) {
  console.log(cars);

  return (
    <>
      {/* <Navbar /> */}
      <carContext.Provider value={cars}>
        <ContainerBuy />
      </carContext.Provider>
    </>
  );
}

export default Buy;
