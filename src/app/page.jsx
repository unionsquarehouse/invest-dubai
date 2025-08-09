import React from 'react';
import Hero from '@/components/sections/Hero';
import ProvenExcellence from '@/components/sections/ProvenExcellence';
import PremiumAdvantages from '@/components/sections/PremiumAdvantages';
import PremiumProjects from '@/components/sections/PremiumProjects';
import ProjectGallery from '@/components/sections/ProjectGallery';
import ReadyToInvest from '@/components/sections/ReadyToInvest';
import GetInTouch from '@/components/sections/GetInTouch';
import InvestmentHorizons from '@/components/sections/InvestmentHorizons';
import PropertyComparison from '@/components/sections/PropertyComparison';

export default function DubaiRealEstatePage() {
  return (
    <div>

      {/* Hero Section */}
      <Hero />

      {/* Proven Excellence Section */}
      <ProvenExcellence />

      {/* Premium Advantages Section */}
      <InvestmentHorizons />

      <PropertyComparison/>

      {/* Premium Projects Section */}
      {/* <PremiumProjects /> */}
      {/* <PremiumAdvantages/> */}

      {/* Lumena Project Showcase */}
      <ProjectGallery />

      {/* Ready to Invest Section */}
      <ReadyToInvest />

      {/* Get In Touch Section */}
      <GetInTouch />
    </div>
  );
}
