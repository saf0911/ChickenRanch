import React from 'react';
import Link from 'next/link';
import ChickenButton from '../components/chickenButton'

function leftSide() {
  return (
    <div className='leftPage'>
      <h2 className='title'> Recent Albums </h2>
      <div className='albums'>
        <div className='album1' >
          <img className='recent1'  src='../static/images/negroterror.jpg' alt='Voice of Memphis'/>
          <p> Voice of Memphis Single </p>
          <Link href="http://store.chickenranchrecords.com/product/negro-terror-voice-of-memphis-7" target="_blank">
          <a>
            <ChickenButton />
          </a>
          </Link>
        </div>
        <div className='album2'>
          <img className='recent2' src='./static/images/beaver.jpg'/>
          <p> Available Soon </p>
          <Link href='http://www.scottfoster.work'>
            <a>
            <ChickenButton />
            </a>
          </Link>
        </div>

      </div>


      <style jsx>{`
        @font-face {
          font-family: 'Playfair Display', serif;
          @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
        }

        .leftPage {
          font-family: 'Playfair Display', serif;
        }

        .title {
          text-align: center;
        }
        .albums {
          display: grid;
          grid-template-columns: 1fr ;
          grid-template-rows: repeat(autofit, 1fr);
        }

        .album1 {
          width: 75%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .recent1 {
          width: 100%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .album1Button {
          margin-left: auto;
          margin-right: auto;
        }

        .album2 {
          width: 75%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .recent2 {
          width: 100%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .recent2Button {
          margin-left: auto;
          margin-right: auto;
        }

        .book3 {
          width: 75%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .RC {
          width: 100%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .RCButton {
          margin-left: auto;
          margin-right: auto;
        }

    `}</style>


  </div>
  );
}

export default leftSide;
