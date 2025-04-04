import React from "react";
//import logo from './logo.svg';
//import './App.css';
import '../App.css';
import { AlpsContextProvider } from 'alps-react'
import { Body,/* Div, Button, Blockquote, MediaBlock,
  Sabbath, */BasicPage, Image
} from '../alps-components'; // Import from your custom file
//import { BOH } from './boh';

const date = new Date();

function Contact(){
    return (
        <AlpsContextProvider>
          <Body primaryColor="denim" hasGrid l-wrap>
            <BasicPage
                breadcrumbs={[]}
                content={<>
                <h1>Contact Us</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5647251692935!2d28.58464908885497!3d-20.152199099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb55470512b2437%3A0xb244424c1d9f31cd!2sBeacon%20of%20Hope%20Adventist%20Church!5e0!3m2!1sen!2szw!4v1743457677845!5m2!1sen!2szw" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div style={{width:'100%', height:'fit-content'}}>
                        
                        <div class="contact-card">
                            <address>
                            <h3>Address</h3>
                                <p><strong>Beacon of Hope Adventist Church</strong></p>
                                <p>Corner 5th & Josiah Tongogara, Bulawayo, Zimbabwe</p>
                                <p><a href="tel:+263123456789">+263 12 345 6789</a></p>
                                <p><a href="mailto:info@bohchurch.org">info@bohchurch.org</a></p>
                                </address>
                        </div>
                    </div>
                    </>}
              footer={{
                          address: {
                            country: undefined,
                            locality: undefined,
                            phone: undefined,
                            postcode: undefined,
                            region: undefined,
                            street: undefined,
                          },
                          copyright: 'Copyright ©'+date.getFullYear()+' General Conference of Seventh-day Adventists',
                          primaryNav: {
                            items: [
                              {
                                text: 'Facebook',
                                url: '#'
                              },
                              {
                                text: 'YouTube',
                                url: '#'
                              },
                              {
                                text: 'Email',
                                url: '#'
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
                          url: '#'
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
                         {
                          text: 'Contact Us',
                          url: '/contact'
                        },
                      ]
                    },
                    secondaryNav: {
                      items: [
                      ],
                      showMenu: true,
                      showSearch: true,
                      simulateHeader: undefined
                    }
              }}
              pageHeader={{
                background: null,
                title: 'Contact Us'
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
      );
}

export default Contact;