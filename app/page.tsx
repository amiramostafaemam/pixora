import { PricingTable, Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import  HomeHeroSection  from "@/components/HomeHeroSection";
import GalleryShowcaseSection from "@/components/GalleryShowcaseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
// import HomeHeroSection from "@/components/HomeHeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      {/* <Show when="signed-out">
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="outline">Sign up</Button>
        </SignUpButton>
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show> */}

      <HomeHeroSection/>
      <GalleryShowcaseSection/>
      <HowItWorksSection/>
      <Testimonials/>
      <PricingSection/>
      <Footer/>
    </main>
  );
}
