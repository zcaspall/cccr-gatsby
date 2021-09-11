export default {
    name: 'event',
    title: 'Event',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Event Name',
            type: 'string',
            description: 'Name of the event.'
        },
        {
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            description: 'Date of the event.'
        },
    ],
}