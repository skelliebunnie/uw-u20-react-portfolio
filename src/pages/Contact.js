import React from 'react'
import Resume from './resume-2020-FEB-18--Projects.pdf'

export default function ContactPage() {
  return (
    <div name="contact" id="contact" className="text-white text-3xl bg-neutral-800 pb-12">
      <h3 className="text-4xl text-center text-neutral-800 py-8 my-6 mb-12 bg-tea-300">CONTACT ME</h3>
      <section className="px-4 md:px-12 md:py-12 flex flex-col justify-between md:flex-row md:justify-evenly md:text-center">
        <p className="contact-link my-6"><a href={Resume} target="_blank"><i className="fas fa-file text-grape-300"></i> <span className="highlight hover:text-tea-300">Download my <strong>resume</strong></span></a></p>
        <p className="contact-link my-6"><a href="mailto:skelliebunnie@gmail.com"><i className="fas fa-envelope text-grape-300"></i> <span className="highlight hover:text-tea-300">Send me an <strong>email</strong></span> <br/> <span className="inline text-lg">@ skelliebunnie@gmail.com</span></a></p>
        <p className="contact-link my-6"><i className="fas fa-phone text-grape-300"></i> <span className="highlight hover:text-tea-300"><small>Call me @</small> <strong>321.234.7829</strong></span></p>
      </section>
    </div>
  )
}
