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
                  buildHookId: '5eaac5b4524e1d45ca4e5eff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k53qqgfm',
                  apiId: 'f3dde1bd-a483-4d3e-a8e7-ea6e0f089420'
                },
                {
                  buildHookId: '5eaac5b4ad207ee97baa8c30',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-crf7k6ke',
                  apiId: '920c3808-4a81-4944-890c-e01fac4c1f56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgemillard/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-crf7k6ke.netlify.app', category: 'apps' }
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
