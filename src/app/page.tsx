import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home1/HeroSection";
import BrandsSlider from "@/components/home1/BrandsSlider";
import CitiesSection from "@/components/home1/CitiesSection";
import FeaturedListings from "@/components/home1/FeaturedListings";
import HowItWorks from "@/components/home1/HowItWorks";
import PropertiesType from "@/components/home1/PropertiesType";
import ApartmentSection from "@/components/home1/ApartmentSection";
import ExpertsSection from "@/components/home1/ExpertsSection";
import TestimonialsSlider from "@/components/home1/TestimonialsSlider";
import SubscribeSection from "@/components/home1/SubscribeSection";
import UnderUpdate from "./../components/UnderUpdate";

export default function HomePage() {
  return (
    <>
      <Header variant="home1" />
      <main>
        {/* <UnderUpdate /> */}
        <HeroSection />
        {/* <BrandsSlider /> */}
        <CitiesSection />
        <FeaturedListings title="Our featured" highlightText="listing" />
        {/* <HowItWorks />
        <PropertiesType />
        <ApartmentSection />
        <FeaturedListings title="Latest" highlightText="Rooms" />
        <ExpertsSection />
        <TestimonialsSlider />
        <SubscribeSection /> */}
      </main>
      <Footer />
    </>
  );
}
