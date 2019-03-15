import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Leftside from '../components/leftSide'
import Rightside from '../components/rightSide'


const Home = () => (
  <div className='page'>
    <Head title="ChickenRanch" />
    <Header />

    <div className="hero">
      <div className='leftSide'>
        <Leftside />
      </div>
      <div className='centerMain'>
        <h2 className='focus'>Got that new Stuff? </h2>
        <img className='currentAlbum' src='/static/images/MrLewis.jpg' />
        <p>
          Mr. Lewis and the Funeral Five Before The World Beat You Down
        </p>
        <p>
          Vinyl
        </p>
        <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-and-the-funeral-5-before-the-world-beat-you-down-lp" target="_blank">
          <a className='mainRecord' href="http://store.chickenranchrecords.com/product/mr-lewis-and-the-funeral-5-before-the-world-beat-you-down-lp" target="_blank">
            Buy it Here
          </a>
        </Link>
      </div>
      <div className='rightSide'>
        <Rightside />
      </div>

    </div>

    <style jsx global>{`
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

      .leftSide {
        // grid-area: leftSide;
        width: 100%;
        border-right: 1px solid black;
        display: block;
        // background-color: pink;
      }


      .centerMain {
        // grid-area: center;
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
      }

      .focus {
        text-align: center;
      }

      .currentAlbum {
        width: 100%;
        align-self: center;
      }

      .mainRecord {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }

      .rightSide {
        // grid-area: rightSide;
        width: 100%;
        display: block;
        border-left: 1px solid black;
        padding: 1%;
        // background-color: rgb(232,232,232);
      }



    `}</style>
  </div>
)

export default Home
