import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Atom, BookOpen, CircleHelp, FlaskConical, GraduationCap, Microscope, Target, Check } from 'lucide-react';
import { courses } from '../data/courses';
import { SectionHeading, reveal, ease } from './Common';

const courseIcons = [FlaskConical, BookOpen, Atom, Microscope, GraduationCap, Target]

export default function Courses() {

  return <section className="courses-section section-pad" id="courses"><div className="container"><SectionHeading eyebrow="LEARN WITH PURPOSE" title={<>A course for every <span>next step.</span></>} description="Build understanding, strengthen your practice and move ahead with a learning path that fits your goals."/><div className="courses-grid">{courses.map((course, i) => { const Icon = courseIcons[i % courseIcons.length]; return <motion.article className="course-card" key={course.title} {...reveal} transition={{ duration: .55, delay: i * .055, ease }}><div className="course-card-top"><div className={`course-icon course-icon-${i % 3}`}><Icon size={20}/></div><span className="course-label">{course.label}</span><span className="course-symbol">{course.icon}</span></div><h3>{course.title}</h3><p>{course.description}</p><ul>{course.benefits.map(b => <li key={b}><Check size={13}/>{b}</li>)}</ul><a href="#contact" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent('select-course', { detail: course.title })); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}) }} className="course-link">Enquire about this course <ArrowRight size={15}/></a></motion.article> })}</div><motion.div className="courses-footnote" {...reveal}><span className="footnote-icon"><CircleHelp size={18}/></span><span>Not sure where to start? <b>Tell us what you're looking for.</b> We'll help you explore the right course.</span><a href="#contact">Talk to us <ArrowUpRight size={15}/></a></motion.div></div></section>

}
