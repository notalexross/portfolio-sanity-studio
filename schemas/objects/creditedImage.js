export default {
  name: 'creditedImage',
  title: 'Credited Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'credit',
      title: 'Credit',
      type: 'string',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.error('Image credit is required.').required()
    },
  ],
}
