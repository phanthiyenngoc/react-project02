import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import React from "react";
import Container from "../../common/Container";
import chevron_left from "../../../acssets/img/popurlar/chevron-left.png";
import chevron_right from "../../../acssets/img/popurlar/chevron-right.png";
import basic_img from "../../../acssets/img/popurlar/1.png";
import UI_UX_img from "../../../acssets/img/popurlar/2.png";

import star from "../../../acssets/img/popurlar/Star.png";

import web_App_img from "../../../acssets/img/popurlar/3.png";
import CommonButton from "../../../components/common/CommonButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const navClassSuffix = "popular";
const slideConfig = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
    autoplay: {
      delay: 1000,
    },
  modules: [
    // Lazy,
    Navigation,
    Autoplay,
  ],
  navigation: {
    nextEl: `.custom_next${navClassSuffix}`,
    prevEl: `.custom_prev${navClassSuffix}`,
  },
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

function ChildrenPopular(props) {
  const { img, title, description, img_icon, span, price, btn } = props;
  return (
    <div
      css={css`
        max-width: 370px;
      `}
    >
      <img src={img} alt="" />
      <div
        css={css`
          padding: 16px 22px 22px;
          background: #ffffff;
          box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.05);
          border-radius: 12px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h3
            css={css`
              margin-bottom: 6px;
              font-weight: 600;
              font-size: 18px;
              line-height: 30px;
              color: #171100;
            `}
          >
            {title}
          </h3>
          <div>
            <img src={img_icon} alt="" />
            <span
              css={css`
                margin-left: 6px;
                font-weight: 400;
                font-size: 16px;
                line-height: 28px;
                color: #fea31b;
              `}
            >
              {span}
            </span>
          </div>
        </div>
        <p
          css={css`
            font-weight: 400;
            font-size: 14px;
            line-height: 26px;
            /* or 186% */

            color: #5f5b53;
          `}
        >
          {description}
        </p>
        <div css={css``}>
          <span
            css={css`
              font-weight: 600;
              font-size: 18px;
              line-height: 30px;
              color: #171100;
              margin-right: 141px;
            `}
          >
            {price}
          </span>
          <CommonButton
            css={css`
              background: #171100;
              border-radius: 25px;
              font-weight: 600;
              font-size: 14px;
              line-height: 26px;
              text-align: center;
              min-width: 70px;
              padding: 12px 24px;
              color: #ffffff;
              border: none;
              &:hover {
                background: #ffb900;
              }
            `}
          >
            {btn}
          </CommonButton>
        </div>
      </div>
    </div>
  );
}
const Popular = (props) => {
  const array = [
    {
      id: 1,
      img: basic_img,
      name: "Basic web design",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      img_icon: star,
      span: "4.5",
      price: "$120.75",
      button: "Book Now",
    },
    {
      id: 2,
      img: UI_UX_img,
      name: "UI/UX design",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      img_icon: star,
      span: "4.5",
      price: "$120.75",
      button: "Book Now",
    },
    {
      id: 3,
      img: web_App_img,
      name: "Web App design",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      img_icon: star,
      span: "4.5",
      price: "$120.75",
      button: "Book Now",
    },
    {
      id: 4,
      img: web_App_img,
      name: "Web App design",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      img_icon: star,
      span: "4.5",
      price: "$120.75",
      button: "Book Now",
    },
    {
      id: 5,
      img: web_App_img,
      name: "Web App design",
      desc: "Get the best course, gain knowledge and shine for your future career.",
      img_icon: star,
      span: "4.5",
      price: "$120.75",
      button: "Book Now",
    },
  ];
  return (
    <div>
      <Container>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 170px;
            margin-bottom: 55px;
          `}
        >
          <div>
            <h2
              css={css`
                font-family: "Sen";
                font-style: normal;
                font-weight: 700;
                font-size: 38px;
                line-height: 48px;
                letter-spacing: -0.02em;
                color: #171100;
              `}
            >
              Our popular courses
            </h2>
            <p
              css={css`
                font-weight: 400;
                font-size: 18px;
                line-height: 30px;
                color: #5f5b53;
                max-width: 458px;
                margin-top: 16px;
              `}
            >
              Build new skills with new trendy courses and shine for the next future career.
            </p>
          </div>
          <div css={css``}>
            <button
              className={`custom_prev${navClassSuffix}`}
              css={css`
                width: 40px;
                height: 40px;
                background: transparent;
                color: #ffb900;
                border: 1px solid #ffb900;
                border-radius: 50%;
                padding: 14px;
                margin-right: 18px;
                cursor: pointer;
                &:hover {
                  background: #ffb900;
                  color: #fff;
                }
              `}
            >
              <img
                css={css`
                  width: 6px;
                  height: 12px;
                `}
                src={chevron_left}
                alt=""
              />
            </button>
            <button
              className={`custom_next${navClassSuffix}`}
              css={css`
                width: 40px;
                height: 40px;
                background: transparent;
                color: #ffb900;
                border: 1px solid #ffb900;
                border-radius: 50%;
                cursor: pointer;
                margin-right: 18px;

                &:hover {
                  background: #ffb900;
                  color: #ffff;
                }
              `}
            >
              <img
                css={css`
                  width: 6px;
                  height: 12px;
                `}
                src={chevron_right}
                alt=""
              />
            </button>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 200px;
          `}
        >
          <Swiper {...slideConfig} className="mySwiper">
            {array.map((item, index) => (
              <SwiperSlide key={index}>
                <ChildrenPopular img={item.img} title={item.name} description={item.desc} img_icon={item.img_icon} span={item.span} price={item.price} btn={item.button} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Popular;
