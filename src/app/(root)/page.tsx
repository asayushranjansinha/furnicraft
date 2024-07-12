import Banner from "@/components/Banner";
import Articles from "@/components/articles";
import FeaturedProducts from "@/components/featured-products";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import NewArrivals from "@/components/new-arrivals";
import NewsLetter from "@/components/newsletter";

export default function Home() {
  return (
    <div className="w-full flex-1">
      <HeroSection />
      <FeaturedProducts />
      <NewArrivals />
      <Features />
      <Banner />
      <Articles />
      <NewsLetter />
      <Footer />
    </div>
  );
}
