export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  preview: {
    prepare() {
      return ({
        title: 'Site Settings',
      })
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'canonical',
      title: 'Main Site URL',
      type: 'url',
      description: 'Canonical link to the site.'
    },
    {
      name: 'domainNames',
      title: 'Domain names',
      description: 'Enter all site domain names that contain project subdomains, e.g. rossdaniel.com',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'keywords',
      title: 'Site Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
  ]
}