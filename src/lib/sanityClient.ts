// create a connection ==============================================================================================
import { createClient } from "@sanity/client";                                         

export const sanityClient = createClient({                              //Creates a connection to Sanity
    projectId: 'rrm75v0r',                                              // identify our project id
    dataset: 'production',                                              // select where services are stoored
    apiVersion: '2025-01-01',                                           // sanity api version
    useCdn: false,                                              // cache content for faster public reads / disable for now
})