import { HeroSection } from "@/components/landing/HeroSection"
import { IdentitySection } from "@/components/landing/IdentitySection"
import { PricingSection } from "@/components/landing/PricingSection"
import { GuaranteeSection } from "@/components/landing/GuaranteeSection"
import { FooterSection } from "@/components/landing/FooterSection"
import { SectionTracker } from "@/components/landing/SectionTracker"

export default function LandingPage() {
  return (
    <main>
      <SectionTracker name="Hero">
        <HeroSection />
      </SectionTracker>
      <SectionTracker name="Identity">
        <IdentitySection />
      </SectionTracker>
      <SectionTracker name="Pricing">
        <PricingSection />
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
