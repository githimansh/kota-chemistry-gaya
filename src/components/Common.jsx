import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { institute } from '../config/instituteConfig';

export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export const reveal = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.15 },
  variants: fadeUp,
};

export const navLinks = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Our Courses', '#courses'],
  ['Our Faculty', '#faculty'],
  ['Our Achievements', '#achievements'],
  ['Contact Us', '#contact'],
];

export function Brand({ light = false }) {
  return (
    <a
      className={`brand ${light ? 'brand-light' : ''}`}
      href="#home"
      aria-label="Kota Chemistry Gaya home"
    >
      <img className="brand-logo" src="/Kota_chem_logo.jpeg" alt="Kota Chemistry logo" />
      <span className="brand-wordmark">
        <strong>KOTA CHEMISTRY GAYA</strong>
        <small>BY RP YADAW SIR</small>
        <small>No.01 Chemistry Coaching in Gaya</small>
      </span>
    </a>
  );
}

export function SocialLinks({ light = false }) {
  const items = [
    ['facebook', Facebook, 'Facebook'],
    ['instagram', Instagram, 'Instagram'],
    ['youtube', Youtube, 'YouTube'],
    ['telegram', Send, 'Telegram'],
  ];

  return (
    <div className={`social-links ${light ? 'social-light' : ''}`}>
      {items.map(([key, Icon, label]) =>
        institute.socials?.[key] ? (
          <a key={key} href={institute.socials[key]} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon size={17} />
          </a>
        ) : (
          <span
            className="social-inactive"
            key={key}
            aria-label={`${label} URL not configured`}
            title={`${label} link can be added in instituteConfig.js`}
          >
            <Icon size={17} />
          </span>
        ),
      )}
    </div>
  );
}

export function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span />{children}</div>;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <motion.div className={`section-heading align-${align} ${light ? 'heading-light' : ''}`} {...reveal}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
