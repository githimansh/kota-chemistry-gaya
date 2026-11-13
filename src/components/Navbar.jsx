import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand, navLinks } from './Common';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const section = [...document.querySelectorAll('main section[id]')]
        .reverse()
        .find((element) => window.scrollY >= element.offsetTop - 150);
      setActive(section ? `#${section.id}` : '#home');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <Brand />
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} className={active === href ? 'nav-active' : ''} href={href} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#contact" className="button button-gold nav-cta" onClick={close}>
            Enquire Now <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
