/**
 * SectionLabel — monospace micro-label prefixed by a gold rule.
 * The single most repeated editorial device on the site.
 */
export default function SectionLabel({ children, invert = false, as: Tag = 'span', className = '' }) {
  return (
    <Tag className={`section-label ${invert ? 'section-label--invert' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
