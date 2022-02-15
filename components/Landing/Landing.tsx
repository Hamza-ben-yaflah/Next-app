import { Space } from "antd";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import FindUsSection from "../FindUsSection/FindUsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";
const Landig = ({ cards }: { cards: any }) => {
  return (
    <Space direction="vertical" size="large">
      <HeroSection />
      <FeatureSection cards={cards} />
      <FindUsSection />
      <ContactSection />
      <Footer />
    </Space>
  );
};

export default Landig;
