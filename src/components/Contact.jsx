import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, CheckCircle2, CircleHelp, GraduationCap,
  MapPin, MessageCircle, Phone, Send,
} from 'lucide-react';
import { institute } from '../config/instituteConfig';
import { courses } from '../data/courses';
import { SectionHeading, SocialLinks, reveal } from './Common';

export default function Contact() {

  const [status, setStatus] = useState({ type: '', text: '' })

  const [busy, setBusy] = useState(false)

  const [form, setForm] = useState({ name: '', mobile: '', className: '', course: '', message: '' })

  useEffect(() => { const selectCourse = event => setForm(current => ({ ...current, course: event.detail })); window.addEventListener('select-course', selectCourse); return () => window.removeEventListener('select-course', selectCourse) }, [])

  const update = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {

    e.preventDefault(); setStatus({type:'',text:''})

    const mobileDigits = form.mobile.replace(/\D/g, '')
    if (!/^[+]?[-()\s\d]+$/.test(form.mobile.trim()) || mobileDigits.length < 10 || mobileDigits.length > 15) { setStatus({type:'error',text:'Please enter a valid mobile number (10–15 digits).'}); return }

    if (!form.name.trim()) { setStatus({type:'error',text:'Please enter the student name.'}); return }

    setBusy(true)

    const message = `Hello Kota Chemistry Gaya, I would like to enquire.\n\nStudent name: ${form.name}\nMobile: ${form.mobile}\nClass: ${form.className || 'Not specified'}\nCourse: ${form.course || 'Not specified'}\nMessage: ${form.message || '—'}`

    const opened = window.open(`https://wa.me/${institute.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')

    setBusy(false)

    setStatus({type: opened ? 'success' : 'error', text: opened ? 'Your enquiry is ready in WhatsApp. Send it there to reach us.' : 'Your browser blocked the WhatsApp window. Please allow pop-ups or contact us by phone.'})

  }

  return <section className="contact-section section-pad" id="contact"><div className="contact-ornament"/><div className="container"><SectionHeading eyebrow="LET'S TALK CHEMISTRY" title={<>Your next step starts with <span>a conversation.</span></>} description="Have a question about classes or course options? We'd be glad to hear from you."/><div className="contact-layout"><motion.div className="contact-info" {...reveal}><div className="contact-info-head"><span className="contact-info-kicker">GET IN TOUCH</span><h3>We’re here to<br/>help you get started.</h3><p>Reach out and tell us what you’re looking for. We’ll help you find the right next step.</p></div><div className="contact-details"><a href={institute.phoneHref}><span><Phone size={17}/></span><div><small>CALL US</small><b>{institute.phone}</b></div><ArrowUpRight size={15}/></a><div><span><GraduationCap size={17}/></span><div><small>FACULTY</small><b>Kota Chemistry by RP Yadaw Sir</b></div></div></div><a className="whatsapp-button" href={`https://wa.me/${institute.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat with us on WhatsApp <ArrowUpRight size={15}/></a><div className="contact-social"><span>FOLLOW ALONG</span><SocialLinks light/></div></motion.div><motion.div className="contact-form-wrap" {...reveal}><div className="form-heading"><div><span>ENQUIRY FORM</span><h3>How can we help?</h3></div><div className="form-sparkle"><Send size={19}/></div></div><form onSubmit={submit} noValidate><div className="form-row"><label>Student name<input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required/></label><label>Mobile number<input name="mobile" value={form.mobile} onChange={update} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel" required/></label></div><div className="form-row"><label>Class<select name="className" value={form.className} onChange={update}><option value="">Select your class</option>{['Class 9','Class 10','Class 11','Class 12','Other'].map(x=><option key={x}>{x}</option>)}</select></label><label>Course interested in<select id="course-interest" name="course" value={form.course} onChange={update}><option value="">Choose a course</option>{courses.map(x=><option key={x.title}>{x.title}</option>)}</select></label></div><label>Message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little about what you need..." rows="4"/></label>{status.text && <div className={`form-status ${status.type}`} role="status">{status.type === 'success' ? <CheckCircle2 size={17}/> : <CircleHelp size={17}/>}<span>{status.text}</span></div>}<button className="button button-blue form-submit" disabled={busy} type="submit">{busy ? 'Preparing…' : 'Send Enquiry'} <ArrowRight size={16}/></button><p className="form-privacy"><MessageCircle size={13}/> This form opens a pre-filled WhatsApp message. Nothing is stored on this website.</p></form></motion.div></div><div className="branch-grid">{institute.branches.map((branch, index) => <motion.article className="branch-card" key={branch.name} {...reveal}><div className="branch-card-head"><span><MapPin size={18}/></span><h3>{branch.name}</h3></div><p>{branch.address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`} target="_blank" rel="noreferrer">View location on Google Maps <ArrowUpRight size={14}/></a></motion.article>)}</div></div></section>

}
