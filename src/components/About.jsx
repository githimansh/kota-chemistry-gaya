import { motion } from 'framer-motion';
import {
  Atom, BookOpen, Brain, Calculator, Check, ClipboardCheck,
  FileText, MapPin, MessageCircle, Sparkles, ArrowRight,
} from 'lucide-react';
import { Eyebrow, reveal } from './Common';

export default function About() {

  const learningFacilities = [

    {

      icon: <BookOpen size={20} />,

      title: "Chapter-wise Study Notes",

      description: "Well-organized notes, important formulas, reactions and key concepts for easy revision."

    },

    {

      icon: <FileText size={20} />,

      title: "Board Exam Question Papers",

      description: "Previous-year question papers, sample papers and important practice questions for board exam preparation."

    },

    {

      icon: <ClipboardCheck size={20} />,

      title: "Regular Tests",

      description: "Topic-wise and chapter-wise tests to evaluate preparation and track student progress."

    },

    {

      icon: <Brain size={20} />,

      title: "Quiz & Practice Sessions",

      description: "Interactive quizzes and MCQ practice to improve knowledge, accuracy and confidence."

    },

    {

      icon: <Calculator size={20} />,

      title: "Numerical Practice",

      description: "Step-by-step numerical problem solving to strengthen Chemistry fundamentals."

    },

    {

      icon: <MessageCircle size={20} />,

      title: "Doubt-Solving Support",

      description: "Get guidance to clear doubts and understand difficult topics more effectively."

    }

  ];



  return (

    <section className="about-section section-pad" id="about">

      <div className="container">

        <div className="about-layout">



          <motion.div className="about-art" {...reveal}>

            <div className="about-art-bg">

              <div className="art-grid" />

              <div className="art-ring ring-a" />

              <div className="art-ring ring-b" />



              <div className="book-illustration">

                <div className="book-page page-left">

                  <span className="page-label">CHEMISTRY</span>

                  <div className="page-molecule">

                    <span /><span /><span /><i /><i />

                  </div>

                  <div className="page-lines">

                    <i /><i /><i />

                  </div>

                </div>



                <div className="book-page page-right">

                  <span className="page-label">LET'S EXPLORE</span>

                  <div className="page-formula">

                    Na<sub>+</sub><span>+</span>Cl<sub>−</sub>

                  </div>

                  <div className="page-lines">

                    <i /><i /><i />

                  </div>

                  <div className="page-glow" />

                </div>

              </div>



              <div className="about-badge">

                <span className="badge-orbit"><Atom size={25} /></span>

                <span>SCIENCE<br /><b>MADE CLEAR</b></span>

              </div>



              <div className="about-art-caption">

                <Sparkles size={15} /> Curious minds, welcome.

              </div>



              <span className="art-spark spark-a">✳</span>

              <span className="art-spark spark-b">✦</span>

            </div>

          </motion.div>



          <div className="about-copy">

            <Eyebrow>A PLACE TO LEARN AND GROW</Eyebrow>



            <h2>

              Big ideas begin<br />

              with <span>clear concepts.</span>

            </h2>



            <p className="about-lead">

              Welcome to Kota Chemistry Gaya, led by RP Yadaw Sir.

              We aim to make Chemistry simple, interesting and understandable

              through concept-based teaching, quality study materials and

              regular academic practice.

            </p>



            <p>

              We focus on strong fundamentals, conceptual clarity,

              systematic learning, numerical practice and regular assessment.

              Our goal is to help students understand the logic behind every

              reaction, formula and concept while preparing confidently for

              their examinations.

            </p>



            <div className="about-points">

              <div>

                <span><Check size={15} /></span>

                <p>

                  <b>Learn with understanding</b>

                  <small>Concepts explained with clarity.</small>

                </p>

              </div>



              <div>

                <span><Check size={15} /></span>

                <p>

                  <b>Practice with purpose</b>

                  <small>Regular learning and problem solving.</small>

                </p>

              </div>



              <div>

                <span><Check size={15} /></span>

                <p>

                  <b>Get support as you learn</b>

                  <small>Student-focused teaching and doubt solving.</small>

                </p>

              </div>

            </div>



            <a className="text-link" href="#courses">

              Discover how we teach <ArrowRight size={15} />

            </a>

          </div>

        </div>



        {/* Learning Facilities */}

        <div className="learning-facilities">

          <div className="facilities-heading">

            <Eyebrow>OUR LEARNING SUPPORT</Eyebrow>

            <h2>Everything You Need to <span>Learn Better</span></h2>

            <p>

              Quality learning resources and regular practice to help

              students prepare with confidence.

            </p>

          </div>



          <div className="facilities-grid">

            {learningFacilities.map((item, index) => (

              <motion.div

                className="facility-card"

                key={item.title}

                {...reveal}

                transition={{ delay: index * 0.08 }}

              >

                <div className="facility-icon">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.div>

            ))}

          </div>

        </div>



        {/* Branch Locations */}

        <div className="about-branches">

          <h3>Our Branch Locations – Kota Chemistry Gaya</h3>

          <div className="about-branch-list">

            <p>

              <MapPin size={17} />

              <span><b>Main Office (1st Branch):</b> Opposite Gaya College,

              in front of Rampur Police Station, Gaya, Bihar.</span>

            </p>

            <p>

              <MapPin size={17} />

              <span><b>2nd Branch:</b> Near SBI Bank, Delha Bus Stand,

              Gaya, Bihar.</span>

            </p>

            <p>

              <MapPin size={17} />

              <span><b>3rd Branch:</b> PR Palace, near Shyam Talkies,

              Manpur, Gaya, Bihar.</span>

            </p>

          </div>

        </div>



      </div>

    </section>

  );

}
