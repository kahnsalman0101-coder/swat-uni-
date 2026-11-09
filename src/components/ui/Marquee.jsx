/**
 * Marquee — dual-direction kinetic ribbon.
 * Pauses on hover; motion is disabled entirely under prefers-reduced-motion.
 */
export default function Marquee({
  items = [],
  reverse = false,
  variant = 'gold',
  speed = 34,
  separator = '·',
  className = '',
  renderItem,
  ariaLabel = 'Announcements',
}) {
  const track = (
    <div className="marquee__track" style={{ '--dur-marquee': `${speed}s` }}>
      {items.map((item, index) => (
        <span className="marquee__item" key={`${item}-${index}`}>
          {renderItem ? renderItem(item, index) : item}
          <span className="marquee__sep" style={{ marginLeft: '3.25rem' }} aria-hidden="true">
            {separator}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee marquee--${variant} ${reverse ? 'marquee--reverse' : ''} ${className}`.trim()}
      role="marquee"
      aria-label={ariaLabel}
    >
      {track}
      <div aria-hidden="true" style={{ display: 'contents' }}>
        {track}
      </div>
    </div>
  );
}
