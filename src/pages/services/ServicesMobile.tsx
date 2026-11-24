import styles from './ServicesMobile.module.css'                   
import { Link } from 'react-router-dom'
import type { Service} from '../../lib/services';
import { Icon } from '../../components/Icon/Icon'


type Props = {
  services: Service[];
}

export function ServicesMobile({services} : Props) {
  

  return (
    <main className={styles['services-page']}>
      
      {/* SERVICE INTRO ======================================================================================================================= */}
      <section className={styles['services-intro']}>
        <h1>Our Services. (Mobile)</h1>
        <p>Our core services focus on helping organizations embrace new opportunities, overcome challenges, and achieve meaningful results.</p>
      </section>

      {/* SERVICES GRID ======================================================================================================================= */}
      {/* Major Services ---------------------------------------------------------------------------------------*/} 
      <section className={styles['major-services-grid']}>
        {services
          .filter((service) => service.category === 'major')                // Filter out minor services
          .map((service, index) =>                                          // map major services then render
            <Link
              to={`/services/${service.slug}`}
              className={`
                ${styles['major-service-card']} 
                ${styles[`major-service-card-${index}`]}
              `}
              key={service._id}>

                <div 
                  className={`
                    ${styles['service-image-div']} 
                    ${styles[`service-image-div-${index}`]}
                  `}
                >
                  <span 
                    className={`
                      ${styles['major-service-number']} 
                      ${styles[`major-service-number-${index}`]}
                    `}
                  >0{index+1}
                  </span>

                  <img
                    className={`
                      ${styles['major-service-image']} 
                      ${styles[`major-service-image-${index}`]}
                    `}
                    src={service.imageUrl}  
                    alt="Major-Service-Image" 
                  />   
                </div>


                <div className={styles['major-service-information']}>
                  <h2 className={styles['service-title']}>{service.name}</h2>
                  <p className={styles['service-description']}>{service.description}</p>
                  <span className={styles['major-learn-link']}>
                    Learn More
                    <Icon name="info"></Icon>
                  </span>
                </div>



            </Link>                                                                                 
          )}
      </section>


      {/* Minor Services -----------------------------------------------------------------------------------------*/} 
      <div className={styles['minor-service-header']}>
          <h1>Other Services</h1>
          <span></span>
      </div>

      <section className={styles['minor-services-grid']}>
        {services
          .filter((service) => service.category === 'minor')                       // Filter out major services
          .map((service) =>                                                        // map minor services then render                                                  
            <Link
            to={`/services/${service.slug}`} 
            className={styles['minor-service-card']}
            key={service._id}>
                <div className={styles['minor-service-accent']} aria-hidden="true"></div>
                <div className={styles['minor-service-information']}>

                  <h2 className={styles['service-title']}>{service.name}</h2>
                  <p className={styles['service-description']}>{service.description}</p>
                  <span className={styles['minor-learn-link']}>
                    Learn More
                    <Icon name="info"></Icon>
                  </span>

                </div>
            </Link>                                                                              
          )}
      </section>
    </main>
    )
  }