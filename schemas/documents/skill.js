import { MdLocalOffer } from 'react-icons/md'

export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
        media: MdLocalOffer
      }
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'array',
      of: [{ type: 'creditedSvg' }],
      validation: Rule => Rule.max(1)
    }
  ]
}
