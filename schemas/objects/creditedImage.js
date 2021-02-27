export default {
  name: 'creditedImage',
  title: 'Credited Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Missing image.')
    },
    {
      name: 'credit',
      title: 'Image Credit',
      type: 'string',
      description: 'e.g. Image courtesy of https://unsplash.com/@traf',
    },
  ],
}
