import { Link } from 'react-router-dom';
import useCursor from '../../hooks/useCursor';

/**
 * GoldButton — the site's single button primitive.
 * variant: gold (fill-sweep to pine) | ghost (fill-sweep to gold) | outline (invert surfaces)
 * Renders <Link>, <a> or <button> depending on the props supplied.
 */
export default function GoldButton({
  to,
  href,
  variant = 'gold',
  size,
  block = false,
  icon,
  children,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) {
  const { enabled, setVariant } = useCursor();

  const classes = [
    `btn-${variant}`,
    size === 'lg' ? 'btn--lg' : '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const hoverProps = enabled
    ? {
        onPointerEnter: () => setVariant('hover'),
        onPointerLeave: () => setVariant('default'),
      }
    : {};

  const inner = (
    <>
      <span>{children}</span>
      {icon ? (
        <span aria-hidden="true" style={{ display: 'inline-flex' }}>
          {icon}
        </span>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...hoverProps} {...rest}>
        {inner}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...hoverProps}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...hoverProps} {...rest}>
      {inner}
    </button>
  );
}
