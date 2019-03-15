import React from 'react';
import Link from 'next/link';

function rightSide() {
  return (
  <div className='rightContainer'>
    <h2 className='title'> Chicken ranch </h2>
    <img className='crrImg' src='/static/images/crrlogo.jpg' />
    <Link className='about'>
      <a>
        <h4>About </h4>
        <p>
          Chicken Ranch Records was born out of debauchery, tacos, and a band
          that needed to put out some kick ass music.
        </p>
      </a>
    </Link>
    <Link className='branding'>
      <a>
      <h4>History </h4>
      <p>
        Michael Dickinson was born somewhere in the sticks of Louisiana.
        Then he started a record company. Stop being nosey its not about him,
        it's about the music that the bands are making.
      </p>
      </a>
    </Link>
    



    <style jsx>{`
      h4 {
        text-align: center;
      }
      .rightContainer {
        margin: auto;
        display: block;
        margin: 2%;
      }

      .title {
        text-align: center;
      }
      .crrImg {
        display: block;
        border-radius: 25%;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
      }
      .tagLine {
        text-align: center;
      }
      .quotes {
        grid-area: quotes;
      }


  `}</style>


  </div>
  );
}

export default rightSide;
