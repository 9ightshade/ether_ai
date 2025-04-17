import CommunityMetrics from "@/components/community/community";
import GridCarousel from "@/components/community/communityCarousel";
import HeroSection from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CommunityMetrics />
      <GridCarousel />
    </div>
  );
}
