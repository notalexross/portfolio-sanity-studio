export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'desktopImage'
    },
    prepare(selection) {
      const { date } = selection
      return {
        ...selection,
        subtitle: date
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'subdomain',
      title: 'Subdomain',
      description: 'Within portfolio site.',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      description: 'URL of project, given it is not at a subdomain of portfolio site.',
      type: 'url'
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
      validation: Rule => Rule.unique()
    },
    {
      name: 'publishedAt',
      title: 'Date published',
      type: 'date'
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    // TODO: restrict dimensions/aspect ratio?
    // TODO: add something like a mainImage object type, which would require a caption and alt text.
    // There might be a way to setup custom assets that can have alt and credit. (google creditLine)
    // TODO: consider changing names to imageDesktop and imageMobile so appear next to each other in GraphQL. (NOT for homeImage in content.js though)
    {
      name: 'desktopImage',
      title: 'Desktop Image',
      description: '16:9 view of the project.',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mobileImage',
      title: 'Mobile Image',
      description: '9:16 view of the project.',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  orderings: [
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }]
    },
    {
      title: 'Date published',
      name: 'publishedAt',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ]
}
