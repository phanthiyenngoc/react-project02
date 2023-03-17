import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */


import React from "react";

function Container(props) {
  const { children } = props;
  return (
    <div
      css={css`
        width: 1170px;
        max-width: calc(100%-48px);
        margin-left: auto;
        margin-right: auto;
      `}
    >
      {children}
    </div>
  );
}

export default Container;
