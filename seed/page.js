export default [
  {
    name: 'home',
    title: 'Logiistic',
    description: 'Logiistic',
    components: [
      {
        name: 'renderHtml',
        data: JSON.stringify({
          __html: '<h1>Home</h1>',
        }),
      },
      {
        name: 'navigation',
        data: JSON.stringify({
          links: [
            {
              text: 'About',
              url: '/about',
            },
          ],
        }),
      },
    ],
  },
  {
    name: 'about',
    title: 'Logiistic | about',
    description: 'About Logiistic',
    components: [
      {
        name: 'renderHtml',
        data: JSON.stringify({
          __html: '<h1>About</h1>',
        }),
      },
    ],
  },
  {
    name: 'error',
    title: 'Logiistic | 404 Page Not Found',
    description: '404 Page Not Found',
    components: [
      {
        name: 'renderHtml',
        data: JSON.stringify({
          __html: '<h1>404 Page Not Found</h1><p>Sorry, the page you were trying to view does not exist.</p>',
        }),
      },
    ],
  },
];
