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
        border: 1px solid rgb(102, 102, 255);
        width: 75%;
        height: 75%;
        background-color: rgb(220,220,220);
        border-radius: 12px;
      }


    `}</style>
  </div>
)

export default ChickenButton
