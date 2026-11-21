// import sanity functions =======================================================================================
import {defineField, defineType } from "sanity"                     //  defineType = define type of service
                                                                    //  defineField = define editable field in type
                                                                      


// Create service schema ======================================================================================                                                                    
export const testimonials = defineType({                            // export it to use in other files
    name: 'testimonials',                                           // internal identifier
    title: 'Testimonials',                                          // name shown in studio
    type: 'document',                                               // 1 service = 1 separate document
    fields: [
        defineField({
            name: 'name',                                           // internal field name used in code
            title: 'Testimonial Name',                              // label displayed in the studio
            type: 'string',                                         // characters
            validation: (Rule) => Rule.required(),                  // input is mandatory
        }),
        defineField({
            name: 'description',
            title: 'Testimonial Description',
            type: 'text',                                           // multiline text input
            rows: 6,
            validation: (Rule) => Rule.required(),
        }), 
        defineField({
            name: 'serviceType',                                    // Service category is crutial here
            title: 'Service Type',                              
            type:'string',
            options: {                                              // create choices with radio option style
            list: [
                {title: 'Responsible AI Adoption', value: 'Responsible AI Adoption'},
                {title: 'AI Consulting', value: 'AI Consulting'},
                {title: 'Grant Writing', value: 'Grant Writing'},
                {title: 'AI Roadmap', value: 'AI Roadmap'},
                {title: 'AI Training', value: 'AI Training'},
                {title: 'AI Project Management', value: 'AI Project Management'},
            ],
                layout:'radio',
            },
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name: 'clientName',                                   
            title: 'Client Name',                                 
            type: 'string',                                         
            validation: (Rule) => Rule.required(),                  
        }),
        defineField({
            name: 'clientTitle',                                   
            title: 'Client Title',                                 
            type: 'string',                                         
            validation: (Rule) => Rule.required(),                  
        }),
        defineField({
            name: 'companyName',                                   
            title: 'Company Name',                                 
            type: 'string',                                         
            validation: (Rule) => Rule.required(),                  
        }),
        defineField({
            name: 'companyLocation',                                   
            title: 'Company Location',                                 
            type: 'string',                                         
            validation: (Rule) => Rule.required(),                  
        }),
        
    ],   
})