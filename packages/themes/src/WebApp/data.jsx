import React from 'react';

import MapMarker from '@pagerland/icons/src/line/MapMarker';
import textToMultiline from '@pagerland/common/src/utils/textToMultiline';
import Phone from '@pagerland/icons/src/line/Phone';
import Envelope from '@pagerland/icons/src/line/Envelope';
import FacebookF from '@pagerland/icons/src/line/FacebookF';
import Instagram from '@pagerland/icons/src/line/Instagram';
import Youtube from '@pagerland/icons/src/line/Youtube';
import Cog from '@pagerland/icons/src/line/Ambulance';
import Figma from '@pagerland/icons/src/line/Figma';
import LifeRing from '@pagerland/icons/src/line/LifeRing';

import Typography from '@pagerland/common/src/components/Typography';
import Img from '@pagerland/common/src/components/Img';

import { smoothLinkProps } from '@pagerland/common/src/utils';


import features1 from './assets/features.svg';
import features2 from './assets/features-2.svg';
import features3 from './assets/features-3.svg';
import features4 from './assets/features-4.svg';

import Screenshot from './assets/screenshot.jpg';
import Screenshot2x from './assets/screenshot@2x.jpg';
import Avatar from './assets/avatar.jpg';
import Avatar2x from './assets/avatar@2x.jpg';

