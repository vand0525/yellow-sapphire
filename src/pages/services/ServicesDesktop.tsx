import '../../styles/ServicesDesktop.css'                     
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getServices, type Service } from '../../lib/services'


  
export function ServicesDesktop() {

  // Fetch the data from sanity Studio ----------------------------------------------------------------------------------
  const [services, setServices] = useState<Service[]>([])                               // store services
  const [loading, setLoading] = useState(true);                                         // indicate loading data
  const [error, setError] = useState<string | null>(null)                               // store fetching error

  useEffect(()=>{                                                                         
    async function loadServices(){
      try{
        const data = await getServices();                                               // get data from sanity
        setServices(data);                                                              // update the page with data
        //console.log(data);
        //throw new Error('Testing error')
      } catch (error){
        setError('Unable to load services. Please try again later.')
        console.error('Failed to load services', error)
      } finally {
        setLoading(false)
      }
    }
    loadServices();
  }, [])
  // --------------------------------------------------------------------------------------------------------------------


  // Show loading services message ========================================
  if (loading) {
    return <p className="services-loading">Loading services...</p>
  }

   // Show error alert ====================================================

  if (error) {
    return <p className="services-error" role="alert">{error}</p>
  }


  return (
    <main className="services-page">
      
      {/* SERVICE INTRO ======================================================================================================================= */}
      <section className="services-intro">
        <h1>Our Services. (desktop)</h1>
        <p>Our core services focus on helping organizations embrace new opportunities, overcome challenges, and achieve meaningful results.</p>
      </section>

      {/* SERVICES GRID ======================================================================================================================= */}
      {/* Major Services ---------------------------------------------------------------------------------------*/} 
      <section className='major-services-grid'>
        {services
          .filter((service) => service.category === 'major')                      // Filter out minor services
          .map((service, index) =>                                                       // map major services then render
            <Link
              to="/services" 
              className='major-service-card' 
              key={service._id}>

                <span 
                  className={`major-service-number 
                              major-service-number-${index}
                            `}
                >0{index+1}
                </span>

                <img
                  className={`major-service-image major-service-image-${index}`} 
                  src={service.imageUrl}  
                  alt="Major-Service-Image" 
                />   

                <div className='major-service-information'>
                  <h2 className='service-title'>{service.name}</h2>
                  <p className='service-description'>{service.description}</p>
                  <span className='major-learn-link'>
                    Learn More
                    <svg 
                      className="major-learn-svg" 
                      viewBox="0 0 22 22" 
                      aria-hidden="true"
                    >
                      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </span>
                </div>



            </Link>                                                                                 
          )}
      </section>


      {/* Minor Services -----------------------------------------------------------------------------------------*/} 
      <div className='minor-service-header'>
          <h1>Other Services</h1>
          <span></span>
      </div>

      <section className='minor-services-grid'>
        {services
          .filter((service) => service.category === 'minor')                       // Filter out major services
          .map((service) =>                                                        // map minor services then render                                                  
            <Link
            to="/services" 
            className='minor-service-card' 
            key={service._id}>
                <div className='minor-service-accent' aria-hidden="true"></div>
                <div className='minor-service-information'>

                  <h2 className='service-title'>{service.name}</h2>
                  <p className='service-description'>{service.description}</p>
                  <span className='minor-learn-link'>
                    Learn More
                    <svg 
                      className="minor-learn-svg" 
                      viewBox="0 0 22 22" 
                      aria-hidden="true"
                    >
                      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </span>

                </div>
            </Link>                                                                              
          )}
      </section>
    </main>
    )
  }