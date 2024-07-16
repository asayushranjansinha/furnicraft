import Banner from "@/components/Banner";
import Articles from "@/components/articles";
import FeaturedProducts from "@/components/featured-products";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import NewArrivals from "@/components/new-arrivals";
import NewsLetter from "@/components/newsletter";

export default function Homepage() {
  return (
    <div className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <NewArrivals />
      <Features />
      <Banner />
      <Articles />
      <NewsLetter />
    </div>
  );
}
