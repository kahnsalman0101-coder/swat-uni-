import useInView from '../../hooks/useInView';

const RATIOS = {
  '16x9': 'img-reveal__ratio-16x9',
  '4x5': 'img-reveal__ratio-4x5',
  '1x1': 'img-reveal__ratio-1x1',
  '3x4': 'img-reveal__ratio-3x4',
};

/**
 * ImageReveal — lazy, blur-up image with a top→bottom clip-path wipe
 * that fires the first time the frame enters the viewport.
 */
export default function ImageReveal({
  src,
  alt,
  ratio = '4x5',
  caption,
  className = '',
  imgClassName = '',
  priority = false,
  sizes = '(max-width: 767px) 100vw, 50vw',
}) {
  const [ref, inView] = useInView({ threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  return (
    <figure
      ref={ref}
      className={`img-reveal ${RATIOS[ratio] || ''} ${inView ? 'is-revealed' : ''} ${className}`.trim()}
    >
      <img
        className={`img-reveal__img ${imgClassName}`.trim()}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        sizes={sizes}
      />
      {caption ? <figcaption className="img-reveal__caption">{caption}</figcaption> : null}
    </figure>
  );
}
