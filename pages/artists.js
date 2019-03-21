import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/headerTrial'
import Leftside from '../components/leftSide'
import Rightside from '../components/rightSide'
import ChickenButton from '../components/chickenButton'


const Artists = () => (
  <div className='page'>
    <Head title="ChickenRanch" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerMain'>
        <h2 className='focus'>Artists </h2>
          <div className='artistsContainer'>
            <ul className='artistsList'>
              <li className='artists'>
                <Link className='shopLink' href='*****'>Shop Mr. Lewis Merch </Link>
                <span className='artist'>Mr. Lewis and the Funeral Five </span>
                <Link className='songLink' href='https://www.youtube.com/watch?v=OC-ex0J6VL4'>
                  Check out a song.
                </Link>
              </li>
            </ul>
          </div>


      </div>
      <div className='rightSide'>
        <Rightside />
      </div>

      
    </div>

    <style jsx global>{`

        @media only screen and (min-width: 321px) and (max-width: 511px)  {
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

        @media only screen and (min-width : 512px) {
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

      .artistsContainer {

      }

      .artistsList {
        width: 100%;
        border: 3px solid #010046;
      }

      .artists {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-rows:  1fr;
        gap: 10%;
      }

      .artist {
        border-right: 1px solid #010046;
        border-left: 1px solid #010046;
        text-align: center;
      }

      .shopLink {
          text-align: center;
      }

      .songLink {
          text-align: center;
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

export default Artists
