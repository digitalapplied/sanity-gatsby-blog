export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6015e08713fd17fd363eecda',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6qw6hb82',
                  apiId: '3b45dc93-3351-4ecb-9c0a-de092d82583c'
                },
                {
                  buildHookId: '6015e087cb006fcb9889b6c1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-efjhhths',
                  apiId: '92dcf421-90da-4496-a659-2efc8aa1ff23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalapplied/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-efjhhths.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
