import * as React from "react";

function SvgLocation(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 21 24" fill="none" {...props}>
      <mask
        id="location_svg__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={21}
        height={24}
      >
        <path fill="#fff" d="M0 .466h20.341v22.811H0z" />
      </mask>
      <g
        mask="url(#location_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path
          opacity={0.48}
          d="M10.17.466c-3.286 0-5.96 3-5.96 6.685a7.3 7.3 0 00.601 2.929l4.504 9.779c.165.359.495.584.856.584.36 0 .69-.225.855-.584l4.502-9.776.022-.051c.386-.904.581-1.873.581-2.881 0-3.686-2.674-6.685-5.96-6.685zm0 10.184c-1.72 0-3.12-1.57-3.12-3.499 0-1.93 1.4-3.499 3.12-3.499 1.72 0 3.12 1.57 3.12 3.499 0 1.93-1.4 3.499-3.12 3.499zM12.467 21.982H7.875c-.32 0-.578.29-.578.648 0 .358.259.648.578.648h4.592c.319 0 .577-.29.577-.648 0-.358-.258-.648-.577-.648z"
        />
      </g>
    </svg>
  );
}

export default SvgLocation;
