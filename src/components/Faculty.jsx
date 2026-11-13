import { motion } from 'framer-motion';
import { SectionHeading, reveal } from './Common';

export default function Faculty() {

  return (

    <section className="faculty-section section-pad" id="faculty">

      <div className="container">

        <SectionHeading

          eyebrow="MEET YOUR FACULTY"

          title={<>Learn with <span>RP Yadaw Sir.</span></>}

          description="Concept-based Chemistry learning with clear explanations and systematic academic preparation."

          align="center"

        />



        <motion.div className="faculty-card" {...reveal}>

          <div className="faculty-photo-wrap">

            <img

              src="/Kota_sir_photo.jpeg"

              alt="RP Yadaw Sir - Chemistry Faculty at Kota Chemistry Gaya"

              className="faculty-photo"

            />

          </div>



          <h3>RP Yadaw Sir</h3>

          <span className="faculty-role">

            Founder & Chemistry Faculty · Kota Chemistry Gaya

          </span>



          <p>

            Learn Chemistry through clear explanations,

            concept-based teaching, numerical practice

            and systematic exam preparation.

          </p>

        </motion.div>

      </div>

    </section>

  );

}
