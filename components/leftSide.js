import React from 'react';
import Link from 'next/link';

function leftSide() {
  return (
    <div className='leftPage'>
      <h2 className='title'> Recent Albums </h2>
      <div className='albums'>
        <div className='album1' >
          <img className='ANG'  src='./static/images/ANG.jpg'/>
          <Link href="https://www.amazon.com/gp/product/B07465XS4Z/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
            <a className='ANGButton'>
              <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
            </a>
          </Link>
        </div>
        <div className='album2'>
          <img className='CC' src='./static/images/CC.jpg'/>
          <Link href="https://www.amazon.com/gp/product/B000S1L8ZW/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i1?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR" target="_blank">
            <a className='CCButton'>
              <img src="http://www.niftybuttons.com/amazon/amazon-button2.png" alt="Amazon Button (via NiftyButtons.com)" />
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
          grid-template-rows: repeat(2, 1fr);
        }

        .album1 {
          width: 75%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .ANG {
          width: 100%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .ANGButton {
          margin-left: auto;
          margin-right: auto;
        }

        .album2 {
          width: 75%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .CC {
          width: 100%;
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }

        .CCButton {
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
