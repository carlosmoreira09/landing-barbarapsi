import { HeroSection } from "@/components/landing/HeroSection"
import { ProblemSection } from "@/components/landing/ProblemSection"
import { ProductIntroSection } from "@/components/landing/ProductIntroSection"
import { NotIsSection } from "@/components/landing/NotIsSection"
import { LearnSection } from "@/components/landing/LearnSection"
import { StrategiesSection } from "@/components/landing/StrategiesSection"
import { DeliverablesSection } from "@/components/landing/DeliverablesSection"
import { PricingSection } from "@/components/landing/PricingSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { FAQSection } from "@/components/landing/FAQSection"
import { GuaranteeSection } from "@/components/landing/GuaranteeSection"
import { FooterSection } from "@/components/landing/FooterSection"

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ProductIntroSection />
      <NotIsSection />
      <LearnSection />
      <StrategiesSection />
      <DeliverablesSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <GuaranteeSection />
      <FooterSection />
    </main>
  )
}
