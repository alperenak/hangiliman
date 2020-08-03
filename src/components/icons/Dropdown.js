import * as React from "react";

function SvgDropdown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 23" fill="none" {...props}>
      <mask
        id="dropdown_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={-1}
        width={23}
        height={25}
      >
        <path
          fill="#fff"
          stroke="#fff"
          strokeWidth={1.5}
          d="M1 22.811V.001h20.34v22.81z"
        />
      </mask>
      <g mask="url(#dropdown_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.17 15.87L1.984 5.57a.531.531 0 00-.815 0 .7.7 0 000 .913l9.596 10.76a.531.531 0 00.814 0l9.592-10.76a.691.691 0 000-.908.531.531 0 00-.815 0L11.17 15.87z"
          fill="#000"
          stroke="#767575"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
}

export default SvgDropdown;
