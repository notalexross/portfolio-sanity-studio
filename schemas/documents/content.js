export default {
  name: 'content',
  title: 'Content',
  type: 'document',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  preview: {
    prepare() {
      return ({
        title: 'Content',
      })
    },
  },
  fields: [
    {
      name: 'homeTitle',
      title: 'Home Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'homeSubtitle',
      title: 'Home Subtitle',
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
      name: 'homeImage',
      title: 'Home Background Image',
      type: 'array',
      of: [{type: 'creditedImage'}],
      validation: Rule => Rule.max(1)
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      description: 'Select featured projects, in the order that they should appear.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: Rule => Rule.unique()
    },
    {
      name: 'featuredSkills',
      title: 'Featured Skills',
      description: 'Select featured skills, in the order that they should appear.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
      validation: Rule => Rule.unique()
    },
  ]
}