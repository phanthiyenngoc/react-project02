import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../../components/common/Container";

import logo from "../../acssets/img/footer/logo.png"
import twitter from "../../acssets/img/footer/twitter.png";
import facebook from "../../acssets/img/footer/f.png";
import linked_in from "../../acssets/img/footer/linked_in.png";
import instagram from "../../acssets/img/footer/instagram.png";
import logo_footer from "../../acssets/img/footer/logo.png";
function AppFooter(){
    return (
        <div
          css={css`
            background: #2e2100;
            padding-top: 96px;
            padding-bottom: 28px;
          `}
        >
          <Container>
            <div
            css={css`
            display: flex;
            gap:130px;
            
            `}
            >
              <div
                css={css`
                  width: 23%;
                `}
              >
                <img src={logo_footer} alt="" />
                <p
                  css={css`
                    font-weight: 400;
                    font-size: 1.4rem;
                    line-height: 1.86;
                    color: #bfbcb2;
                    padding: 18px 0;
                  `}
                >
                  Need to help for your dream Career? trust us. With Lesson, study becomes a lot easier with us.
                </p>
                <div>
                  <img src={twitter} alt="" />
                  <img
                    css={css`
                      margin-left: 18px;
                      margin-right: 18px;
                    `}
                    src={facebook}
                    alt=""
                  />
                  <img src={linked_in} alt="" />
                  <img
                    css={css`
                      margin-left: 18px;
                    `}
                    src={instagram}
                    alt=""
                  />
                </div>
              </div>
              <div
               css={css`
                  width: 11%;
                `}
              >
                <h3
                  css={css`
                    font-weight: 600;
                    font-size: 1.6rem;
                    line-height: 1.75;                
                    color: #ffffff;
                    &::after {
                        display: inline-block;
                        content: "";
                        width: 130px;
                        height: 1px;
                        background: #59554B;
    
                    }
                  `}
                >
                  Company
                </h3>
                <ul>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    About Us
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Features
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Our Pricing
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Latest News
                  </li>
                </ul>
              </div>
              <div
               css={css`
                  width: 12%;
                `}
              >
                <h3
                css={css`
                    font-weight: 600;
                    font-size: 1.6rem;
                    line-height: 1.75;                
                    color: #ffffff;
                    &::after {
                        display: inline-block;
                        content: "";
                        width: 130px;
                        height: 1px;
                        background: #59554B;
    
                    }
                  `}
                >Support</h3>
                <ul>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    FAQ’s
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Terms & Conditions
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Privacy Policy
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    Contact Us
                  </li>
                </ul>
              </div>
              <div
               css={css`
                  width: 20%;
                `}
              >
                <h3
                css={css`
                width: 12%;
                    font-weight: 600;
                    font-size: 1.6rem;
                    line-height: 1.75;                
                    color: #ffffff;
                    
                    &::after {
                        display: inline-block;
                        content: "";
                        width: 130px;
                        height: 1px;
                        
                        
                        background: #59554B;
    
                    }
                  `}
                >Address</h3>
                <ul>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    <span
                      css={css`
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 1.86;
                        color: #ffffff;
                      `}
                    >
                      Location:
                    </span>{" "}
                    27 Division St, New York, NY 10002, USA
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    <span
                      css={css`
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 1.86;
                        color: #ffffff;
                      `}
                    >
                      Email:
                    </span>{" "}
                    email@gmail.com
                  </li>
                  <li
                    css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                    `}
                  >
                    <span
                      css={css`
                        font-weight: 600;
                        font-size: 1.4rem;
                        line-height: 1.86;
                        color: #ffffff;
                      `}
                    >
                      Phone:
                    </span>
                    + 000 1234 567 890
                  </li>
                </ul>
              </div>
            </div>
            <div>
                <span
                css={css`
                display: inline-block;
                width: 1170px;
                height: 1px;
                background: #59554B;
                margin-top: 38px;
                `}
                ></span>
                <p
                css={css`
                      font-weight: 400;
                      font-size: 1.4rem;
                      line-height: 1.86;
                      color: #bfbcb2;
                      text-align: center;
                      padding-top: 67px;
                    `}
                >Copyright ©2022 webdesign.gdn All rights reserved</p>
            </div>
          </Container>
        </div>
      );
};

export default AppFooter;