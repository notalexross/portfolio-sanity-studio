export default {
  name: 'socialDetails',
  title: 'Social Details',
  type: 'object',
  preview: {
    select: {
      title: 'url'
    }
  },
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      description: 'URL of profile.',
      type: 'url',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }
  ]
}
