import * as React from 'react';
import { StyledSocialLinks } from './style';

function SvgPhoneFooter(props) {
  return (
    <StyledSocialLinks width="1em" height="1em" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M29.333 16A13.335 13.335 0 0016 2.666v2.667a10.671 10.671 0 019.855 6.585c.536 1.294.812 2.681.812 4.082h2.666zM2.667 13.334V6.667c0-.736.596-1.333 1.333-1.333h6.666c.737 0 1.334.597 1.334 1.333V12c0 .736-.597 1.334-1.334 1.334H8C8 19.224 12.775 24 18.666 24v-2.666c0-.737.597-1.334 1.334-1.334h5.333c.737 0 1.334.597 1.334 1.334V28c0 .736-.597 1.334-1.334 1.334h-6.666c-8.837 0-16-7.164-16-16z"
        fill="#fff"
      />
      <path
        d="M23.391 12.938C23.793 13.91 24 14.95 24 16h-2.4a5.598 5.598 0 00-5.6-5.6V8a8.001 8.001 0 017.391 4.938z"
        fill="#fff"
      />
    </StyledSocialLinks>
  );
}

export default SvgPhoneFooter;
