import React from "react";
import {Helmet} from 'react-helmet'
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
          <Helmet>
        <title>
          Contact Us - Beacon of Hope Sevnth-day Adventist Church
        </title>
      </Helmet>
          <Body primaryColor="denim" l-wrap>
            <BasicPage style={{whiteSpace: 'pre-line'}}
                aside={<>
                
                <div class="contact-card">
                            <address id="contact_address">
                            <h3>Address</h3>
                                <p><strong>Beacon of Hope Adventist Church</strong></p>
                                <p>Corner 5th & Josiah Tongogara, Bulawayo, Zimbabwe</p>
                                <p><a href="tel:+263123456789">+263 12 345 6789</a></p>
                                <p><a href="mailto:beaconofhope@wzc.adventist.org">beaconofhope@wzc.adventist.org</a></p>
                                </address>
                        </div>
                <section class="operating-hours">
                  <h2>Service Times</h2>
                  <ul>
                    <li><strong>Sabbath School:</strong> Saturday, 9:00 AM – 10:00 AM</li>
                    <li><strong>Main Service:</strong> Saturday, 10:30 AM – 12:00 PM</li>
                    <li><strong>Afternoon Service:</strong> Saturday, 2:00 PM – 4:00 PM</li>
                    <li><strong>Vespers:</strong> Saturday, Sunset</li>
                  </ul>
                </section>
                </>}
                breadcrumbs={[]}
                content={<>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5647251692935!2d28.58464908885497!3d-20.152199099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb55470512b2437%3A0xb244424c1d9f31cd!2sBeacon%20of%20Hope%20Adventist%20Church!5e0!3m2!1sen!2szw!4v1743457677845!5m2!1sen!2szw" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div style={{width:'100%', height:'fit-content'}}>
                        
                        
                    </div>
                    

<div className="pastor-contact">
  <h2>Pastor's Contact</h2>
  <p><strong>Name:</strong> Pastor John Dube</p>
  <p><strong>Phone:</strong> <a href="tel:+263772654321">+263 772 654 321</a></p>
  <p><strong>Email:</strong> <a href="mailto:pastor.john@beaconofhope.org">pastor.john@beaconofhope.org</a></p>
</div>

                    <div className="department-contacts">
  <h2>Church Contact Directory</h2>

  <div className="contact-card2">
    <h3>Church Clerk</h3>
    <p>Phone: <a href="tel:+263771234567">+263 77 123 4567</a></p>
    <p>Email: <a href="mailto:pastor@bohsdachurch.org">pastor@bohsdachurch.org</a></p>
  </div>

  <div className="contact-card2">
    <h3>Communications Department</h3>
    
    <p>Email: <a href="mailto:bohsdacomms@gmail.com">bohsdacomms@gmail.com</a></p>
  </div>

  <div className="contact-card2">
    <h3>Music Department</h3>
    <p>Phone: <a href="tel:+263771234890">+263 77 123 4890</a></p>
    <p>Email: <a href="mailto:music@bohsdachurch.org">music@bohsdachurch.org</a></p>
  </div>

  {/* Add more departments as needed */}
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
                          text: (
                            <>
                              <h3 style={{fontSize:22}}><strong>Service Times</strong></h3>
                              <br />
                              <div style={{fontSize:18,lineHeight:'1.8'}}>
                              <strong>Sabbath School:</strong> Saturday, 9:00 AM – 10:00 AM
                              <br />
                              <strong>Main Service:</strong> Saturday, 10:30 AM – 12:00 PM
                              <br />
                              <strong>Afternoon Service:</strong> Saturday, 2:00 PM – 4:00 PM
                              <br />
                              <strong>Vespers:</strong> Saturday, Sunset</div>
                            </>
                          ),
              }}
              header={{
                    drawer: {
                      aboutLeft: undefined,
                      aboutRight: undefined,
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