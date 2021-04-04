import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdPerson, MdDescription } from 'react-icons/md'

// eslint-disable-next-line import/no-unused-modules
export default () => S.list()
  .title('Content')
  .items([
    S.listItem()
      .title('Site Settings')
      .icon(MdSettings)
      .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    S.listItem()
      .title('Details')
      .icon(MdPerson)
      .child(S.document().schemaType('details').documentId('details')),
    S.listItem()
      .title('Content')
      .icon(MdDescription)
      .child(S.document().schemaType('content').documentId('content')),
    ...S.documentTypeListItems().filter(
      listItem => !['siteSettings', 'details', 'content', 'author', 'portfolio'].includes(listItem.getId())
    )
  ])
