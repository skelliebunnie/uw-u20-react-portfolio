import React from 'react'

export default function Image({ fileName, alt, title, description, children }) {
  const img = require(`../../../public/images/${fileName}`);

  return (
    <div className="grid-span-2 flex-shrink-0 mx-auto my-0 py-0 md:grid-span-1 md:flex md:mx-12 md:mt-5">
      <article className="flex flex-col justify-start bg-white rounded-xl mb-6 tracking-wide" style={{ boxShadow: "5px 5px 12px -1px #596979" }}>
        <section className="md:flex-shrink-0">
          <img src={img.default} alt={alt} className="w-full rounded-lg rounded-b-none"/>
        </section>
        <main className="flex-1 stretch pb-6 flex flex-col justify-between">
          <section className="flex-shrink-0">
            <h2 className="font-heading text-2xl tracking-normal text-center bg-grape-400 font-bold text-white mb-4 px-6 py-4">{title}</h2>
            <p className="px-4 md:px-8 py-2 mb-4" dangerouslySetInnerHTML={ { __html: description } } />
          </section>
          {children}
        </main>
      </article>
    </div>
  )
}