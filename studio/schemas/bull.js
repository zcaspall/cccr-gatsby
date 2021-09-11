export default {
    name: 'bull',
    title: 'Bull',
    type: 'document',

    fields: [
        {
            name: 'bullName',
            title: "Bull's Name",
            type: 'string',
            description: "Enter the bull's name or tag number."
        },
        {
            name: 'bullImage',
            title: 'Bull Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Add a picture of the bull',
        },
        {
            name: 'bullEpd',
            title: 'Bull EPDs',
            type: 'file',
            validation: required()
        }
    ],
}