import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { ServicesDesktop } from './ServicesDesktop';
import { ServicesMobile } from './ServicesMobile';
import { getServices } from '../../lib/services';
import type { Service } from '../../lib/services';




export function ServicesPage() {

  const { isDesktop } = useOutletContext<PageContext>();
  const [services, setServices] = useState<Service[]>([])                               // store services
  const [loading, setLoading] = useState(true);                                         // indicate loading data
  const [error, setError] = useState<string | null>(null)                               // store fetching error
  
  // Fetch the data from sanity Studio ----------------------------------------------------------------------------------
  useEffect(()=>{                                                                         
    async function loadServices(){
      try{
        const data = await getServices();                                               // get data from sanity
        setServices(data);                                                              // update the page with data
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
    return <p >Loading services...</p>
  }

   // Show error alert ====================================================

  if (error) {
    return <p role="alert">{error}</p>
  }

  return isDesktop ? <ServicesDesktop services={services} /> : <ServicesMobile />;
}
