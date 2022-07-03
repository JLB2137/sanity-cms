export default {
    name: 'plants',
    title: 'Plants',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
          name: 'binomial',
          title: 'Binomial Name',
          type: 'string',

      },
      {
        name: 'acquisitionDate',
        title: 'Acquisition Date',
        type: 'date',

      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [{
                name: 'imageDate',
                title: 'Image Date',
                type: 'date',
                options: {
                    isHighlighted: true // <-- make this field easily accessible
                }
            },
            {
              name: 'imageName',
              title: 'Image Name',
              type: 'string',
              options: {
                  isHighlighted: true // <-- make this field easily accessible
              }
          }
            ]
        }]
    },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'binomial',
        media: 'images.0',
      },
    },
  }
  