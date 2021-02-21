export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'canonical',
      type: 'url',
      title: 'Site URL',
      description: 'Canonical link to the site.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ]
}