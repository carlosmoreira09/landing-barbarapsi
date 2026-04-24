import { HeroSection } from "@/components/landing/HeroSection"
import { ProblemSection } from "@/components/landing/ProblemSection"
import { ProductIntroSection } from "@/components/landing/ProductIntroSection"
import { NotIsSection } from "@/components/landing/NotIsSection"
import { DeliverablesSection } from "@/components/landing/DeliverablesSection"
import { PricingSection } from "@/components/landing/PricingSection"
import { AboutSection } from "@/components/landing/AboutSection"
import { FAQSection } from "@/components/landing/FAQSection"
import { GuaranteeSection } from "@/components/landing/GuaranteeSection"
import { FooterSection } from "@/components/landing/FooterSection"
import { SectionTracker } from "@/components/landing/SectionTracker"

export default function LandingPage() {
  return (
    <main>
      <SectionTracker name="Hero">
        <HeroSection />
      </SectionTracker>
      <SectionTracker name="Problem">
        <ProblemSection />
      </SectionTracker>
      <SectionTracker name="ProductIntro">
        <ProductIntroSection />
      </SectionTracker>
      <SectionTracker name="NotIs">
        <NotIsSection />
      </SectionTracker>
      <SectionTracker name="Deliverables">
        <DeliverablesSection />
      </SectionTracker>
      <SectionTracker name="Pricing">
        <PricingSection />
      </SectionTracker>
      <SectionTracker name="About">
        <AboutSection />
      </SectionTracker>
      <SectionTracker name="FAQ">
        <FAQSection />
      </SectionTracker>
      <SectionTracker name="Guarantee">
        <GuaranteeSection />
      </SectionTracker>
      <SectionTracker name="Footer">
        <FooterSection />
      </SectionTracker>
    </main>
  )
}
