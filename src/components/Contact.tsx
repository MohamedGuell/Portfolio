
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



export function Contact()  {
    const form = useRef(null);
    

const sendEmail = (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  emailjs
  /* @ts-ignore */
    .sendForm('service_z2dxiri', 'template_145xsfd', form.current, { // @ts-ignore
      publicKey: 'tRl-QHJPzqQGKsiRg',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

    /* @ts-ignore */
    return (
     
      
        <div className='m-5  bg-white/70 w-[30rem] box-border shadow-[rgba(25,22,73)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(25,22,73)_0px_-2px_6px_0px_inset] animate-[proj-show_3s] p-[3vh] rounded-[50px]
 place-self-end opacity-75   max-w-[30rem]   rounded-lg border  px-20 pb-20 pt-8 border-none shadow-2xl w-fit '>
           
        <form className="max-w-sm mx-auto" ref={form} onSubmit={sendEmail} > 
        <div className="mb-5 text-center">
            
              <label className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white">Nom</label>
              <input type="text" id="base-input" name="user_name" className="bg-blue-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          
          <label  className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white text-center">Votre Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input type="email" name="user_email" id="email-address-icon" className="bg-blue-300 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 placeholder-black/70 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@example.com"/>
          </div>
          
          <label  className="block mb-2 text-sm font-extrabold text-gray-900 dark:text-white text-center pt-5">message</label>
          <textarea id="message" name="message"  className="block p-2.5 w-full text-sm text-black bg-blue-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-black/70 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Laisser un message ..."></textarea>
          <input type="submit" value="Send" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-5' />
        </form>
        
        
        </div>
        // @ts-ignore
    )


}


