import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { siteEndpoint } from 'src/global';
import CustomPageTitle from '../general/CustomPageTitle';
import { Title } from '@mantine/core';


export default function ContactForm() {

  const [topic, setTopic] = useState('Enquiry');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userExtras, setUserExtras] = useState('');
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    document.title = 'MutengaBamboo - Contact Us';
  })

  const sendContactMessage = () => {
    
    axios.get(siteEndpoint + 'sanctum/csrf-cookie')
    .then(res => {

      axios.post(siteEndpoint + 'api/contact', 
      {
        topic: topic,
        name: userName,
        email: userEmail,
        message: userMessage,
        extras: userExtras,
        phone: userPhone

      }).then(res => {
        let respData = res.data
        if(respData.status === "success") {
          // openSnackbar(respData.message)   
           // TODO: Snackbar here
        }
      }) 
    });
  }


  
    return (
        <section className="text-gray-600 body-font relative">
          <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

             <CustomPageTitle title={"Contact Us"} />  
      <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">

      
 
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Nzvimbo Village, Mazowe&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">34 Nzvimbo Village, Mazowe, Zimbabwe</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-green-500 leading-relaxed">contact@mutengabamboo.co.zw</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+263 77 435 4222</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <Title order={2}>Feedback</Title>
      <p className="leading-relaxed mb-5 text-gray-600">Do you have any question or suggestion? Say hello to Mutenga Bamboo</p>
      <div className="relative mb-4">
        <label htmlFor="topic" className="leading-7 text-sm text-gray-600">Topic</label>
        <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="enquiry">Enquiry</option>
            <option value="suggestion">Suggestion</option>
            <option value="query">Query</option>
            <option value="greetings">Greetings</option>
            <option value="issue">Issue</option>
            <option value="other">Other</option>
        </select>
      </div>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={sendContactMessage} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Send Message</button>
      <p className="text-xs text-gray-500 mt-3">Terms and Conditions apply</p>
    </div>
  </div>
  </div>
</section>
    )
}
