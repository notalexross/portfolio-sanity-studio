import S from '@sanity/desk-tool/structure-builder'
import {
  MdSettings,
  MdPerson,
  MdDescription
} from "react-icons/md"

export default () => (
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Author')
        .icon(MdPerson)
        .child(
          S.document()
            .schemaType('author')
            .documentId('author')
        ),
      S.listItem()
        .title('Portfolio')
        .icon(MdDescription)
        .child(
          S.document()
            .schemaType('portfolio')
            .documentId('portfolio')
        ),
      ...S.documentTypeListItems().filter(listItem => !['siteSettings', 'author', 'portfolio'].includes(listItem.getId()))
    ])
)