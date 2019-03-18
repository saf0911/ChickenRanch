import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/headerTrial'
import Leftside from '../components/leftSide'
import Rightside from '../components/rightSide'


const Contact = () => (
  <div className='page'>
    <Head title="ChickenRanch" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerMain'>
        <h2 className='focus'>876-5309 </h2>


      </div>
      <div className='rightSide'>
        <Rightside />
      </div>

    </div>

    <style jsx global>{`

        @media only screen and (min-width: 321px) and (max-width: 767px)  {
          .hero {
            background-color: white;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows:  repreat(3, 1fr);
            // grid-template-areas:
            //   'leftSide'
            //   'center'
            //   'rightSide';
            gap: 10%;
            margin-top: 2%;
          }
        }

        @media only screen and (min-width : 768px) {
          .hero {
            background-color: white;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows:  1fr;
            grid-template-areas:
              'leftSide center rightSide'
            gap: 10%;
            margin-top: 2%;
          }
        }

      @font-face {
        font-family: 'Playfair Display', serif;
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
      }

      body {
        margin: 0;
      }
      .page {
        font-family: 'Playfair Display', serif;
      }

      .leftSide {
        width: 100%;
        // border-right: 1px solid black;
        display: block;
      }


      .centerMain {
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
      }

      .focus {
        text-align: center;
      }

      .rightSide {
        width: 100%;
        display: block;
        // border-left: 1px solid black;
        padding: 1%;
      }



    `}</style>
  </div>
)

export default Contact
