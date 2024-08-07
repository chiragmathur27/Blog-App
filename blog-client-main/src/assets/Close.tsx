import * as React from "react";

function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
    </svg>
  );
}

const MemoClose = React.memo(Close);
export default MemoClose;
