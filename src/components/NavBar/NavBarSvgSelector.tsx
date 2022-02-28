import React from 'react';

function NavBarSvgSelector({ id }: any) {
  switch (id) {
    case 'basket':
      return (
        <svg
          version="1.0"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          enableBackground="new 0 0 64 64"
        >
          <polygon
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
            points="44,18 54,18 54,63 10,63 10,18 20,18 "
          />
          <path
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M22,24V11c0-5.523,4.477-10,10-10s10,4.477,10,10v13"
          />
        </svg>
      );
    case 'admin-icon':
      return (
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
        >
          <g id="Layer_1">
            <path
              /* eslint-disable max-len, no-tabs */
              d="M5,32v17h30.343l2.167-1.686C42.27,43.612,45,38.03,45,32v-0.649l-8.841-3.931c-1.59-4.225-5.229-7.262-9.55-8.147
		C29.257,17.472,31,14.436,31,11c0-5.514-4.486-10-10-10S11,5.486,11,11c0,3.431,1.739,6.464,4.38,8.265C9.464,20.481,5,25.729,5,32
		z M42.988,32.645c-0.187,5.16-2.607,9.903-6.707,13.092L35,46.733l-1.281-0.997c-4.1-3.188-6.521-7.932-6.707-13.092l7.99-3.55
		L42.988,32.645z M13,11c0-4.411,3.589-8,8-8s8,3.589,8,8s-3.589,8-8,8S13,15.411,13,11z M18,21h6c4.312,0,8.173,2.517,9.961,6.367
		L25,31.351V32c0,5.865,2.589,11.3,7.109,15H7V32C7,25.935,11.935,21,18,21z"
            />
            <polygon
              points="36,33 34,33 34,36 31,36 31,38 34,38 34,41 36,41 36,38 39,38 39,36 36,36 	"
            />
          </g>
        </svg>
      );
    default:
      return null;
  }
}

export default NavBarSvgSelector;
