/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import Container from "../../common/Container";
import avatar from "../../../acssets/img/feedback/avatar.jpg";
import icon_dot from "../../../acssets/img/feedback/Vector (4).png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const slideConfig = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination:{
    clickable: true,
  },
  modules: [Autoplay, Pagination],

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
function ChildrenFeeback(props) {
  const { avatar1, name, desc, img, info } = props;

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
      `}
    >
      <div
        css={css`
          max-width: 159px;
        `}
      >
        <div
          css={css`
            width: 72px;
          `}
        >
          <img
            css={css`
              width: 100%;
              object-fit: cover;
              border-radius: 50%;
            `}
            src={avatar1}
            alt=""
          />
        </div>
        <p
          css={css`
            font-family: "Sen";
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 34px;
            color: #f7f7f7;
          `}
        >
          {name}
        </p>
        <p
          css={css`
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 26px;
            color: #bfbcb3;
          `}
        >
          {desc}
        </p>
        {/* <div
          css={css`
            display: flex;
          `}
        >
          <span
            css={css`
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #634700;
              margin-right: 6px;
            `}
          ></span>
          <span
            className="active"
            css={css`
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #634700;
              margin-right: 6px;
              &.active {
                background: #ffb900;
              }
            `}
          ></span>
          <span
            css={css`
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #634700;
              margin-right: 6px;
            `}
          ></span>
        </div> */}
      </div>
      <div
        css={css`
          max-width: 770px;
          position: relative;
        `}
      >
        <div
          css={css`
            width: 30px;
            height: 28px;
            position: absolute;
            top: -22px;
            left: -29px;
          `}
        >
          <img
            css={css`
              width: 100%;
              object-fit: cover;
            `}
            src={img}
            alt=""
          />
        </div>
        <p
          css={css`
            font-weight: 400;
            font-size: 2.6rem;
            line-height: 40px;
            color: #ffffff;
          `}
        >
          {info}
        </p>
      </div>
    </div>
  );
}
const Feedback = () => {
  const array = [
    {
      id: 1,
      avatar: avatar,
      name: "Peter Moor",
      description: "Student of Web Design",

      img: icon_dot,
      info: "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.\" ",
    },
    {
      id: 2,
      avatar: avatar,
      name: "Peter Moor",
      description: "Student of Web Design",

      img: icon_dot,
      info: "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.\" ",
    },
    {
      id: 3,
      avatar: avatar,
      name: "Peter Moor",
      description: "Student of Web Design",

      img: icon_dot,
      info: "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.\" ",
    },
  ];
  return (
    <div
      css={css`
        background: #2e2100;
        padding-top: 96px;
        padding-bottom: 96px;
      `}
    >
      <Container>
        <div>
          <Swiper {...slideConfig} className="mySwiper"
          css={css`
          .swiper-pagination{
            left: 0;
            top:150px;
            width: 150px;
            .swiper-pagination-bullet{
              background: #634700;
              &.swiper-pagination-bullet-active{
                background-color: yellow;
              }
            }
          }
           
          `}
          >
            {array.map((item, index) => (
              <SwiperSlide key={index}>
                <ChildrenFeeback avatar1={item.avatar} name={item.name} desc={item.description} dot={item.dot} img={item.img} info={item.info} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;
