import React, {useState, useEffect} from 'react'
import {siteEndpoint } from '../global'
import AppLogo from './appLogo'
import axios from 'axios'
import Link from 'next/link'

import {Button, rem, TextInput, createStyles} from '@mantine/core'


const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: rem(7),
    left: theme.spacing.sm,
    pointerEvents: 'none',
    color: floating
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
    transform: floating ? `translate(-${theme.spacing.sm}, ${rem(-28)})` : 'none',
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: 'opacity 150ms ease',
    opacity: floating ? 1 : 0,
  },

  input: {
    '&::placeholder': {
      transition: 'color 150ms ease',
      color: !floating ? 'transparent' : undefined,
    },
  },
}));


export default function Footer() {

  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });


  const [email, setEmail] = useState("")

  useEffect(() => {
    axios.defaults.withCredentials = true;
  })

  const handleSubscribe = (e) => {
    

    axios.get(siteEndpoint + 'sanctum/csrf-cookie')
    .then(res => {

      axios.post(siteEndpoint + 'api/subscribe', 
      {
        email: email
      }).then(res => {
        let respData = res.data
        if(respData.status === "success") {
          // openSnackbar(respData.message)   
          // TODO: Snackbar here
        }
      }) 
    });
  }

  


  let currentYear = new Date().getFullYear()

    return (
        <div>
          

            <footer className="text-gray-600 bg-green-50 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LINKS</h2>
          <nav className="list-none mb-10">
      
            <li>
              <Link href='/' className="text-gray-600 hover:text-gray-800">Home</Link>
            </li>
            <li>
              <Link href='/stories' className="text-gray-600 hover:text-gray-800">Stories</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
            </li>
            
            <li>
              <Link href="/terms" className="text-gray-600 hover:text-gray-800">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PRODUCTS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Charcoal</Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Seedlings</Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Paper</Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Shoots</Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-600 hover:text-gray-800">Toothpicks</Link>
            </li>
          </nav>
        </div>
        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div> */}
        <div className="lg:w-2/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              {/* <label for="footer-field" className="leading-7 text-sm text-gray-600">Email</label> */}
              {/* <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}


              <TextInput
      label="Email"
      placeholder="Your email here"
      required
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
    />
            </div>

            <Button
        variant="light"
        radius="xl"
        size="md"
        styles={{
          root: { paddingRight: rem(14), height: rem(48) },
          rightIcon: { marginLeft: rem(22) },
        }}
        onClick={handleSubscribe}
      >
        Subscribe
      </Button>

         
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Recieve offers, news and tips
            <br className="lg:block hidden"/>in your inbox
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-100">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <AppLogo />
          <span className="ml-3 text-green-500 text-xl">Mutenga Bamboo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© { currentYear } Mutenga Bamboo —
          <a href="https://takucoder.dev" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">Takucoder</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/Bamboopreneur" target="_blank" rel="noreferrer" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>

            
        </div>
    )
}
