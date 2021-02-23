import React from 'react'

export default function AboutPage() {

  return (
    <>
      <section name="about" id="about" className="md:flex md:flex-row align-center mx-auto px-4 text-center">
          <div className="flex-shrink-0 md:w-1/2 md:mx-8 my-4 pt-8 text-3xl text-white text-center">Hi, my name is <br/><span className="text-tea-200 inline-block text-8xl py-6" style={{fontWeight: "bold"}}>Angel</span><br/> and I build pretty things.</div>

          <div className="flex-shrink-0 md:w-1/3 py-4 text-2xl text-white md:pl-14">
            <h3 className="text-3xl mb-8 py-4 text-neutral-800 bg-tea-300" style={{fontWeight: "bold"}}>Technologies</h3>
            <ul className="text-left list-inside list-disc" style={{columns: "2"}}>
              <li>React</li>
              <li>NodeJS</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>CSS / SCSS
                <ul className="list-inside list-disc pl-6 text-lg">
                  <li>Bootstrap</li>
                  <li>Foundation for Sites</li>
                  <li>Tailwind CSS</li>
                </ul>
              </li>
            </ul>
          </div>
      </section>
    </>
  )
}
