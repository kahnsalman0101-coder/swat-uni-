import Marquee from '../ui/Marquee';

const HEADLINES = [
  'FINAL MERIT LIST FALL 2026 LIVE',
  'ADMISSIONS OPEN',
  'WURI 2025 TOP 40 GLOBAL',
  '#1 IN KHYBER PAKHTUNKHWA',
  'HEC RECOGNISED ORIC',
];

/**
 * MarqueeRibbon — the gold kinetic band sitting directly beneath the navbar on
 * the homepage. Pairs with a reverse-direction pine ribbon lower down the page.
 */
export default function MarqueeRibbon({
  items = HEADLINES,
  variant = 'gold',
  reverse = false,
  speed = 38,
  className = '',
  ariaLabel = 'University of Swat announcements',
}) {
  return (
    <div className={className}>
      <Marquee
        items={items}
        variant={variant}
        reverse={reverse}
        speed={speed}
        ariaLabel={ariaLabel}
      />
    </div>
  );
}
