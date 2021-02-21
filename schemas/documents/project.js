export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      media: 'desktopImage',
    },
    prepare(selection) {
      const { date } = selection
      return Object.assign({}, selection, {
        subtitle: date,
      })
    },
  },
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
    // TODO: add requirement that only one of either subdomain or url are supplied.
    // Possibly via a separate object type?
    // Looks to be not possible without making an actual component for it (https://github.com/sanity-io/sanity/issues/677).
    {
      name: 'subdomain',
      title: 'Subdomain',
      description: 'Within portfolio site.',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      description: 'URL of project, given it is not at a subdomain of portfolio site.',
      type: 'url',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
      validation: Rule => Rule.unique()
    },
    {
      name: 'publishedAt',
      title: 'Date published',
      type: 'date',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    // TODO: restrict dimensions/aspect ratio?
    // TODO: add something like a mainImage object type, which would require a caption and alt text.
    {
      name: 'desktopImage',
      title: 'Desktop Image',
      description: '16:9 view of the project.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileImage',
      title: 'Mobile Image',
      description: '9:16 view of the project.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
}
