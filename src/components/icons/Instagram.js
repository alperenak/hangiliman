import * as React from 'react';
import { StyledSocialLinks } from './style';

function SvgInstagram(props) {
  return (
    <StyledSocialLinks width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <mask id="instagram_svg__a" maskUnits="userSpaceOnUse" x={0} y={0} width={32} height={32}>
        <path fill="#fff" d="M0 0h32v32H0z" />
      </mask>
      <g mask="url(#instagram_svg__a)" fillRule="evenodd" clipRule="evenodd">
        <path
          d="M22.467 0H9.533C4.276 0 0 4.276 0 9.533v12.934C0 27.724 4.276 32 9.533 32h12.934C27.724 32 32 27.724 32 22.467V9.533C32 4.276 27.724 0 22.467 0zm6.314 22.467a6.314 6.314 0 01-6.314 6.314H9.533a6.314 6.314 0 01-6.314-6.314V9.533a6.314 6.314 0 016.314-6.314h12.934a6.314 6.314 0 016.314 6.314v12.934z"
          fill="url(#instagram_svg__paint0_linear)"
        />
        <path
          d="M16 7.724c-4.564 0-8.276 3.712-8.276 8.276 0 4.563 3.712 8.276 8.276 8.276s8.276-3.712 8.276-8.276S20.564 7.724 16 7.724zm0 13.333a5.057 5.057 0 110-10.114 5.057 5.057 0 010 10.114z"
          fill="url(#instagram_svg__paint1_linear)"
        />
        <path d="M22.31 7.786a1.983 1.983 0 113.965 0 1.983 1.983 0 01-3.966 0z" fill="#fff" />
      </g>
      <defs>
        <linearGradient
          id="instagram_svg__paint0_linear"
          x1={31.829}
          y1={31.907}
          x2={31.829}
          y2={0.249}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.3} stopColor="#fff" />
          <stop offset={0.6} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="instagram_svg__paint1_linear"
          x1={31.829}
          y1={31.907}
          x2={31.829}
          y2={0.249}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.3} stopColor="#fff" />
          <stop offset={0.6} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
      </defs>
    </StyledSocialLinks>
  );
}

export default SvgInstagram;
