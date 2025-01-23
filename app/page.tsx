import CompanyLogo from "@/components/CompanyLogo";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import ItemCategory from "@/components/ItemCategory";
import OurProducts from "@/components/OurProducts";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyLogo />
      <FeaturedProducts />
      <TopCategories />
      <ItemCategory />
      <OurProducts /> 
    </main>
  );
}
