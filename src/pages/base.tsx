import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Base(props: any) {
  return (
    <>
    {/* <Header/> */}
        { props.children }
    <Footer/>
    
    </>
  );
}
