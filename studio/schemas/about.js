export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'aboutText',
            title: 'About Text',
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'aboutImage',
            title: 'About Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}