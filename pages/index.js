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
        <p className='albumTitle'>
          Mr. Lewis and the Funeral Five Before The World Beat You Down
        </p>
        <div className='purchaseWrapper'>
          <div className='buy1'>
            <p>
              Vinyl
            </p>
            <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-and-the-funeral-5-before-the-world-beat-you-down-lp" target="_blank">
              <a className='mainRecord' href="http://store.chickenranchrecords.com/product/mr-lewis-and-the-funeral-5-before-the-world-beat-you-down-lp" target="_blank">
                Buy it Here
              </a>
            </Link>
          </div>
          <div className='buy2'>
            <p>
              CD
            </p>
            <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-the-funeral-5-before-the-world-beat-you-down-cd" target="_blank">
              <a className='mainRecord' href="http://store.chickenranchrecords.com/product/mr-lewis-and-the-funeral-5-before-the-world-beat-you-down-cd" target="_blank">
                Buy it Here
              </a>
            </Link>
          </div>
          <div className='buy3'>
            <p>
              USB Coffin
            </p>
            <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-the-funeral-5-before-the-world-beat-you-down-usb-coffin" target="_blank">
              <a className='mainRecord' href="http://store.chickenranchrecords.com/product/mr-lewis-the-funeral-5-before-the-world-beat-you-down-usb-coffin" target="_blank">
                Buy it Here
              </a>
            </Link>
          </div>
        </div>
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
        width: 100%;
        border-right: 1px solid black;
        display: block;
      }


      .centerMain {
        width: 85%;
        display: inline;
        margin-left: auto;
        margin-right: auto;
        alighn-items: center;
      }

      .focus {
        text-align: center;
      }

      .currentAlbum {
        width: 100%;
        height: 75%;
        align-self: center;
      }

      .albumTitle {
        text-align: center;
      }

      .purchaseWrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
      }

      .buy1 {
        align-items: center;
        text-align: center;
      }

      .buy2 {
        align-items: center;
        text-align: center;
      }

      .buy3 {
        align-items: center;
        text-align: center;
      }

      .mainRecord {
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }

      .rightSide {
        width: 100%;
        display: block;
        border-left: 1px solid black;
        padding: 1%;
      }



    `}</style>
  </div>
)

export default Home
