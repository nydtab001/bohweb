//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { AlpsContextProvider } from 'alps-react'
import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage, Image
} from './alps-components'; // Import from your custom file
//import { BOH } from './boh';

const date = new Date();

function App() {
  return (
    // The AlpsContextProvider and Body components are required as parents other ALPS-React components (normally in your App root)
    <AlpsContextProvider>
      <Body primaryColor="bluejay" hasGrid l-wrap>
      <BasicPage
  footer={{
    address: {
      country: 'Zimbabwe',
      locality: 'Bulawayo',
      phone: undefined,
      postcode: undefined,
      region: undefined,
      street: 'Corner 5th & Josiah Tongogara',
    },
    copyright: 'Copyright ©'+date.getFullYear()+' General Conference of Seventh-day Adventists',
    primaryNav: {
      items: [
        {
          text: 'Facebook',
          url: '#'
        },
        {
          text: 'Twitter',
          url: '#'
        },
        {
          text: 'YouTube',
          url: '#'
        },
        {
          text: 'Vimeo',
          url: '#'
        },
        {
          text: 'Email',
          url: '#'
        },
        {
          text: 'Feedback',
          url: '#'
        }
      ]
    },
    secondaryNav: {
      items: [
        {
          text: 'Trademark and Logo Usage',
          url: '#'
        },
        {
          text: 'Legal Notice',
          url: '#'
        }
      ]
    },
    text: 'Adventist.org is the Official website of the Seventh-day Adventist world church'
  }}
  header={{
    drawer: {
      aboutLeft: 'Tell the world is an offical media production of the Seventh-day Adventist world church.',
      aboutRight: 'Seventh-day Adventists are devoted to helping people understand the Bible to find freedom, healing and hope.',
      hasPriorityNav: false,
      items: [
        {
          icon: 'language',
          subnav: [
            {
              text: 'English',
              url: '/en'
            },
            {
              text: 'Español',
              url: '/es'
            },
            {
              text: 'Português',
              url: '/pt'
            },
            {
              text: 'Français',
              url: '/fr'
            }
          ],
          text: 'Language',
          url: '#'
        },
        {
          icon: 'subscribe',
          text: 'Sitemap',
          url: '#'
        },
        {
          icon: 'find',
          text: 'Find a Church',
          url: '#'
        },
        {
          icon: 'contact',
          text: 'Contact',
          url: '#'
        },
        {
          icon: 'heart',
          text: 'Press',
          url: '#'
        }
      ],
      search: {
        onSearch: undefined,
        placeholder: 'Search...',
        suggestions: undefined,
        term: undefined,
        title: 'Search'
      },
      showMenu: true,
      showSearch: true,
      simulateHeader: undefined
    },
    logo: {
      canBeDark: undefined,
      element: <Image alt="boh logo" src="/bohlogo.png" />,
      link: '/',
      useFillTheme: true
    },
    primaryNav: {
      hasPriorityNav: false,
      items: [
        {
          subnav: [
            {
              text: 'Assistant to the President for Evangelism',
              url: '#'
            },
            {
              text: 'Global Mission',
              url: '#'
            },
            {
              text: 'Mission Spotlight',
              url: '#'
            },
            {
              text: 'Church Mission Offerings',
              url: '#'
            }
          ],
          text: 'Leadership Certification',
          url: '#'
        },
        {
          subnav: [
            {
              text: 'Life Hope Centers',
              url: '#'
            },
            {
              text: 'Global Mission',
              url: '#'
            },
            {
              text: 'Mission Spotlight',
              url: '#'
            },
            {
              text: 'Church Mission Offerings',
              url: '#'
            }
          ],
          text: 'Service'
        },
        {
          active: true,
          text: 'Beliefs',
          url: '#'
        },
        {
          priority: true,
          subnav: [
            {
              text: 'General Conference',
              url: '#'
            },
            {
              text: 'East-Central Africa',
              url: '#'
            },
            {
              subnav: [
                {
                  text: 'Atlantic Union',
                  url: '#'
                },
                {
                  text: 'Canadian Union',
                  url: '#'
                },
                {
                  text: 'Columbia Union',
                  url: '#'
                },
                {
                  text: 'Lake Union',
                  url: '#'
                }
              ],
              text: 'North America',
              url: '#'
            },
            {
              text: 'Middle East and North Africa',
              url: '#'
            }
          ],
          text: 'World Church',
          url: '#'
        },
        {
          text: 'Information',
          url: '#'
        },
        {
          subnav: [
            {
              text: 'News Item 1',
              url: '#'
            },
            {
              text: 'News Item 2',
              url: '#'
            },
            {
              text: 'News Item 3',
              url: '#'
            },
            {
              text: 'News Item 4',
              url: '#'
            }
          ],
          text: 'News',
          url: '#'
        }
      ]
    },
    secondaryNav: {
      items: [
        {
          icon: 'language',
          subnav: [
            {
              text: 'English',
              url: '/en'
            },
            {
              text: 'Español',
              url: '/es'
            },
            {
              text: 'Português',
              url: '/pt'
            },
            {
              text: 'Français',
              url: '/fr'
            }
          ],
          text: 'Language',
          url: '#'
        },
        {
          icon: 'subscribe',
          text: 'Sitemap',
          url: '#'
        },
        {
          icon: 'find',
          text: 'Find a Church',
          url: '#'
        },
        {
          icon: 'contact',
          text: 'Contact',
          url: '#'
        },
        {
          icon: 'heart',
          text: 'Press',
          url: '#'
        }
      ],
      showMenu: true,
      showSearch: true,
      simulateHeader: undefined
    }
  }}
  pageHeader={{
    background: {
      '500': '/bohbg.png',
      '750': '/bohbg.png',
      '1200': '/bohbg.png',
      default: '/bohbg.png'
    },
    kicker: 'Macenas',
    subtitle: 'We can help you study the Bible so you can find freedom, healing, and hope in jesus.',
    title: 'A Call to be Unique–the Bible\'s plan for a fulfilled life by standing firm.',
    url: '#est-doloremque-harum'
  }}
  sabbath={{
    backgroundImage: undefined,
    hideLogoOnTop: false,
    showLogo: true,
    stickyLogo: true
  }}
/>
      </Body>
    </AlpsContextProvider>
  )
}
export default App;
