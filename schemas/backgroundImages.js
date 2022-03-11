export default {
    name: 'backgroundImages',
    title: 'Background Images',
    type: 'document',
    fields: [
      {
        name: 'page',
        title: 'Page Name',
        type: 'string',
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
    ],
    preview: {
      select: {
        title: 'page',
        media: 'images.0',
      },
    },
  }
  