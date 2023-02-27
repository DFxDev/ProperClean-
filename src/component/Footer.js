import React from 'react'
// import  { social } from './data'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    
    <section className='footer-section'>
       <footer className="footer">
       {/* social icons  */}
       {/* <ul className='social-icons'>
        {social.map((socialIcon) => {
             const {id, url, icon} = socialIcon
             return(
               <li key={id}>
                 <a href={url}> {icon}</a>
               </li>
             )
           })}
        </ul> */}

        <p>&copy; <span>{year}</span> ProperClean. all rights reserved</p>
        {/* <p>Address: 78 Woodcroft Road CR7 7HF, </p>
        <p>London, United Kindom.</p> */}
      </footer>
    </section>
  )
}

export default Footer