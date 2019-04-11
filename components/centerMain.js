import React from 'react';
import Link from 'next/link';
import ChickenButton from '../components/chickenButton'

function centerMain() {


  return (
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
            <a>
              <ChickenButton />
            </a>
          </Link>
        </div>
        <div className='buy2'>
          <p>
            CD
          </p>
          <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-the-funeral-5-before-the-world-beat-you-down-cd" target="_blank">
            <a>
              <ChickenButton />
            </a>
          </Link>
        </div>
        <div className='buy3'>
          <p>
            USB Coffin
          </p>
          <Link  href="http://store.chickenranchrecords.com/product/mr-lewis-the-funeral-5-before-the-world-beat-you-down-usb-coffin" target="_blank">
            <a>
              <ChickenButton />
            </a>
          </Link>
        </div>
      </div>
    </div>



    <style jsx>{`
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

  `}</style>


  </div>
  );
}

export default centerMain;
