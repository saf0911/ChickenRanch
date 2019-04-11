import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const ChickenButton = () => (
  <div>
      <button className='chickenButton'>
        <p className='buttonText'>
          Buy It here
        </p>
        <img className='buttonPic' src='../static/images/cockbutton.jpeg' alt='chickenhead' />
        <p>
          Store
        </p>
      </button>


    <style jsx>{`
      @font-face {
        font-family: 'Signika Negative', sans-serif;
        @import url('https://fonts.googleapis.com/css?family=Signika+Negative:700');
      }

      .chickenButton {
        cursor: pointer;
        font-weight: bold;
        border: 2px solid #151656;
      }


    `}</style>
  </div>
)

export default ChickenButton