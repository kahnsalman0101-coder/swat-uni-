export default function TagPill({ children, variant = 'default', className = '', as: Tag = 'span' }) {
  const variantClass =
    variant === 'gold' ? 'tag-pill--gold' : variant === 'sage' ? 'tag-pill--sage' : variant === 'invert' ? 'tag-pill--invert' : '';

  return <Tag className={`tag-pill ${variantClass} ${className}`.trim()}>{children}</Tag>;
}
