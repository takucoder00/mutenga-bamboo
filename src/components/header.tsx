//import liraries
import React, { Component, useState } from 'react';
import AppLogo from './appLogo';
import Link from 'next/link';

import { Navbar, Button, Text, createStyles, getStylesRef, rem } from '@mantine/core';

import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';



const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    textTransform: 'uppercase',
    letterSpacing: rem(-0.25),
  },

  link: {
    ...theme.fn.focusStyles(),
    // display: 'flex',
    // alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  },

  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingTop: theme.spacing.md,
  },
}));



const linksList = [
  { link: '/', label: 'Home' },
  { link: '/shop', label: 'Shop' },
  { link: '/stories', label: 'Stories' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
  { link: '/celebrations', label: 'World Bamboo Day' },
];



// create a component
const Header = () => {

  const router = useRouter()
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Home');


  const links = linksList.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        router.push(item.link)
        setActive(item.label);
       
      }}
    >
      <span>{item.label}</span>
    </a>
  ));

  
    return (
        <div className="Header bg-gray-50">
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <AppLogo />
                <span className="ml-3 text-xl text-green-500">Mutenga Bamboo</span>
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">


              <Navbar.Section grow mt="xl">
        {links}
      </Navbar.Section>
                
            
                
              </nav>
              <Link href='/contact' className="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0"><span>
              <Button
        variant="light"
        rightIcon={
         
            <IconArrowRight size="1.2rem" stroke={1.5} />
         
        }
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          rightIcon: { marginLeft: rem(22) },
        }}
      >
        Get In Touch
      </Button>
              
    
              </span>
              </Link>
            </div>
          </header>


        </div>
    );
};


export default Header;
