import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook } from 'lucide-react';
import { SectionHeading, reveal } from './Common';

export default function Achievements() {

  const photos = [

    "Achivement1.png",

    "Achivement2.png",

    "Achivement3.png",

    "Achivement4.png",

    "Achivement5.png",

    "Achivement6.jpeg",

    "Achivement7.png",

  ];



  return (

    <section className="achievements-section section-pad" id="achievements">

      <div className="container">



        <SectionHeading

          eyebrow="OUR STUDENTS, OUR PRIDE"

          title={<>Our Students <span>Achievements</span></>}

          description="Celebrating success, hard work and memorable moments."

          align="center"

        />



        {/* SINGLE GALLERY BOX */}

        <div className="achievement-main-box">



          <div className="achievement-grid">

            {photos.map((photo, index) => (

              <a

                href={`/${photo}`}

                target="_blank"

                rel="noreferrer"

                key={photo}

                className="achievement-image"

              >

                <img

                  src={`/${photo}`}

                  alt={`Kota Chemistry Achievement ${index + 1}`}

                  loading="lazy"

                />

              </a>

            ))}

          </div>



          <div className="achievement-bottom">

            <span>More Student Success Stories</span>



            <a

              href="https://www.facebook.com/share/1CeWcSELn9/"

              target="_blank"

              rel="noopener noreferrer"

              className="button button-blue"

            >

              <Facebook size={17} />

              Follow on Facebook

              <ArrowUpRight size={16} />

            </a>

          </div>



        </div>

      </div>

    </section>

  );

}
