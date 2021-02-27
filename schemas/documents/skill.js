import { MdLocalOffer } from "react-icons/md"

export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title,
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
      type: 'url',
    },
    // TODO: combine into a new type
    {
      name: 'icon',
      title: 'Icon',
      type: 'array',
      of: [{type: 'creditedSvg'}],
      validation: Rule => Rule.max(1)
    },
    // {
    //   name: 'test',
    //   title: 'test SVG',
    //   description: 'Upload an SVG file to be used as skill icon.',
    //   type: 'creditedSvg',
    // },
    // {
    //   name: 'icon',
    //   title: 'Icon SVG',
    //   description: 'Upload an SVG file to be used as skill icon.',
    //   type: 'svgUploadPreview',
    // },
    // {
    //   name: 'iconCredit',
    //   title: 'Icon Credit',
    //   description: 'e.g. SVG courtesy of Font-Awesome: https://fontawesome.com/license',
    //   type: 'string',
    // }
  ],
}