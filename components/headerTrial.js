
import React from 'react';
import Link from 'next/link';

function TrialHeader() {
  return (
    <div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link  href="/">
              <a href="#"><li>Home</li></a>
            </Link>
            <Link  href="/about">
              <a href="#"><li>About</li></a>
            </Link>
            <Link  href="http://store.chickenranchrecords.com/">
              <a><li>Store</li></a>
            </Link>
            <Link href="/contact">
              <a><li>Contact</li></a>
            </Link>
            <Link className='navbar-about' href="/about">
              <a /*href="https://erikterwan.com/" */ target="_blank"><li>Show me more</li></a>
            </Link>
          </ul>
        </div>
      </nav>


    <style jsx>{`
      body {
        margin: 0;
        padding: 0;

        /* make it look decent enough */
        background: #232323;
        color: #cdcdcd;
      }

      a {
        text-decoration: none;
        color: #232323;
        transition: color 0.3s ease;
      }

      a:hover {
        color: gray;
      }

      #menuToggle {
        display: block;
        position: relative;
        top: 25px;
        left: 25px;

        z-index: 1;

        -webkit-user-select: none;
        user-select: none;
      }

      #menuToggle input
      {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;
      }

      /*
       * Just a quick hamburger
       */
      #menuToggle span
      {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: #cdcdcd;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
      }

      #menuToggle span:first-child
      {
        transform-origin: 0% 0%;
      }

      #menuToggle span:nth-last-child(2)
      {
        transform-origin: 0% 100%;
      }

      /*
       * Transform all the slices of hamburger
       * into a crossmark.
       */
      #menuToggle input:checked ~ span
      {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
      }

      /*
       * But let's hide the middle one.
       */
      #menuToggle input:checked ~ span:nth-last-child(3)
      {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      /*
       * Ohyeah and the last one should go the other direction
       */
      #menuToggle input:checked ~ span:nth-last-child(2)
      {
        transform: rotate(-45deg) translate(0, -1px);
      }

      /*
       * Make this absolute positioned
       * at the top left of the screen
       */
      #menu
      {
        position: absolute;
        width: 300px;
        margin: -100px 0 0 -50px;
        padding: 50px;
        padding-top: 125px;

        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        /* to stop flickering of text in safari */

        transform-origin: 0% 0%;
        transform: translate(-100%, 0);

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
      }

      #menu li
      {
        padding: 10px 0;
        font-size: 22px;
      }

      /*
       * And let's slide it in from the left
       */
      #menuToggle input:checked ~ ul
      {
        transform: none;
      }


  `}</style>


  </div>
  );
}

export default TrialHeader;
