/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import Container from "../../common/Container";
import media from "../../../acssets/img/header-img/1.jpg";
import play from "../../../acssets/img/header-img/play.png";
import icon_1 from "../../../acssets/img/header-img/icon-1.png";
import icon_2 from "../../../acssets/img/header-img/icon-2.png";
import icon_3 from "../../../acssets/img/header-img/icon-3.png";
import CommonButton from "../../common/CommonButton";

function ChildrenHero(props) {
  const { img, descQuality, descTitle } = props;
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        padding-top: 12px;
        padding-left: 24px;
        padding-bottom: 14px;
      `}
    >
      <div
        css={css`
          background: #fff9e8;
          border-radius: 50%;
          padding: 12px;
          margin-right: 16px;
        `}
      >
        <img src={img} alt="" />
      </div>
      <div>
        <p
          css={css`
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.86;
            color: #5f5b53;
          `}
        >
          {descQuality}
        </p>
        <span
          css={css`
            display: block;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 1.67;
            color: #171100;
            margin: 0;
          `}
        >
          {descTitle}
        </span>
      </div>
    </div>
  );
}

const Hero = () => {
  const array = [
    {
      id: 1,
      img: icon_1,
      description: "30 Courses",
      name: "UI/UX Design",
    },
    {
      id: 2,
      img: icon_2,
      description: "20 Courses",
      name: "Development",
    },
    {
      id: 3,
      img: icon_3,
      description: "20 Courses",
      name: "Marketing",
    },
  ];
  return (
    <div
      css={css`
        background: #fffcf4;
        padding-bottom: 65px;
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
              max-width: 470px;
              padding-top: 56px;
              margin-right: 228px;
              position: relative;
            `}
          >
            <img
              css={css`
                width: 100%;
                object-fit: cover;
                border-radius: 20px;
              `}
              src={media}
              alt=""
            />
            <div
              css={css`
                background: #ffffff;
                box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.05);
                border-radius: 12px;
                position: absolute;
                top: 393px;
                left: 300px;
                min-width: 270px;
              `}
            >
              {array.map((item, index) => (
                <ChildrenHero key={index} img={item.img} descQuality={item.description} descTitle={item.name} />
              ))}
            </div>
          </div>

          <div
            css={css`
              padding-top: 120px;
            `}
          >
            <h1
              css={css`
                font-family: "Sen";
                font-style: normal;
                font-weight: 700;
                font-size: 5.6rem;
                line-height: 1.17;
                color: #171100;
                margin: 0;
              `}
            >
              Learn without limits and spread knowledge.
            </h1>
            <p
              css={css`
                font-size: 18px;
                line-height: 1.67;
                color: #5f5b53;
                padding-top: 12px;
                padding-bottom: 38px;
                margin: 0;
              `}
            >
              Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.
            </p>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <CommonButton
                css={css`
                  background: #ffb900;
                  border-radius: 32px;
                  min-width: 180px;
                  font-size: 1.8rem;
                  line-height: 64px;
                  border: none;
                  margin-right: 28px;
                `}
              >
                See Courses
              </CommonButton>
              <button
                css={css`
                  display: flex;
                  align-items: center;
                  border: none;
                  background: none;
                `}
              >
                <div
                  css={css`
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    background: #ffffff;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.07);
                    width: 40px;

                    border-radius: 50%;
                    padding: 13px;
                    margin-right: 14px;
                  `}
                >
                  <img
                    css={css`
                      width: 12px;
                      object-fit: cover;
                    `}
                    src={play}
                    alt=""
                  />
                </div>
                <span
                  css={css`
                    font-weight: 600;
                    font-size: 1.8rem;
                    line-height: 1.67;
                    color: #171100;
                    cursor: pointer;
                  `}
                >
                  Watch Video
                </span>
              </button>
            </div>
            <p
              css={css`
                font-weight: 400;
                font-size: 1.8rem;
                line-height: 1.67;
                color: #5f5b53;
                margin: 0;
                padding-top: 48px;
                padding-bottom: 8px;
              `}
            >
              Recent engagement
            </p>
            <div
              css={css`
                display: flex;
              `}
            >
              <div
                css={css`
                  margin-right: 28px;
                  display: flex;
                `}
              >
                <strong
                  css={css`
                    font-family: "Sen";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 4.4rem;
                    line-height: 1.23;
                    color: #171100;
                    padding-right: 8px;
                  `}
                >
                  50K+
                </strong>
                <p
                  css={css`
                    font-family: "Poppins";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.8rem;
                    line-height: 1.28;
                    color: #5f5b53;
                    padding-right: 10px;
                  `}
                >
                  Students
                </p>
              </div>
              <div
              css={css`
              display:flex;
              `}
              >
                <strong
                  css={css`
                    font-family: "Sen";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 4.4rem;
                    line-height: 1.23;
                    color: #171100;
                    padding-right: 8px;
                  `}
                >
                  70+
                </strong>
                <p
                  css={css`
                    font-family: "Poppins";
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1.8rem;
                    line-height: 1.28;
                    color: #5f5b53;
                  `}
                >
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
