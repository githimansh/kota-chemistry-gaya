import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Lightbulb, MessageCircle, Target, Users } from 'lucide-react';
import { SectionHeading, reveal, ease } from './Common';

const features = [

  [Lightbulb, 'Concept-Based Learning', 'Make sense of the ideas behind every reaction, formula and topic.'],

  [BookOpen, 'Thoughtful Teaching', 'A clear, student-focused approach that meets learners where they are.'],

  [Target, 'Regular Practice', 'Build familiarity and confidence through consistent question practice.'],

  [MessageCircle, 'Doubt-Solving Support', 'Ask questions, revisit tricky concepts and keep moving forward.'],

  [Users, 'Student-Focused Learning', 'A learning environment that makes room for different learning needs.'],

  [GraduationCap, 'Exam-Oriented Preparation', 'Connect your understanding to the assessments ahead.'],

]

export default function WhyChooseUs() { return <section className="why-section section-pad"><div className="container"><SectionHeading eyebrow="THE KCG APPROACH" title={<>A stronger foundation, <span>built together.</span></>} description="Good learning grows from clear explanations, consistent effort and the right support." align="center"/><div className="features-grid">{features.map(([Icon,title,desc],i) => <motion.article className="feature-card" key={title} {...reveal} transition={{duration:.5,delay:i*.06,ease}}><span className="feature-icon"><Icon size={21}/></span><span className="feature-number">0{i+1}</span><h3>{title}</h3><p>{desc}</p></motion.article>)}</div></div></section> }
