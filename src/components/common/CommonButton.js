import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

import React from "react";

const CommonButton = (props) => {
  return (
    <button
      css={css`
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 50px;
        color: #ffffff;
        background: #171100;
        border-radius: 999px;
        min-width: 144px;
        &:hover {
          opacity: 0.9;
        }
      `}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default CommonButton;
