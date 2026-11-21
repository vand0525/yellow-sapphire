import styles from './ServiceDetailDesktop.module.css';
import { images } from '../../assets/images';
import { Icon } from '../../components/Icon/Icon'
import { Link } from 'react-router-dom';
import type { Service} from '../../lib/services';
import type { Testimonial} from '../../lib/testimonials';


type Props = {
  services: Service;
  testimonials: Testimonial[];
}

export function ServiceDetailDesktop({services, testimonials} : Props) {

  return (
    <main className={styles.ServiceDetailDesktop}> 
      {/* serviceDetailsHero ------------------------------------------------------------------------- */}
      <section className={styles.serviceDetailsHero}>
        <img 
          className={styles.serviceDetailsImg} 
          src={images.serviceDetailHero} 
          alt="" 
        />

        <div className={styles.heroContent}>
          <h1>Responsible AI Adoption</h1>
          <p> Adopt AI with confidence through practical guidance
              that prioritizes responsible innovation, security, and
              your business goals.
          </p>
        </div>
      </section>

      {/* whatWeDoSection -------------------------------------------------------------------------- */}
      <section className={styles.whatWeDoSection}>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>What We Do</h2>
            <span className={styles.accentLine}></span>
          </div>
          <p className={styles.sectionDescription}>
            {services.whatWeDoDescription}
          </p>
        </div>

        <div className={styles.whatWeDoContent}>
          {services.whatWeDo?.map((item) => (

            <div className={styles.whatWeDoCard} key={item._key}>

              {item.imageUrl && (
                <img 
                  className={styles.whatWeDoImg} 
                  src={item.imageUrl} 
                  alt={item.title} 
                />
              )}
              
              <div>
                <h3 className={styles.sectionCardTitle}>
                  {item.title}
                </h3>
                <p className={styles.sectionCardDescription}> 
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* whoWeHelpSection --------------------------------------------------------------------- */}
      <section className={styles.whoWeHelpSection}>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>Who We Help </h2>
            <span className={styles.accentLine}></span>
          </div>
          <p className={styles.sectionDescription}>
            {services.whoWeHelpDescription}
          </p>
        </div>

        <div className={styles.whoWeHelpContent}>
          {services.whoWeHelp?.map((item)=>(
            <div className={styles.whoWeHelpCard} key={item._key} >
              <div className={styles.whoWeHelpIconContainer}>
                <img  src={item.iconUrl} alt={item.title} />
              </div>
              <h3 className={styles.sectionCardTitle}>
                {item.title}
              </h3>
              <p className={styles.sectionCardDescription}> 
                {item.description}
              </p>
            </div>
          ))}


        </div>

      </section>

      {/* howWeWorkSection ----------------------------------------------------------------*/}
      <section className={styles.howWeWorkSection}>
        
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>How We Work </h2>
            <span className={styles.accentLine}></span>
          </div>
          <p className={styles.sectionDescription}>
            {services.howWeWorkDescription}
          </p>
        </div>

        <div className={styles.howWeWorkContent}>
          {services.howWeWork?.map((item, index)=>(
            <div className={styles.howWeWorkCard} key={item._key}>
              <span>0{index+1}</span>
              <div>
                <h3 className={styles.sectionCardTitle}>
                  {item.title}
                </h3>
                <p className={styles.sectionCardDescription}> 
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Testimonial -------------------------------------------------------------------*/}
      <section className={styles.relatedTestimonials}>
        
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>Related Testimonials</h2>
            <span className={styles.accentLine}></span>
          </div>
        </div>

        <div className={styles.relatedTestimonialsContent}>
          {testimonials.map((item)=>(
            <Link to="/testimonials" className={styles.relatedTestimonialCard} key={item._id}>  
              <div className={styles.testimonialServiceType}>
                <Icon name='shieldCheck' size='sm'></Icon>
                <p>{item.serviceType}</p>
              </div>

              <div className={styles.testimonialContent}>
                <h3 className={styles.testimonialtitle}>
                  {item.name}
                </h3>
                <div className={styles.testimonialDescription}>
                  <Icon 
                    className={styles.testimonialIcon} 
                    name='quote' 
                    size='md'
                  > 
                  </Icon>
                  <p>
                    {item.description}
                  </p>
                </div>

                <div className={styles.testimonialPersonDetails}>
                  <p className={styles.testimonialPersonNameJob}>
                    {item.clientName}
                  </p>
                  <div className={styles.testimonialCompanyDetails}>
                    <p className={styles.testimonialCompany}>
                      {item.companyName}
                    </p>
                    <p className={styles.testimonialCompanyLocation}>
                      {item.companyLocation}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </div>   

        <div className={styles.seeMoreTestimonies} >
          <Link to="/testimonials"> See More</Link>
        </div>
      </section>

    </main>
  )
}
