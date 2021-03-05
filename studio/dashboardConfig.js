export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60422659ec5665f3fa298057',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-h9riffts',
                  apiId: '1cb94c01-d892-460d-babd-b9adee00a6a3'
                },
                {
                  buildHookId: '60422659ec5665f42e29823f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-n6ofms35',
                  apiId: 'eee978cc-b322-497f-8fca-3f87051b1740'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jsilio/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-web-n6ofms35.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
