import React from "react";
import { Helmet } from "react-helmet";
//import logo from './logo.svg';
//import './App.css';
import { AlpsContextProvider } from 'alps-react'
import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage, Image
} from '../alps-components'; // Import from your custom file
//import { BOH } from './boh';

const date = new Date();

function Ministries() {
  return (
    <AlpsContextProvider>
      <Helmet>
        <title>
          Ministries - Beacon of Hope Sevnth-day Adventist Church
        </title>
      </Helmet>
      <Body primaryColor="denim" hasGrid l-wrap>
        <div style={{backgroundColor:"rgba(0,0,255,1)"}}>
        <BasicPage
          footer={{
            address: {
              country: undefined,
              locality: undefined,
              phone: undefined,
              postcode: undefined,
              region: undefined,
              street: undefined,
            },
                      copyright: 'Copyright ©'+date.getFullYear()+' Beacon of Hope Seventh-Day Adventist Church',
                      primaryNav: {
                        items: [
                          {
                            text: 'Facebook',
                            url: 'https://www.facebook.com/beaconofhopezw'
                          },
                          {
                            text: 'YouTube',
                            url: 'https://www.youtube.com/@beaconofhopesdazw'
                          },
                          {
                            text: 'Email',
                            url: 'beaconofhope@wzc.adventist.org'
                          },
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
                    /*{
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
                    },*/
                    {
                      text: 'Home',
                      url: '/'
                    },
                    {
                      subnav: [
                        {
                          text: 'Official Beliefs',
                          url: 'https://www.adventist.org/beliefs/'
                        },
                        {
                          text: 'Church Manual',
                          url: 'https://www.adventist.org/beliefs/'
                        },
                        {
                          subnav: [
                            {
                              text: 'Pastor',
                              url: '#'
                            },
                            {
                              text: 'Elders',
                              url: '#'
                            },
                            {
                              text: 'Department Leaders',
                              url: '#'
                            },
                          ],
                          text: 'Church Leaders',
                          url: '#'
                        },
                      ],
                      text: 'About Us',
                      url: '/about'
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
                      text: 'Ministries',
                      url: '/ministries'
                    },
                    {
                      subnav: [
                        {
                          text: 'Sermons',
                          url: '#'
                        }
                      ],
                      text: 'Media',
                      url: '#'
                    },
                    /*{
                      active: true,
                      text: 'Beliefs',
                      url: '#'
                    },*/
                   /* {
                    //  priority: true,
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
                    },*/
                    // {
                    //   subnav: [
                    //     {
                    //       text: 'News Item 1',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 2',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 3',
                    //       url: '#'
                    //     },
                    //     {
                    //       text: 'News Item 4',
                    //       url: '#'
                    //     }
                    //   ],
                    //   text: 'News',
                    //   url: '#'
                    // },
                     {
                      text: 'Contact Us',
                      url: '/contact'
                    },
                  ]
                },
                secondaryNav: {
                  items: [
                  /*{
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
                    }*/
                  ],
                  showMenu: true,
                  showSearch: true,
                  simulateHeader: undefined
                }
          }}
          pageHeader={{
                title: 'Ministries',
          }}
          sabbath={{
                backgroundImage: undefined,
                hideLogoOnTop: false,
                showLogo: true,
                stickyLogo: true
          }}
        />
        </div>
      </Body>
    </AlpsContextProvider>
  );
}

export default Ministries;