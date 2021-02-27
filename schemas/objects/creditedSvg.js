export default {
  name: 'creditedSvg',
  title: 'Credited SVG',
  type: 'object',
  fields: [
    {
      name: 'svg',
      title: 'SVG',
      type: 'svgUploadPreview',
      validation: Rule => Rule.required().error('Missing SVG.')
    },
    {
      name: 'credit',
      title: 'Credit',
      type: 'string',
      description: 'e.g. SVG courtesy of Font-Awesome: https://fontawesome.com/license',
    },
  ],
}