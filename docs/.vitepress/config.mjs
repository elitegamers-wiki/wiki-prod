import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'EliteGamers RP - Wiki',
  description:
    'Wiki oficial al server-ului EliteGamers RolePlay. Aici vei putea gasi diferite informatii aferente server-ului nostru de joc. Informatiile sunt adaugate de catre staff, dar si cat de jucatori, deci simtiti-va liberi sa contribuiti la imbunatatirea acestui wiki!',
  sitemap: {
    hostname: 'https://wiki.elitegamers.ro',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/elitegamers.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonAriaLabel: 'Cauta',
            buttonText: 'Cauta',
          },
          modal: {
            displayDetails: 'Arata detalii',
            resetButtonTitle: 'Reseteaza',
            backButtonTitle: 'Inapoi',
            noResultsText: 'Nu au fost gasite rezultate care sa contina',
            footer: {
              selectText: 'Selecteaza',
              selectKeyAriaLabel: 'Selecteaza',
              navigateText: 'Navigheaza',
              navigateUpKeyAriaLabel: 'Navigheaza in sus',
              navigateDownKeyAriaLabel: 'Navigheaza in jos',
              closeText: 'Inchide',
              closeKeyAriaLabel: 'Inchide',
            },
          },
        },
      },
    },

    docFooter: {
      prev: 'Pagina anterioara',
      next: 'Pagina urmatoare',
    },

    darkModeSwitchLabel: 'Schimba tema',
    sidebarMenuLabel: 'Meniu',

    outline: {
      label: 'Cuprins',
    },

    lastUpdatedText: 'Ultima actualizare',
    returnToTopLabel: 'Intoarce-te sus',

    footer: {
      message: 'Eliberat sub Licenta MIT.',
      copyright: 'Copyright © 2023-prezent EliteGamers Romania',
    },

    editLink: {
      pattern: 'https://github.com/elitegamers-wiki/wiki/edit/main/:path',
      text: 'Modifica aceasta pagina pe GitHub',
    },

    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
        },
        link: 'https://discord.gg/elitegamers-ro-351058903271735306',
      },

      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
        },
        link: 'https://www.tiktok.com/@elitegamers.ro',
      },

      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
        },
        link: 'https://www.instagram.com/elitegamers.ro/',
      },

      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
        },
        link: 'https://www.youtube.com/@elitegamers7873',
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>FiveM</title><path d="M22.4 24h-5.225c-.117 0-.455-1.127-1.026-3.375-1.982-6.909-3.124-10.946-3.417-12.12l3.37-3.325h.099c.454 1.42 2.554 7.676 6.299 18.768ZM12.342 7.084h-.048a3.382 3.385 0 0 1-.098-.492v-.098a102.619 102.715 0 0 1 3.272-3.275c.13.196.196.356.196.491v.05a140.694 140.826 0 0 1-3.322 3.324ZM5.994 10.9h-.05c.67-2.12 1.076-3.209 1.223-3.275L14.492.343c.08 0 .258.524.533 1.562zm1.37-4.014h-.05C8.813 2.342 9.612.048 9.71 0h4.495v.05a664.971 664.971 0 0 1-6.841 6.839Zm-2.69 7.874h-.05c.166-.798.554-1.418 1.174-1.855a312.918 313.213 0 0 1 5.71-5.717h.05c-.117.672-.375 1.175-.781 1.52zM1.598 24l-.098-.05c1.399-4.172 2.148-6.322 2.248-6.45l6.74-6.694v.05C10.232 11.88 8.974 16.263 6.73 24Z"/></svg>',
        },
        link: 'https://cfx.re/join/p9a86y',
      },
    ],

    nav: [
      { text: 'Acasa', link: '/' },
      { text: 'Informatii', link: '/zona-info/informatii' },
      { text: 'Cum intri pe server?', link: '/zona-info/cum-intru-pe-server' },
      { text: 'Regulament', link: '/zona-info/regulament' },

      {
        text: 'Comenzi Rapide',
        items: [
          { text: 'Politie', link: '/factiuni/politie' },
          { text: 'Smurd', link: '/factiuni/smurd' },
        ],
      },

      {
        text: 'Updates',
        items: [{ text: 'Lista cu update-uri', link: '/zona-info/updates' }],
      },
    ],

    sidebar: [
      {
        text: 'Zona Informativa',
        activeMatch: '^/zona-info/',
        items: [
          { text: 'Informatii Importante', link: '/zona-info/informatii' },
            {
              text: 'Regulamente',
              activeMatch: '^/zona-info/regulamente/',
              collapsed: true,
              items: [
                { text: 'Regulament General', link: '/zona-info/regulament' },
                { text: 'Regulament Aditional', link: '/zona-info/regulament-aditional' },
                { text: 'Regulament Politie', link: '/zona-info/regulament-politie' },
                { text: 'Regulament Mafii', link: '/zona-info/regulament-mafii' },
              ],
            },
          {
            text: 'Cum intru pe server?',
            link: '/zona-info/cum-intru-pe-server',
          },
          { text: 'Updates', link: '/zona-info/updates' },
          { text: 'Codul Penal', link: '/zona-info/cod-penal' },
        ],
      },
      {
        text: 'General',
        activeMatch: '^/general/',
        items: [
          { text: 'Telefon', link: '/general/telefon' },
          { text: 'Inventar', link: '/general/inventar' },
          { text: 'Crafting', link: '/general/crafting' },
          { text: 'Scoala De Soferi', link: '/general/scoala-de-soferi' },
          { text: 'ATM-uri', link: '/general/atm-uri' },
        ],
      },
      {
        text: 'Activități legale/ilegale',
        activeMatch: `^/joburi/`,
        items: [
          { text: 'Despre Job-uri', link: '/joburi/joburi' },
          {
            text: "Joburi legale",
            collapsed: true,
            items: [ 
              { text: 'Mecanic', link: '/joburi/mecanic' },
              { text: 'Taximetrist', link: '/joburi/taximetrist' },
              { text: 'Sofer de autobuz', link: '/joburi/sofer-de-autobuz' },
              { text: 'Pescar', link: '/joburi/pescar' },
              { text: 'Tirist', link: '/joburi/tirist' },
              { text: 'Ciupercar', link: '/joburi/ciupercar' },
              { text: 'Miner', link: '/joburi/miner' },
              { text: 'Livrator Pizza', link: '/joburi/pizza' },
            ]
          },
          {
            text: "Joburi ilegale",
            collapsed: true,
            items: [
              {text: 'Metamfetamina', link: '/joburi/meta'},
            ]
          }
        ]
      },
      {
        text: 'Economia Server-ului',
        activeMatch: '^/economia-serverului/',
        items: [
          { text: 'Business-uri', link: '/economia-serverului/business' },
        ],
      },
      {
        text: 'Proprietati',
        activeMatch: '^/proprietati/',
        items: [{ text: 'Case', link: '/proprietati/despre-case' }],
      },
      {
        text: 'Factiuni',
        activeMatch: '^/factiuni/',
        items: [
          { text: 'Politie', link: '/factiuni/politie' },
          { text: 'Smurd', link: '/factiuni/smurd' },
        ],
      },
      {
        text: 'Casino',
        activeMatch: '^/casino/',
        items: [{ text: 'Unde se afla Casino-ul', link: '/casino/casino' }],
      },
    ],
  },
  lastUpdated: true,

  head: [
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Wiki oficial al server-ului EliteGamers RolePlay. Aici vei putea gasi diferite informatii aferente server-ului nostru de joc. Informatiile sunt adaugate de catre staff, dar si cat de jucatori, deci simtiti-va liberi sa contribuiti la imbunatatirea acestui wiki!',
      },
    ],
    [
      'meta',
      {
        property: 'theme-color',
        content: '#b91c1c',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:title',
        content: 'EliteGamers RolePlay Wiki',
      },
    ],
    [
      'meta',
      {
        property: 'twitter:description',
        content:
          'Wiki oficial al server-ului EliteGamers RolePlay. Aici vei putea gasi diferite informatii aferente server-ului nostru de joc. Informatiile sunt adaugate de catre staff, dar si cat de jucatori, deci simtiti-va liberi sa contribuiti la imbunatatirea acestui wiki!',
      },
    ],
    [
      'meta',
      {
        property: 'copyright',
        content: 'EliteGamers.ro',
      },
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-chrome-192x192.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        href: '/favicon/android-chrome-512x512.png',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
  ],
})
