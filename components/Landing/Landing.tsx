import { Space } from "antd";
import HeroSection from "../HeroSection/HeroSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import FindUsSection from "../FindUsSection/FindUsSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";

const Landig = () => {
  return (
    <div data-testid="landing">
      <Space direction="vertical" size="large">
        <HeroSection />
        <FeatureSection />
        <FindUsSection />
        <ContactSection />
        <Footer />
      </Space>
    </div>
  );
};

export default Landig;
