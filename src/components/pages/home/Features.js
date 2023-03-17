/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../common/Container";
import React from "react";
import CommonButton from "../../common/CommonButton";

import feature_row_1 from "../../../acssets/img/features/1.jpg";
import feature_row_1_2 from "../../../acssets/img/features/2.jpg";
import feature_row_2 from "../../../acssets/img/features/3.jpg";


const Features = () => {
  return (
    <div
      css={css`
        margin: 200px 0;
        
      `}
    >
      <Container>
        <div
          css={css`
            
            display: flex;
          `}
        >
          <div
            css={css`
              width: 49%;
              display: flex;
              gap: 30px;
              margin-right: 128px;
            `}
          >
            <img
              css={css`
                width: 270px;
                height: 404px;
                object-fit: cover;
                margin-top: 34px;
                border-radius: 16px;
              `}
              src={feature_row_1}
              alt=""
            />
            <img
              css={css`
                width: 270px;
                height: 404px;
                object-fit: cover;
                border-radius: 16px;
              `}
              src={feature_row_1_2}
              alt=""
            />
          </div>
          <div
            css={css`
              width: 41%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
            `}
          >
            <h2
              css={css`
                font-family: "Sen";
                font-style: normal;
                font-weight: 700;
                font-size: 3.6rem;
                line-height: 1.26;
                color: #171100;
              `}
            >
              Learner outcomes through our awesome platform
            </h2>
            <p
              css={css`
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.75;               
                color: #5f5b53;
                margin:16px 0;
              `}
            >
              87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career.
            </p>
            <p
            css={css`
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.75;               
                color: #5f5b53;
              `}
            >Lesson Impact Report (2022)</p>
            <CommonButton 
                css={css`
                margin-top: 32px;
                background: #FFB900;
                border:none;
                `}
                
            >
                Sign Up
            </CommonButton>
          </div>
        </div>
        <div
        css={css`
        
        margin-top: 200px;
        display: flex;
        justify-content: space-between;
        gap:130px;
        `}
        >
            <div
            css={css`
            width: 49%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content:center;
            `}
            >
                <h2
                css={css`
                font-family: "Sen";
                font-style: normal;
                font-weight: 700;
                font-size: 3.6rem;
                line-height: 1.26;
                color: #171100;
              `}
                >Take the next step toward your personal and professional goals with Lesson.</h2>
                <p
                css={css`
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.75;               
                color: #5f5b53;
                margin:16px 0;
              `}
                >Take the next step toward. Join now to receive personalized  and more recommendations from the full Coursera catalog.</p>
                <CommonButton
                 css={css`
                margin-top: 32px;
                background: #FFB900;
                border:none;
                `}
                >
                Join Now
                </CommonButton>
            </div>
            <div
            css={css`
            width: 410;
            `}
            >
                <img 
                css={css`
                width: 470px;
                height: 440pp;
                object-fit: cover;
                border-radius: 20px;
                `}
                src={feature_row_2} alt="" />
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
