import { useState } from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../ui/GoldButton';
import TagPill from '../ui/TagPill';

const SUBJECTS = [
  'Admissions & Eligibility',
  'Examination & Transcripts',
  'Research & ORIC',
  'Hostel & Campus Life',
  'Media & Press',
  'Other',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const initialForm = { name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' };

/**
 * ContactForm — floating-label form with gold focus rings.
 * Client-side validation only; wire `onSubmit` to the registrar endpoint.
 */
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 3) next.name = 'Please enter your full name';
    if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email address';
    if (form.message.trim().length < 12) next.message = 'Tell us a little more (12+ characters)';
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.querySelector('.field.is-invalid input, .field.is-invalid textarea');
      first?.focus();
      return;
    }
    setSent(true);
    setForm(initialForm);
  };

  if (sent) {
    return (
      <motion.div
        className="card-e"
        style={{ padding: 'clamp(26px, 3vw, 40px)' }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        role="status"
      >
        <TagPill variant="gold">Message received</TagPill>
        <h3 style={{ marginTop: 18, fontSize: '1.7rem' }}>Thank you — your enquiry is logged.</h3>
        <p className="form-note" style={{ marginTop: 12 }}>
          The Registrar's Office answers enquiries within two working days. For urgent
          matters, call +92 946 924 0000 or email{' '}
          <a className="link-draw" href="mailto:registrar@uswat.edu.pk">
            registrar@uswat.edu.pk
          </a>
          .
        </p>
        <div style={{ marginTop: 26 }}>
          <GoldButton variant="ghost" onClick={() => setSent(false)}>
            Send another message
          </GoldButton>
        </div>
      </motion.div>
    );
  }

  return (
    <form className="card-e" style={{ padding: 'clamp(22px, 3vw, 40px)' }} onSubmit={onSubmit} noValidate>
      <div className={`field ${errors.name ? 'is-invalid' : ''}`}>
        <input
          id="contact-name"
          className="field__input"
          type="text"
          value={form.name}
          onChange={update('name')}
          placeholder=" "
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        <label className="field__label" htmlFor="contact-name">
          Full name
        </label>
        {errors.name ? (
          <span className="field__error" id="contact-name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className={`field ${errors.email ? 'is-invalid' : ''}`}>
        <input
          id="contact-email"
          className="field__input"
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder=" "
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        <label className="field__label" htmlFor="contact-email">
          Email address
        </label>
        {errors.email ? (
          <span className="field__error" id="contact-email-error">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="field">
        <input
          id="contact-phone"
          className="field__input"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          placeholder=" "
          autoComplete="tel"
        />
        <label className="field__label" htmlFor="contact-phone">
          Phone (optional)
        </label>
      </div>

      <div className="field">
        <select
          id="contact-subject"
          className="field__select"
          value={form.subject}
          onChange={update('subject')}
          data-filled="true"
        >
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <label className="field__label" htmlFor="contact-subject">
          Subject
        </label>
      </div>

      <div className={`field ${errors.message ? 'is-invalid' : ''}`}>
        <textarea
          id="contact-message"
          className="field__textarea"
          value={form.message}
          onChange={update('message')}
          placeholder=" "
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        <label className="field__label" htmlFor="contact-message">
          Your message
        </label>
        {errors.message ? (
          <span className="field__error" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
        <GoldButton type="submit" size="lg">
          Send message
        </GoldButton>
        <p className="form-note" style={{ margin: 0 }}>
          Fields marked required are validated before sending.
        </p>
      </div>
    </form>
  );
}
