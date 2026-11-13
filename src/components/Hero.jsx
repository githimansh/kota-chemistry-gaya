import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Atom, Beaker, Lightbulb, Sparkles } from 'lucide-react';
import { Eyebrow, ease, fadeUp } from './Common';

function MolecularVisual() {

  return <div className="hero-visual" aria-label="Illustration of chemistry molecules and laboratory equipment" role="img"><div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="atom-core"><Atom size={78} strokeWidth={1.2} /><span className="atom-orbit-dot dot-one"/><span className="atom-orbit-dot dot-two"/></div><div className="floating-chip chip-chem"><Beaker size={15} /> CHEMISTRY</div><div className="floating-chip chip-formula">H<sub>2</sub>O <span>+ clarity</span></div><div className="floating-chip chip-result"><span className="chip-dot"/> Concepts<br/><b>made clear</b></div><div className="lab-card"><div className="lab-card-top"><span>ELEMENTS OF SUCCESS</span><span className="lab-dots">•••</span></div><div className="periodic"><div className="element element-blue"><small>01</small><b>H</b><span>Hydrogen</span></div><div className="element element-gold"><small>08</small><b>O</b><span>Oxygen</span></div><div className="element element-pale"><small>11</small><b>Na</b><span>Sodium</span></div><div className="element element-mint"><small>17</small><b>Cl</b><span>Chlorine</span></div></div><div className="lab-card-bottom"><span><i/> Curiosity meets understanding</span><ArrowUpRight size={15}/></div></div><div className="hero-stamp"><Sparkles size={14}/><span>LEARN<br/>CURIOUSLY</span></div></div>

}



export default function Hero() {

  return <section className="hero" id="home"><div className="hero-grid-bg"/><div className="hero-inner"><motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.13 } } }}><motion.div variants={fadeUp}><Eyebrow light>KOTA CHEMISTRY BY RP YADAW SIR</Eyebrow></motion.div><motion.h1 variants={fadeUp}>Make Chemistry<br/><span>Easy, Interesting</span><br/><em>& Conceptual.</em></motion.h1><motion.p className="hero-subheading" variants={fadeUp}>Understand Chemistry. <strong>Build Confidence.</strong><br/>Achieve Excellence.</motion.p><motion.p className="hero-description" variants={fadeUp}>Learn Chemistry from basics to advanced concepts with structured teaching, regular practice, doubt-clearing support and academic guidance at our Gaya branches.</motion.p><motion.div className="hero-actions" variants={fadeUp}><a className="button button-gold" href="#courses">Explore Our Courses <ArrowRight size={16}/></a><a className="button button-outline" href="#contact">Contact Us <ArrowUpRight size={16}/></a></motion.div><motion.div className="hero-note" variants={fadeUp}><div className="note-icon"><Lightbulb size={17}/></div><span>A thoughtful approach to<br/><b>learning chemistry well.</b></span><span className="note-line"/></motion.div></motion.div><motion.div className="hero-art-wrap" initial={{opacity:0,scale:.96,x:24}} animate={{opacity:1,scale:1,x:0}} transition={{duration:.9,ease}}><MolecularVisual/></motion.div></div><div className="hero-bottom"><span><span className="hero-bottom-dot"/> BUILD YOUR FOUNDATION, ONE CONCEPT AT A TIME</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13}/></a></div></section>

}
