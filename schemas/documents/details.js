export default {
  name: 'details',
  title: 'Details',
  type: 'document',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  preview: {
    prepare() {
      return {
        title: 'Details'
      }
    }
  },
  fields: [
    {
      name: 'social',
      title: 'Social Media',
      type: 'array',
      of: [{ type: 'socialDetails' }],
      validation: Rule => Rule.unique()
    }
  ]
}
