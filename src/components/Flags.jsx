import React from 'react';

export const EUR = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="flag-icon-css-eu"
    viewBox="0 0 512 512"
    style={{ width: '20px', height: '20px', borderRadius: '100%' }}
  >
    <defs>
      <g id="d">
        <g id="b">
          <path id="a" d="M0-1l-.3 1 .5.1z" />
          <use transform="scale(-1 1)" xlinkHref="#a" />
        </g>
        <g id="c">
          <use transform="rotate(72)" xlinkHref="#b" />
          <use transform="rotate(144)" xlinkHref="#b" />
        </g>
        <use transform="scale(-1 1)" xlinkHref="#c" />
      </g>
    </defs>
    <path fill="#039" d="M0 0h512v512H0z" />
    <g fill="#fc0" transform="translate(256 258.4) scale(25.28395)">
      <use width="100%" height="100%" y="-6" xlinkHref="#d" />
      <use width="100%" height="100%" y="6" xlinkHref="#d" />
      <g id="e">
        <use width="100%" height="100%" x="-6" xlinkHref="#d" />
        <use width="100%" height="100%" transform="rotate(-144 -2.3 -2.1)" xlinkHref="#d" />
        <use width="100%" height="100%" transform="rotate(144 -2.1 -2.3)" xlinkHref="#d" />
        <use width="100%" height="100%" transform="rotate(72 -4.7 -2)" xlinkHref="#d" />
        <use width="100%" height="100%" transform="rotate(72 -5 .5)" xlinkHref="#d" />
      </g>
      <use width="100%" height="100%" transform="scale(-1 1)" xlinkHref="#e" />
    </g>
  </svg>
);

export const GBP = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="flag-icon-css-gb"
    viewBox="0 0 512 512"
    style={{ width: '20px', height: '20px', borderRadius: '100%' }}
  >
    <defs>
      <clipPath id="a">
        <path fillOpacity=".7" d="M250 0h500v500H250z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="translate(-256) scale(1.024)">
      <g strokeWidth="1pt">
        <path fill="#012169" d="M0 0h1000v500H0z" />
        <path
          fill="#fff"
          d="M0 0v55.9L888.2 500H1000v-55.9L111.8.1H0zm1000 0v55.9L111.8 500H0v-55.9L888.2 0H1000z"
        />
        <path fill="#fff" d="M416.7 0v500h166.6V0H416.7zM0 166.7v166.6h1000V166.7H0z" />
        <path
          fill="#c8102e"
          d="M0 200v100h1000V200H0zM450 0v500h100V0H450zM0 500l333.3-166.7H408L74.5 500H0zM0 0l333.3 166.7h-74.5L0 37.3V0zm592.1 166.7L925.5 0h74.5L666.7 166.7H592zm408 333.3L666.6 333.3h74.5L1000 462.7V500z"
        />
      </g>
    </g>
  </svg>
);
