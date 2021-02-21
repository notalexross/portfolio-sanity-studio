// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './objects/blockContent'
import creditedImage from './objects/creditedImage'
import svgUploadPreview from 'sanity-plugin-inline-svg'

import project from './documents/project'
import skill from './documents/skill'
import author from './documents/author'
import siteSettings from './documents/siteSettings'
import portfolio from './documents/portfolio'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    author,
    portfolio,
    project,
    skill,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    creditedImage,
    svgUploadPreview
  ]),
})
