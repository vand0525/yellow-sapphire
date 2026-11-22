import styles from './TestimonialsDesktop.module.css';
import { useState } from 'react';
import type { Testimonial} from '../../lib/testimonials';
import { Icon } from '../../components/Icon/Icon'

type Props = {
  testimonials: Testimonial[]
}

export function TestimonialsDesktop({testimonials} : Props){

  const [selectedService, setSelectedService] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // FILTER TESTIMONIALS =======================================================
  const filteredTestimonials =
    selectedService === 'All' 
      ? testimonials
      : selectedService === 'Other'
        ? testimonials.filter((item)=> 
          ![
            'Responsible AI Adoption',
            'AI Consulting',
            'Grant Writing'
          ].includes(item.serviceType)
        )
      : testimonials.filter(
          (item) => item.serviceType === selectedService
        );

 // PAGINATION ===============================================================
  const testimonialsPerPage = 6;

  const totalPages = Math.ceil(                                    //calc total number of pages
    filteredTestimonials.length / testimonialsPerPage
  );

  const startIndex = (currentPage - 1) * testimonialsPerPage;      //calc where current page start in array
  const visibleTestimonials = filteredTestimonials.slice(          // extract with slice, current page testimonnials
    startIndex,
    startIndex + testimonialsPerPage
  );

  
  function handleFilter(service: string) {                         // to be clicked to filter 
  setSelectedService(service);
  setCurrentPage(1);
}

  return (
    <main className={styles.root}>

      <div className={styles.testimonialHeader}>
          <h1 className={styles.TestimonialHeaderTitle}>
            What Our Clients Say
          </h1>
          <p className={styles.TestimonialHeaderDescription}>
            Discover how we’ve helped businesses navigate challenges, explore new
            opportunities, and achieve their goals through practical guidance and
            collaboration.
          </p>
      </div>

      <div className={styles.testimonialNavBar}> 
        <button 
          onClick={() => handleFilter('All')}
          className={`${styles.filterButton} ${
            selectedService === 'All' ? styles.active : ''
          }`}
          >
          All
        </button>

        <button 
          onClick={() => handleFilter('Responsible AI Adoption')}
          className={`${styles.filterButton} ${
            selectedService === 'Responsible AI Adoption' ? styles.active : ''
          }`}
          >
          Responsible AI
        </button>

        <button 
          onClick={() => handleFilter('AI Consulting')}
          className={`${styles.filterButton} ${
            selectedService === 'AI Consulting' ? styles.active : ''
          }`}
          >
          AI Consulting
        </button>
        

        <button 
          onClick={() => handleFilter('Grant Writing')}
          className={`${styles.filterButton} ${
            selectedService === 'Grant Writing' ? styles.active : ''
          }`}
          >
          Grant Writing
        </button>

        <button 
          onClick={() => handleFilter('Other')}
          className={`${styles.filterButton} ${
            selectedService === 'Other' ? styles.active : ''
          }`}
          >
          Other
        </button>
      </div>

      <div className={styles.testimonialsContent}>
        {visibleTestimonials.map((item)=>(
          <div className={styles.testimonialCard} key={item._id}>  
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
          </div>
        ))}
      </div>

      <div className={styles.moreTestimonialsBtnContrainer}>

        <button 
          className={styles.previousTestimonies}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>   

        <button 
        className={styles.nextTestimonies}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= totalPages}                               
        >
          Next
        </button>   

      </div>
    </main>
  )
}
0