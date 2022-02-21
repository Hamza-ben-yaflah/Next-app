import { Space } from "antd";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import FindUsSection from "../FindUsSection/FindUsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { cardContext } from "../../pages";

const Landig = () => {
  const cards = useContext(cardContext);
  console.log(cards);

  return (
    <Space direction="vertical" size="large">
      <HeroSection />
      <FeatureSection />
      <FindUsSection />
      <ContactSection />
      <Footer />
    </Space>
  );
};

export default Landig;
