export default {
    name: 'designProject',
    title: 'Design Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Personal', value: 'personal'},
                    {title: 'Client', value: 'client'},
                    {title: 'School', value: 'school'},
                ],
            },
        },
        {
            name: 'link',
            type: 'url',
        },
        {
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags',
            }
        }
    ],
};