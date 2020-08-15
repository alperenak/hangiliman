import * as React from 'react';
import { StyledPortLocation } from './style';
function SvgCardPortLocation(props) {
  return (
    <StyledPortLocation width="1em" height="1em" viewBox="0 0 18 18" fill="currentColor" {...props}>
      <g opacity={0.9}>
        <mask
          id="cardPortLocation_svg__a"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={18}
          height={19}
        >
          <path fill="#fff" d="M0 .001h18v18H0z" />
        </mask>
        <g mask="url(#cardPortLocation_svg__a)" fillRule="evenodd" clipRule="evenodd" fill="#fff">
          <path d="M9.235 0a5.28 5.28 0 00-4.743 7.587l3.985 7.716a.852.852 0 001.515 0l3.984-7.714a5.225 5.225 0 00.533-2.313A5.28 5.28 0 009.235 0zm0 8.036a2.764 2.764 0 01-2.761-2.76 2.764 2.764 0 012.76-2.761 2.764 2.764 0 012.761 2.76 2.764 2.764 0 01-2.76 2.761zM11.266 16.978H7.203a.511.511 0 100 1.022h4.063a.511.511 0 100-1.022z" />
        </g>
      </g>
    </StyledPortLocation>
  );
}

export default SvgCardPortLocation;
