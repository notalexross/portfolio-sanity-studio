export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'netlify',
      options: {
        sites: [
          {
            title: 'Portfolio Live',
            apiId: process.env.SANITY_STUDIO_NETLIFY_APP_ID,
            buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID,
            name: process.env.SANITY_STUDIO_NETLIFY_SITE_NAME
          }
        ]
      }
    },
    {
      name: 'project-users'
    },
    {
      name: 'sanity-tutorials'
    },
  ]
}