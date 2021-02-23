import React from 'react'

export default function Button({className, type, children}) {
  if(className === undefined) { className = "" }
  className += " px-4 py-2 rounded-lg my-2"

  if(type === "icon") {
    className += " btn-icon text-white hover:text-infrared-400 text-4xl"
  } else {
    className += " btn-button text-white bg-infrared-400 hover:bg-tea-400 text-2xl"
  }

  return (
    <button className={className.trim()}>{children}</button>
  )
}
