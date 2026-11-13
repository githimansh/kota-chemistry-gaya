import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { institute } from '../config/instituteConfig';
import { courses } from '../data/courses';
import { Brand, SocialLinks } from './Common';

export default function Footer() {

  return <footer className="footer"><div className="footer-top container"><div className="footer-brand-col"><Brand light/><p>Making Chemistry Easy, Interesting & Conceptual.<br/>Kota Chemistry by RP Yadaw Sir.</p><SocialLinks light/></div><div className="footer-col"><span className="footer-heading">EXPLORE</span><a href="#about">About us</a><a href="#faculty">Our faculty</a><a href="#courses">Our courses</a><a href="#achievements">Student stories</a><a href="#contact">Get in touch</a></div><div className="footer-col"><span className="footer-heading">OUR COURSES</span>{courses.slice(0,4).map(c=><a key={c.title} href="#courses">{c.title}</a>)}</div><div className="footer-col footer-contact"><span className="footer-heading">SAY HELLO</span><a href={institute.phoneHref}><Phone size={15}/>{institute.phone}</a><a href={`https://wa.me/${institute.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={15}/>WhatsApp enquiry</a>{institute.branches.map(branch => <span key={branch.name}><MapPin size={15}/>{branch.name}: {branch.address}</span>)}</div></div><div className="footer-bottom container"><span>© 2026 Kota Chemistry Gaya. All Rights Reserved.</span><span>MADE FOR CURIOUS MINDS <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div></footer>

}
