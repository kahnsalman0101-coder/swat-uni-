import SEO from '../components/ui/SEO';
import GoldButton from '../components/ui/GoldButton';
import SectionLabel from '../components/ui/SectionLabel';
import { LuArrowLeft, LuHouse } from 'react-icons/lu';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Trail not found"
        description="The page you were looking for has moved, or never existed. Head back to the University of Swat homepage."
        path="/404"
      />

      <section className="nf">
        <div>
          <SectionLabel>Error 404 · Off the trail</SectionLabel>

          <svg
            className="nf__mountains"
            viewBox="0 0 600 220"
            role="img"
            aria-label="Illustration of the Swat mountains"
            style={{ marginBlock: 26 }}
          >
            <path
              d="M10 200 L120 92 L178 148 L236 46 L308 132 L360 88 L430 176 L492 120 L590 200 Z"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M10 200 H590"
              stroke="var(--border-strong)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <circle cx="236" cy="46" r="4" fill="var(--gold)" />
            <path
              d="M120 92 L142 118 M236 46 L262 78 M360 88 L384 118 L430 176"
              stroke="var(--sage)"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>

          <p className="nf__code" style={{ marginBottom: 8 }}>
            404
          </p>

          <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 16 }}>
            This path leads into the clouds
          </h1>
          <p className="lede" style={{ marginInline: 'auto', maxWidth: '46ch' }}>
            The page you asked for has moved, been renamed, or never existed. The mountain
            is still here — start again from the main trail.
          </p>

          <div
            style={{
              marginTop: 32,
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <GoldButton to="/" icon={<LuHouse aria-hidden="true" />}>
              Back to homepage
            </GoldButton>
            <GoldButton to="/academics" variant="ghost" icon={<LuArrowLeft aria-hidden="true" />}>
              Browse academics
            </GoldButton>
          </div>
        </div>
      </section>
    </>
  );
}
