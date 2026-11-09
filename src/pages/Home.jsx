import SEO from '../components/ui/SEO';
import MarqueeRibbon from '../components/layout/MarqueeRibbon';
import Hero from '../components/home/Hero';
import RankingsRibbon from '../components/home/RankingsRibbon';
import Manifesto from '../components/home/Manifesto';
import BentoFaculties from '../components/home/BentoFaculties';
import DispatchTimeline from '../components/home/DispatchTimeline';
import RankingsDeepDive from '../components/home/RankingsDeepDive';
import VCLetter from '../components/home/VCLetter';
import NumbersMap from '../components/home/NumbersMap';
import GalleryMasonry from '../components/home/GalleryMasonry';
import { IMAGES } from '../lib/img';

const FOOTER_RIBBON = [
  'SEVENTY-SEVEN PROGRAMS',
  'SEVEN FACULTIES',
  'CHARBAGH · SWAT · PAKISTAN',
  'RESEARCH THAT RETURNS HOME',
  'CHANCELLOR · VICE CHANCELLOR · REGISTRAR',
];

export default function Home() {
  return (
    <>
      <SEO
        title="Where the Mountains Meet the Future"
        description="University of Swat — #1 in Khyber Pakhtunkhwa (HEC NSCT 2026) and #40 globally for innovation (WURI 2025). Seven faculties, thirty departments and seventy-seven programs at Charbagh, Swat."
        path="/"
        image={IMAGES.heroValley}
      />

      {/* Signature gold ribbon directly beneath the floating navbar */}
      <MarqueeRibbon className="ribbon-top" />

      <Hero />
      <RankingsRibbon />
      <Manifesto />
      <BentoFaculties />
      <DispatchTimeline />
      <RankingsDeepDive />
      <VCLetter />
      <NumbersMap />
      <GalleryMasonry />

      {/* Reverse-direction pine ribbon closing the page */}
      <MarqueeRibbon
        items={FOOTER_RIBBON}
        variant="pine"
        reverse
        speed={46}
        ariaLabel="University of Swat closing ribbon"
      />
    </>
  );
}
