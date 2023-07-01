//import liraries
import React, { Component, useState } from 'react';
import AppLogo from './appLogo';
import Link from 'next/link';

import { Navbar, Button, Text, createStyles, getStylesRef, rem, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/router';



const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.green[1],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors.green[2],
      // color: theme.colors.green[6] ,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}


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
  const [opened, { toggle }] = useDisclosure(false);



  const links = linksList.map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: active === item.label })}
      // className="mr-5 hover:border-b-2 hover:text-green- border-green-500 px-3"
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


              <Group spacing={5} className={classes.links}>
        {links}
      </Group>
                
            
                
              </nav>
              <Link href='/contact' className="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0"><span>
              <Button
        variant="light"
        rightIcon={
         
            <IconArrowRight size="1.2rem" stroke={1.5} />
         
        }
        className="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0"
        radius="xl"
        size="md"
        color="dark"
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