export default {
  title: 'Dr Mercy',
  navbar: {
    links: [
      {
        to: '',
        label: 'Home',
      },
      // {
      //   to: 'about',
      //   label: 'About',
      // },
      {
        to: 'features',
        label: 'Posts',
      },
      // {
      //   to: 'screens',
      //   label: 'Screens',
      // },
      // {
      //   to: 'clients',
      //   label: 'Clients',
      // },
      // {
      //   to: 'pricing',
      //   label: 'Pricing',
      // },
      {
        to: 'contact',
        label: 'Contact',
      },
    ],
    actions: [
      {
        href:
          '#',
        label: 'Contact me',
      },
    ],
  },
  welcome: {
    title: [
      'The real ',
      <Typography as="span" variant="h1" color="primary">
        data
      </Typography>,
      ' behind the COVID-19 analytics!',
    ],
    text:
      'Contact tracing which has been a vital part of the COVID-19 preventive measure is heavily backed by data.',
    actions: [
      {
        label: 'Read more',
        to: 'about',
        ...smoothLinkProps,
        variant: 'secondary',
      },
      // {
      //   label: 'Buy this theme',
      //   href: 'https://mypags.app',
      //   as: 'a',
      //   variant: 'primary',
      // },
    ],
  },
  about: {
    sections: [
      {
        IconWrapperProps: {
          bg: 'primary',
        },
        title: 'COVID-19 Updates',
        text:
          'COVID-19 is refered to as a novel virus because we do not know so much about the virus. This post collates information and expert opinions about the virus',
        icon: Cog,
      },
      {
        IconWrapperProps: {
          bg: 'secondary',
        },
        title: 'Contact Tracing Tech',
        text:
          'All the leading technology firms are currently engaged in a race to develop the most efficient contact tracing app. Lets track their progress...',
        icon: Figma,
      },
      {
        IconWrapperProps: {
          bg: 'tertiary',
        },
        title: 'Technology Trends',
        text:
          'Cloud technology has been the rave of technology for almost a decade now, lets take a closer look at this revolutionary technology',
        icon: LifeRing,
      },
    ],
  },
  features: {
    title: 'Machine Learning To The Rescue',
    text:
      'Machine learning and Artificial Intelligence is a playing a vital role in the fight against COVID-19 .',
    features: [
      {
        title: 'COVID-19 Data Analytics',
        text:
          'Lets breakdown some of the data collated globally for tracking COVID-19 infections and recovery rate.',
        details: <Img src={features1} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Heros in Tech',
        text:
          'The whole world is quick to give standing ovation and pay rise to health care workers but neglected the technology support team.',
        details: <Img src={features2} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Tech of The Future',
        text:
          'While we marvel at the current technology wonders of our world, lets speculate a little on the wonders of the future.',
        details: <Img src={features3} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
      {
        title: 'Cybersecurity',
        text:
          'Viruses are threat to the existence and survival of mankind, and this include computer viruses as well ',
        details: <Img src={features4} maxWidth="121.0526315789%" ml="-10.5%" mt="-10.9%" />,
      },
    ],
  },
  screenshots: {
    title: 'Screenshots',
    screenshots: [
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Screenshot name',
        text:
          'Proin consectetur in enim a aliquam. Vivamus lacinia et orci at varius. Nam nisi libero, faucibus non metus consequat, lacinia facilisis orci.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Second screenshot name',
        text:
          'Curabitur ut lectus hendrerit, efficitur ante non, vulputate nibh. Aenean luctus consequat nunc id aliquam. Praesent pellentesque.',
      },
      {
        ImgProps: {
          src: Screenshot,
          srcSet: `${Screenshot} 1x, ${Screenshot2x} 2x`,
          alt: 'Screenshot',
        },
        title: 'Third screenshot name',
        text:
          'Vestibulum id tempor neque, viverra posuere nulla. Nulla sagittis augue id pretium finibus. Praesent vel lacinia velit. Suspendisse ornare porta.',
      },
    ],
  },
  clients: {
    title: 'See what other people say about us',
    avatar: {
      src: Avatar,
      srcSet: `${Avatar} 1x, ${Avatar2x} 2x`,
      alt: 'Avatar',
    },
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla mi sit amet malesuada euismod. Morbi pulvinar mauris et erat hendrerit blandit. Duis euismod lectus in eros varius, sed mattis leo posuere. In dapibus semper orci et convallis. Cras posuere dui at turpis viverra fermentum.',
    author: 'Courtney Pena, Los Angeles',
  },
  pricing: {
    title: 'Pricing',
    prices: {
      currency: 'USD',
      types: {
        a: 'Monthly',
        b: 'Annually',
      },
      sections: [
        {
          title: 'Beginner',
          price: 'Free',
          period: 'Forever',
          features: [
            {
              text: 'user',
              prefix: '1',
            },
            {
              text: 'clients',
              prefix: '2',
            },
            {
              text: 'projects',
              prefix: '5',
            },
            {
              text: 'tasks',
              prefix: 'No',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoicing',
              prefix: 'No',
            },
            {
              text: 'estimating',
              prefix: 'No',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Advanced',
          price: '$25',
          period: 'per month',
          features: [
            {
              text: 'user',
              prefix: '1',
            },
            {
              text: 'clients',
              prefix: 'Unlimited',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'No',
            },
            {
              text: 'invoices per month',
              prefix: '10',
            },
            {
              text: 'estimates per month',
              prefix: '10',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
        {
          title: 'Expert',
          price: '$99',
          period: 'per month',
          features: [
            {
              text: 'user',
              prefix: '25',
            },
            {
              text: 'clients',
              prefix: 'Unlimited',
            },
            {
              text: 'projects',
              prefix: 'Unlimited',
            },
            {
              text: 'tasks',
              prefix: 'Unlimited',
            },
            {
              text: 'subtasks',
              prefix: 'Unlimited',
            },
            {
              text: 'invoicing',
              prefix: 'Unlimited',
            },
            {
              text: 'estimating',
              prefix: 'Unlimited',
            },
          ],
          button: {
            text: 'Try now',
            ButtonProps: {
              as: 'a',
              href: 'https://mypags.app',
            },
          },
        },
      ],
    },
  },
  cta: {
    title: 'Do you like what you see?',
    button: {
      label: 'Subscribe to my Newsletter',
      href:
        '#',
    },
  },
  socialLinks: [
    {
      icon: FacebookF,
      href: 'https://facebook.com/drmercynwankwo',
      title: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://instangram.com/drmercynwankwo',
      title: 'Instagram',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/drmercynwankwo',
      title: 'YouTube',
    },
  ],
  footer: {
    section1: {
      text: `Dr Mercy Nwankwo is a tech enthusiast with passion for teaching. A university faculty and a seasoned research expert. `,
    },
    contact: {
      title: 'Contact',
      sections: [
        {
          icon: MapMarker,
          text: textToMultiline(`Houston, Texas\n United States`),
        },
        {
          icon: Phone,
          text: '(262) 555-0131',
        },
        {
          icon: Envelope,
          text: 'info@drmercynwankwo.com',
        },
      ],
    },
    section3: {
      title: 'Support & donate',
      text: `Donate to keep us producing more inspiring contents.`,
      cta: {
        text: 'Donate',
        href: '#',
      },
    },
  },
  copyright: '© 2020 ESSL for Dr Mercy Nwankwo',
};
