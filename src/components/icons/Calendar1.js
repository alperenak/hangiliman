import * as React from "react";

function SvgCalendar1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 30 35" fill="none" {...props}>
      <mask
        id="calendar1_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={30}
        height={35}
      >
        <path fill="#fff" d="M0 0h30v35H0z" />
      </mask>
      <g
        mask="url(#calendar1_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#767575"
      >
        <path d="M27.5 5.104h-1.25c0-.805-.56-1.458-1.25-1.458s-1.25.653-1.25 1.458h-2.5c0-.805-.56-1.458-1.25-1.458s-1.25.653-1.25 1.458h-2.5c0-.805-.56-1.458-1.25-1.458s-1.25.653-1.25 1.458h-2.5c0-.805-.56-1.458-1.25-1.458s-1.25.653-1.25 1.458h-2.5c0-.805-.56-1.458-1.25-1.458s-1.25.653-1.25 1.458H2.5C1.121 5.104 0 6.412 0 8.021v2.916h30V8.021c0-1.609-1.121-2.917-2.5-2.917zM0 28.438c0 1.608 1.121 2.916 2.5 2.916h25c1.379 0 2.5-1.308 2.5-2.916V13.854H0v14.584zm22.5-13.125c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.374c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.375c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm-5-8.75c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.376c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.375c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm-5-8.75c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.374c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.375c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm-5-8.75c.69 0 1.25.654 1.25 1.459s-.56 1.458-1.25 1.458-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.376c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459zm0 4.375c.69 0 1.25.653 1.25 1.458 0 .805-.56 1.458-1.25 1.458s-1.25-.653-1.25-1.458c0-.805.56-1.459 1.25-1.459z" />
      </g>
    </svg>
  );
}

export default SvgCalendar1;