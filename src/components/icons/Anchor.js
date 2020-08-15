import * as React from 'react';
import { StyledAnchor } from './style';
function SvgAnchor(props) {
  return (
    <StyledAnchor width="1em" height="1em" viewBox="0 0 81 81" fill="none" {...props}>
      <g clipPath="url(#anchor_svg__clip0)">
        <path
          d="M75.46 49.084l-6.75-8.1a1.393 1.393 0 00-2.08 0l-6.75 8.1a1.351 1.351 0 001.04 2.214h2.146c-1.998 8.141-9.235 14.42-18.348 15.877V32.397H56.87a1.35 1.35 0 001.35-1.35v-5.4a1.35 1.35 0 00-1.35-1.35H44.72v-3.484a10.8 10.8 0 10-8.101 0v3.483h-12.15a1.35 1.35 0 00-1.351 1.35v5.4c0 .746.604 1.35 1.35 1.35h12.15v34.78c-9.112-1.459-16.348-7.737-18.347-15.878h2.147a1.35 1.35 0 001.04-2.214l-6.751-8.1a1.393 1.393 0 00-2.079 0l-6.75 8.1a1.35 1.35 0 001.039 2.214h3.011c1.971 12.556 12.92 22.425 26.69 24.059v1.593c.004.358.144.7.392.958l2.7 2.7a1.37 1.37 0 001.918 0l2.7-2.7c.249-.257.389-.6.391-.959v-1.592c13.771-1.634 24.72-11.503 26.692-24.06h3.01a1.35 1.35 0 001.04-2.213zM40.668 14.846a4.05 4.05 0 110-8.101 4.05 4.05 0 010 8.1z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="anchor_svg__clip0">
          <path fill="#fff" d="M0 0h81v81H0z" />
        </clipPath>
      </defs>
    </StyledAnchor>
  );
}

export default SvgAnchor;
