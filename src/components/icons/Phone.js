import * as React from 'react';
import { StyledPhone } from './style';

function SvgPhone(props) {
  return (
    <StyledPhone width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M16.666 18.85l-2.934-5.662c-.006.004-1.645.809-1.72.843-1.866.905-5.666-6.517-3.84-7.495l1.735-.855L6.997 0 5.24.866C-.76 3.995 8.77 22.517 14.908 19.712c.101-.046 1.752-.858 1.758-.861z"
        fill="#727272"
      />
    </StyledPhone>
  );
}

export default SvgPhone;
