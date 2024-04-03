export function SolarWidget2Linear(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        d="M2.5 6.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm11 11a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm8-11c0-1.886 0-2.828-.586-3.414C20.328 2.5 19.386 2.5 17.5 2.5c-1.886 0-2.828 0-3.414.586c-.586.586-.586 1.528-.586 3.414c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586c1.886 0 2.828 0 3.414-.586c.586-.586.586-1.528.586-3.414Zm-11 11c0-1.886 0-2.828-.586-3.414C9.328 13.5 8.386 13.5 6.5 13.5c-1.886 0-2.828 0-3.414.586c-.586.586-.586 1.528-.586 3.414c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586c1.886 0 2.828 0 3.414-.586c.586-.586.586-1.528.586-3.414Z"
      ></path>
    </svg>
  );
}

export function SolarUserRoundedLinear(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx={12} cy={6} r={4}></circle>
        <ellipse cx={12} cy={17} rx={7} ry={4}></ellipse>
      </g>
    </svg>
  );
}

export function SolarChatRoundLinear(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"
      ></path>
    </svg>
  );
}
