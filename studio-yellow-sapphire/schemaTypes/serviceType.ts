// import sanity functions =======================================================================================
import {defineField, defineType } from "sanity"                     //  defineType = define type of service
                                                                    //  defineField = define editable field in type
                                                                      


// Create service schema ======================================================================================                                                                    
export const serviceType = defineType({                             // export it to use in other files
    name: 'service',                                                // internal identifier
    title: 'Services',                                              // name shown in studio
    type: 'document',                                               // 1 service = 1 separate document
    fields: [
        defineField({
            name: 'name',                                           // internal field name used in code
            title: 'Service Name',                                  // label displayed in the studio
            type: 'string',                                         // characters
            validation: (Rule) => Rule.required(),                  // input is mandatory
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Service Description',
            type: 'text',                                           // multiline text input
            rows: 6,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Service Image',
            type:'image',                                           // Allows upload or image selection in studio
            options: {
                hotspot: true,                                      // Allow cropping before validation
            }
        }), 
        defineField({
            name: 'category',                                       // Service category is crutial here
            title: 'Service Category',                              
            type:'string',
            options: {                                              // create choices with radio option style
                list: [
                    {title: 'Major Service', value: 'major'},
                    {title: 'Minor Service', value: 'minor'},
                ],
                layout:'radio',
            },
            validation:(Rule) => Rule.required(),
        }),
        defineField({
            name: 'whatWeDoDescription',
            title: 'What We Do - Section Description',
            type: 'text',
            rows: 3,
        }), 
        defineField({
            name: 'whatWeDo',
            title: 'What We Do - Cards',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 4,
                    }),
                    defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                    }),
                ],
                preview: {
                        select: {
                        title: 'title',
                        media: 'image',
                    },
                },
                },
            ],
        }),
        defineField({
            name: 'whoWeHelpDescription',
            title: 'Who We Help - Section Description',
            type: 'text',
            rows: 3,
        }), 
        defineField({
            name: 'whoWeHelp',
            title: 'Who We Help',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    defineField({
                        name: 'image',
                        title: 'Icon',
                        type: 'image',
                        options: { hotspot: true },
                    }),
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 4,
                    }),
                ],
                preview: {
                        select: {
                        title: 'title',
                        media: 'image',
                    },
                },
                },
            ],
        }), 
        defineField({
            name: 'howWeWorkDescription',
            title: 'How We Work - Section Description',
            type: 'text',
            rows: 3,
        }), 
        defineField({
            name: 'howWeWork',
            title: 'How We Work',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 4,
                    }),
                ],
                preview: {
                        select: {
                        title: 'title',
                        media: 'image',
                    },
                },
                },
            ],
        }), 
    ],   
    preview: {                                                     // control how services appear in studio
        select: {                                                  // display name -> category -> image
            title: 'name',
            subtitle: 'category',
            media:'image',
        },
    },
    
    
})