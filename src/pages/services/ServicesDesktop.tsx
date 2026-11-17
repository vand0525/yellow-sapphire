import '../../styles/ServicesDesktop.css'
import serviceImage1 from '../../assets/major-service-1.png';
import serviceImage2 from '../../assets/major-service-2.png';
import serviceImage3 from '../../assets/major-service-3.png';

import { Link } from 'react-router-dom';

  // created Service custom type with for major and minor services ------------------------------------
  type Service = {
    id: number;
    title: string;
    description:string;
    image?: string;
    category: 'major' | 'minor';
  }

  // Services Data ------------------------------------------------------------------------------------
  const services: Service[] = [
    {
      id: 1,
      title: "Responsible AI Adoption",
      description: "Turn AI potential into real business value, safely and responsibly. We help organizations identify meaningful opportunities, introduce practical AI solutions, and establish the safeguards needed for responsible implementation. Build confidence in emerging technologies while improving efficiency,supporting your team, and creating lasting value.",
      category: "major",
      image: serviceImage1,
    },
    {
      id: 2,
      title: "AI Consulting",
      description: "Make informed decisions about AI with guidance tailored to your organization’s needs. From developing a clear strategy to evaluating tools and planning implementation, we help you navigate complex technologies with confidence. Discover practical opportunities, overcome challenges, and turn your AI ambitions into actionable results.",
      category: "major",
      image: serviceImage2,      
    },
    {
      id: 3,
      title: "Grant Writing",
      description: "Give your ideas the strongest possible chance of securing funding. We help organizations identify relevant funding opportunities, develop compelling proposals, and communicate their goals with clarity and impact. From initial research to final submission, our approach helps you present a convincing case for investment in your vision.",
      category: "major",
      image: serviceImage3,      
    },  
    {
    id: 4,
    title: 'AI Roadmap',
    description: 'Develop a clear strategy for AI adoption. We help you assess your readiness, identify opportunities, and establish practical priorities aligned with your organization’s goals.',
    category: 'minor',
  },
  {
    id: 5,
    title: 'AI Training',
    description: 'Equip your team with the skills to use AI effectively. Our practical training builds confidence, encourages responsible adoption, and helps employees apply AI in their daily work..',
    category: 'minor',
  },
  {
    id: 6,
    title: 'AI Project Management',
    description: 'Bring your AI initiatives from planning to completion. We help coordinate resources, manage timelines, and oversee implementation to keep your projects on track.',
    category: 'minor',
  }]

  
// Defined the component --------------------------------------------------------------------------------------------------------------
export function ServicesDesktop() {

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
          .map((service) =>                                                       // map major services then render
            <Link
              to="/services" 
              className='major-service-card' 
              key={service.id}>

                <span 
                  className={`major-service-number 
                              major-service-number-${service.id}
                            `}
                >{String(service.id).padStart(2, '0')}
                </span>

                <img
                  className={`major-service-image major-service-image-${service.id}`} 
                  src={service.image}  
                  alt="Major-Service-Image" 
                />   

                <div className='major-service-information'>
                  <h2 className='service-title'>{service.title}</h2>
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
            key={service.id}>
                <div className='minor-service-accent' aria-hidden="true"></div>
                <div className='minor-service-information'>

                  <h2 className='service-title'>{service.title}</h2>
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
