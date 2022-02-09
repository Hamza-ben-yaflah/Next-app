import { Space } from "antd";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import FindUsSection from "../FindUsSection/FindUsSection";
import ContactSection from "../ContactSection/ContactSection";

const Landig = () => {
  return (
    <div>
      <Space direction="vertical" size="large">
        <HeroSection />
        <Space direction="vertical" size={120}>
          <FeatureSection />
          <FindUsSection />
          <ContactSection />
        </Space>
      </Space>
    </div>
  );
};

export default Landig;
