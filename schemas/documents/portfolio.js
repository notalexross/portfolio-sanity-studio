export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  preview: {
    prepare() {
      return ({
        title: 'Projects',
      })
    },
  },
  fields: [
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      description: 'Select featured projects, in the order that they should appear.',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: Rule => Rule.unique()
    },
  ],
}
