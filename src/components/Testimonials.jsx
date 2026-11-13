import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Users } from 'lucide-react';
import { Eyebrow } from './Common';

const demoTestimonials = [

  { name: 'Student name placeholder', course: 'Class / course placeholder', text: 'Add a real student testimonial here after receiving their feedback and permission to share it.' },

  { name: 'Student name placeholder', course: 'Class / course placeholder', text: 'Share a student’s own words here. Testimonials will be published only with their permission.' },

  { name: 'Student name placeholder', course: 'Class / course placeholder', text: 'This space is ready for a genuine learning experience from a Kota Chemistry Gaya student.' },

]

export default function Testimonials() {

  const [slide, setSlide] = useState(0)

  const item = demoTestimonials[slide]

  return <section className="testimonial-section section-pad"><div className="container"><div className="testimonial-layout"><div className="testimonial-intro"><Eyebrow>STUDENT VOICES</Eyebrow><h2>Every learning story<br/>starts <span>somewhere.</span></h2><p>When our students are ready to share their experiences, we'll make room for their voices here.</p><div className="carousel-controls"><button aria-label="Previous testimonial" onClick={() => setSlide((slide + demoTestimonials.length - 1) % demoTestimonials.length)}><ChevronLeft size={19}/></button><span>0{slide+1} <i/> 0{demoTestimonials.length}</span><button aria-label="Next testimonial" onClick={() => setSlide((slide + 1) % demoTestimonials.length)}><ChevronRight size={19}/></button></div></div><motion.div className="testimonial-card" key={slide} initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{duration:.35}}><div className="testimonial-top"><span className="quote-circle"><Quote size={18}/></span><span className="demo-badge"><i/> DEMO PLACEHOLDER</span></div><div className="testimonial-stars">✳ <span>✳</span> ✳ <span>✳</span> ✳</div><blockquote>“{item.text}”</blockquote><div className="testimonial-person"><div className="avatar-placeholder"><Users size={18}/></div><div><b>{item.name}</b><span>{item.course}</span></div><span className="testimonial-mark">KCG</span></div><span className="testimonial-disclaimer">Illustrative placeholder · Replace with verified student feedback</span></motion.div></div></div></section>

}
