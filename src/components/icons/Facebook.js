import * as React from 'react';
import { StyledSocialLinks } from './style';

function SvgFacebook(props) {
  return (
    <StyledSocialLinks width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <mask id="facebook_svg__a" maskUnits="userSpaceOnUse" x={0} y={0} width={32} height={32}>
        <path fill="#fff" d="M0 0h32v32H0z" />
      </mask>
      <g mask="url(#facebook_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.25.669c.206.045.38.193.367.477-.07 1.417-.148 2.84-.502 4.22.045.386-.193.837-.638.78-3.17-.42-4.323 2.435-4.735 5.65 1.507.09 3.002.206 4.458.334.27.026.419.213.45.42a.426.426 0 01.181.244c.258.838.264 1.778.284 2.654.013.69.097 1.47-.367 2.017.057.322-.117.696-.548.709-1.546.019-3.112.045-4.684.058 0 .154 0 .309-.006.45-.11 4.208.07 8.402.025 12.602-.006.329-.27.451-.509.406-.032.02-.064.045-.103.058-.792.252-1.688.213-2.512.239-.819.019-1.624.038-2.436-.103-.2.064-.444 0-.49-.265-.727-4.162-.605-8.555-.586-12.769v-.792a49.603 49.603 0 01-3.814-.393c-.193-.033-.29-.162-.302-.31-.464-.309-.355-1.12-.361-1.63-.02-1.095-.142-2.364.174-3.42.032-.11.11-.18.206-.232a.391.391 0 01.258-.123 45.978 45.978 0 013.936-.29c.064-1.211.174-2.422.36-3.608.883-5.656 5.735-9.09 11.462-7.77a.577.577 0 01.432.387z"
          fill="#fff"
        />
      </g>
    </StyledSocialLinks>
  );
}

export default SvgFacebook;
