import HeroSection from "./components/HeroSection";
import HeaderSection from "./components/HeaderSection";
import ServicesArea from "./components/ServicesArea";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import LatestBlog from "./components/LatestBlog";
import BussinessProgress from "./components/BussinessProgress";
import CTASection from "./components/CTASection";
import PortfolioSection from "./components/PortfolioSection";
import TeamAreaSection from "./components/TeamAreaSection";

function App() {
  return (
    <>
      <HeaderSection
        promoText="Looking for an exceptional React developer to meet your needs?"
        
      />
      <HeroSection
        typingText={["Do you need something", "Like this with ReactJS"]}
        headingText=""
        headingTextBold=""
        subHeading="Created with ReactJS for demo only!"
        buttonText="Let's Chat"
        buttonLink="https://www.linkedin.com/in/omar00faruk/"
      />
      <ServicesArea />
      <AboutSection />
      <TeamAreaSection />
      <PortfolioSection />
      <CTASection />
      <BussinessProgress />
      <LatestBlog />
      <FooterSection />
    </>
  );
}

export default App;
