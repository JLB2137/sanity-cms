export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
      {
        name: 'projectName',
        title: 'Project Name',
        type: 'string',
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
        name: 'completionDate',
        title: 'Completion Date',
        type: 'date',

      },
      {
        name: 'projectURL',
        title: 'Project URL',
        type: 'string',
      },
      {
        name: 'gitURL',
        title: 'GitHub URL',
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
            }]
        }]
      },
      {
        name: 'technology',
        title: 'Technology Used',
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
      {
        name: 'features',
        title: 'Key Features',
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
      {
        name: 'shortDescription',
        title: 'Short Description',
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
      {
        name: 'longDescription',
        title: 'Long Description',
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
        title: 'projectName',
        media: 'images.0',
      },
    },
  }
  