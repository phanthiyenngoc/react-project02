/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

import logo from "../../acssets/img/header-img/logo.png";
import Container from "../../components/common/Container";
import CommonButton from "../../components/common/CommonButton";

function AppHeader() {
  const [activeIndex, setActiveIndex] = useState(undefined);
  const array = [
    {
      url: "!#",
      name: "Home",
    },
    {
      url: "!#",
      name: "Courses",
    },
    {
      url: "!#",
      name: "Pricing",
    },
    {
      url: "!#",
      name: "Reviews",
    },
  ];
  const handClickActive = (index) => {
    setActiveIndex(index);
  };
  return (
    <div
      css={css`
        background: #FFFCF4;
      `}
    >
      <Container>
        <div
          css={css`
            background: #FFFCF4;;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <img css={css``} src={logo} alt="logo" />
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <ul
              css={css`
                display: flex;
                margin-left: auto;
              `}
            >
              {array.map((item, index) => (
                <li
                  onClick={() => handClickActive(index)}
                  className={index === activeIndex ? "active" : ""}
                  css={css`
                    padding: 0 22px;
                    position: relative;
                    &::after {
                      content: "";
                      width: 12px;
                      height: 2px;
                      background: #171100;
                      border-radius: 1px;
                      position: absolute;
                      display: none;
                      left: 22px;
                      bottom: 0px;
                    }
                    &.active {
                      a {
                        font-weight: 600;
                        color: #171100;
                      }
                      &::after {
                        display: block;
                      }
                    }
                    &:hover {
                      a {
                        /* font-weight: 600; */
                        text-shadow: 1px 0 0 currentColor; //do giay, lam mo lam navajowhite, màu bong
                        color: #171100;
                      }
                    }
                  `}
                  key={index}
                >
                  <a
                    css={css`
                      font-weight: 400;
                      font-size: 1.6rem;
                      line-height: 1.75;
                      color: #5f5b53;
                    `}
                    href={item.url}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              {/* <a
                css={css`
                  font-weight: 600;
                  font-size: 1.6rem;
                  line-height: 1.75;
                  color: #ffffff;
                  background: #171100;
                  border-radius: 24.5px;
                  min-width:144px;
                `}
                href="!#"
              >
                Sign Up
              </a> */}
              <CommonButton
                css={css`
                  
                `}
              >
                Sign up
              </CommonButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AppHeader;
