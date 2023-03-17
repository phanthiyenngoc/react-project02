/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../common/Container";
import CommonButton from "../../common/CommonButton";
import React from "react";
import Blg_1 from "../../../acssets/img/blog/1.jpg";
import Blg_2 from "../../../acssets/img/blog/1.jpg";

import Blg_3 from "../../../acssets/img/blog/1.jpg";
import Blg_4 from "../../../acssets/img/blog/4.jpg";

import Blg_5 from "../../../acssets/img/blog/5.jpg";

import Blg_6 from "../../../acssets/img/blog/6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const navClassSuffix = "popular";
const slideConfig = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    clickable: true,
  },
  modules: [
    // Lazy,

    Autoplay,
    Pagination,
  ],
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     1080: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
};

function ChildrenBlog(props) {
  const { img, span, desc, button } = props;
  return (
    <div
      css={css`
        flex-shrink: 0;
        min-width: 32%;
      `}
    >
      <img
        css={css`
          width: 100%;
          object-fit: cover;
          border-radius: 16px 16px 0px 0px;
        `}
        src={img}
        alt=""
      />
      <div
        css={css`
          background: #ffffff;
          box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.05);
          border-radius: 16px;
          padding: 20px 20px 28px;
        `}
      >
        <span
          css={css`
            position: relative;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.86;
            color: #5f5b53;
            display: flex;
            align-items: center;
            &::before {
              display: inline-block;
              content: "";
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #ffb900;
              margin-right: 4px;
            }
            &::after {
              display: inline-block;
              content: "";
              width: 160px;
              height: 1px;
              background: #e2dfda;
              border-radius: 0.5px;
              position: absolute;
              bottom: -12px;
              left: 0;
            }
          `}
        >
          {span}
        </span>
        <p
          css={css`
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 1.75;
            color: #171100;
            padding-top: 25px;
            padding-bottom: 12px;
          `}
        >
          {desc}
        </p>
        <CommonButton
          css={css`
            cursor: pointer;
            &:hover {
              background: #ffb900;
              border: none;
            }
          `}
        >
          {button}
        </CommonButton>
      </div>
    </div>
  );
}
const Blog = () => {
  const array = [
    {
      id: 1,
      img: Blg_1,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
    {
      id: 2,
      img: Blg_2,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
    {
      id: 3,
      img: Blg_3,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
    {
      id: 4,
      img: Blg_4,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
    {
      id: 5,
      img: Blg_5,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
    {
      id: 6,
      img: Blg_6,
      date: "21 November 2021",
      desc: "How to become a pro web designer in 2022 and get remot job?",
      btn: "Read More",
    },
  ];
  return (
    <div
      css={css`
        background: #fffcf4;
      `}
    >
      <Container>
        <div
          css={css`
            padding-top: 96px;
            padding-bottom: 102px;
          `}
        >
          <div
            css={css`
              display: block;
              width: 448px;
              margin-left: auto;
              margin-right: auto;
              text-align: center;
            `}
          >
            <h2
              css={css`
                font-family: "Sen";
                font-style: normal;
                font-weight: 700;
                font-size: 3.8rem;
                line-height: 1.26;
                text-align: center;
                color: #130606;
              `}
            >
              Our blog
            </h2>
            <p
              css={css`
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.75;
                color: #5f5b53;
              `}
            >
              Read our regular travel blog and know the latest update of tour and travel
            </p>
          </div>
          <div
            css={css`
              display: flex;
              gap: 30px;
            `}
          >
            <Swiper
              {...slideConfig}
              className="mySwiper"
              css={css`
              padding-bottom: 40px;
                .swiper-pagination {
                  .swiper-pagination-bullet {
                    background: #634700;
                    &.swiper-pagination-bullet-active {
                      background-color: yellow;
                    }
                  }
                }
              `}
            >
              {array.map((item, index) => (
                <SwiperSlide key={index}>
                  <ChildrenBlog img={item.img} span={item.date} desc={item.desc} button={item.btn} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
