import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";
import { Lexend } from "@next/font/google";

export default function Footer() {
  return (
    <>
      <Wrapper>
        <BiO>
          <Logo>
            <LogoSvg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V8C32 21.2548 21.2548 32 8 32H4C1.79086 32 0 30.2091 0 28V4Z"
                fill="#F59E0B"
              />
              <path
                d="M4 8C4 5.79086 5.79086 4 8 4H32C34.2091 4 36 5.79086 36 8V12C36 25.2548 25.2548 36 12 36H8C5.79086 36 4 34.2091 4 32V8Z"
                fill="#4BE4C9"
              />
            </LogoSvg>
            <Name>Hounter</Name>
          </Logo>
          <MainTitle>
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </MainTitle>
          <Frame20>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.3186 26V16.6154H9V13.2365H12.3186V10.3505C12.3186 8.08264 14.2789 6 18.7959 6C20.6247 6 21.9771 6.1311 21.9771 6.1311L21.8705 9.28642C21.8705 9.28642 20.4913 9.27638 18.9863 9.27638C17.3574 9.27638 17.0965 9.83768 17.0965 10.7693V13.2365H22L21.7866 16.6154H17.0965V26H12.3186Z"
                fill="#3C4563"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28 8.37575C27.1174 8.76628 26.157 9.04735 25.1676 9.15682C26.1948 8.53089 26.9639 7.54202 27.3308 6.37575C26.367 6.96388 25.3111 7.37629 24.2101 7.59469C23.7499 7.09003 23.1933 6.688 22.575 6.41364C21.9567 6.13929 21.2899 5.99849 20.6163 6.00001C17.8906 6.00001 15.6986 8.26628 15.6986 11.0473C15.6986 11.4379 15.7447 11.8284 15.8197 12.2042C11.7385 11.9852 8.09855 9.98522 5.67864 6.92309C5.23771 7.69562 5.00665 8.57524 5.00949 9.47042C5.00949 11.2219 5.87766 12.7663 7.20154 13.6746C6.42136 13.643 5.65944 13.4231 4.97777 13.0326V13.0947C4.97777 15.5473 6.66795 17.5799 8.92056 18.0473C8.49761 18.16 8.06251 18.2177 7.62553 18.2189C7.30537 18.2189 7.00252 18.1864 6.69679 18.142C7.31979 20.142 9.134 21.5947 11.2943 21.642C9.60413 23 7.48708 23.7988 5.18832 23.7988C4.77587 23.7988 4.39514 23.784 4 23.7367C6.18051 25.1716 8.7677 26 11.5539 26C20.599 26 25.5484 18.3136 25.5484 11.642C25.5484 11.4231 25.5484 11.2042 25.534 10.9852C26.4915 10.2663 27.3308 9.37575 28 8.37575Z"
                fill="#3C4563"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.9973 12.6652C14.1611 12.6652 12.6626 14.1638 12.6626 16C12.6626 17.8362 14.1611 19.3348 15.9973 19.3348C17.8335 19.3348 19.332 17.8362 19.332 16C19.332 14.1638 17.8335 12.6652 15.9973 12.6652ZM25.9989 16C25.9989 14.6191 26.0114 13.2506 25.9338 11.8722C25.8563 10.2711 25.4911 8.85017 24.3203 7.67938C23.147 6.50609 21.7286 6.14334 20.1275 6.06579C18.7466 5.98824 17.3782 6.00074 15.9998 6.00074C14.6189 6.00074 13.2505 5.98824 11.8721 6.06579C10.271 6.14334 8.85012 6.50859 7.67935 7.67938C6.50608 8.85267 6.14334 10.2711 6.06579 11.8722C5.98824 13.2531 6.00074 14.6216 6.00074 16C6.00074 17.3784 5.98824 18.7494 6.06579 20.1278C6.14334 21.7289 6.50858 23.1498 7.67935 24.3206C8.85262 25.4939 10.271 25.8567 11.8721 25.9342C13.253 26.0118 14.6214 25.9993 15.9998 25.9993C17.3807 25.9993 18.7491 26.0118 20.1275 25.9342C21.7286 25.8567 23.1495 25.4914 24.3203 24.3206C25.4936 23.1473 25.8563 21.7289 25.9338 20.1278C26.0139 18.7494 25.9989 17.3809 25.9989 16ZM15.9973 21.131C13.1579 21.131 10.8664 18.8394 10.8664 16C10.8664 13.1606 13.1579 10.869 15.9973 10.869C18.8367 10.869 21.1282 13.1606 21.1282 16C21.1282 18.8394 18.8367 21.131 15.9973 21.131ZM21.3383 11.8572C20.6754 11.8572 20.14 11.3218 20.14 10.6589C20.14 9.99594 20.6754 9.46058 21.3383 9.46058C22.0013 9.46058 22.5366 9.99594 22.5366 10.6589C22.5368 10.8163 22.5059 10.9722 22.4458 11.1177C22.3856 11.2632 22.2974 11.3954 22.1861 11.5067C22.0748 11.618 21.9426 11.7062 21.7971 11.7664C21.6516 11.8265 21.4957 11.8574 21.3383 11.8572Z"
                fill="#3C4563"
              />
            </svg>
          </Frame20>
        </BiO>
        <Property>
          <Title>Property</Title>
          <Content>House</Content>
          <Content>Apartment</Content>
          <Content>Villa</Content>
        </Property>
        <Article>
          <Title>Article</Title>
          <Content>New Article</Content>
          <Content>Popular Article</Content>
          <Content>Most Read</Content>
          <Content>Tips & Tricks</Content>
        </Article>
        <Contact>
          <Title>Contact</Title>
          <Content>2464 Royal Ln. Mesa, New Jersey 45463</Content>
          <Content>(671) 555-0110</Content>
          <Content>info@hounter.com</Content>
        </Contact>
        {/* <Vector6
          xmlns="http://www.w3.org/2000/svg"
          width="1000"
          height="1000"
          viewBox="0 0 760 542"
          fill="none"
        >
          <g opacity="1" filter="url(#filter0_f_4_16)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
              fill="#B9FF82"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_16"
              x="0"
              y="-1.14441e-05"
              width="1000"
              height="1000"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_4_16"
              />
            </filter>
          </defs>
        </Vector6>
        <Vector7
          xmlns="http://www.w3.org/2000/svg"
          width="414"
          height="507"
          viewBox="0 0 514 607"
          fill="none"
        >
          <g opacity="1" filter="url(#filter0_f_4_15)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
              fill="#82BBFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_15"
              x="0"
              y="-1.14441e-05"
              width="734"
              height="678"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_4_15"
              />
            </filter>
          </defs>
        </Vector7> */}
      </Wrapper>
    </>
  );
}

const Vector6 = styled.svg`
  width: 438px;
  height: 494px;
  transform: rotate(90deg);
  flex-shrink: 0;
  fill: #b9ff82;
  opacity: 0.3;
  filter: blur(-120px);
  position: absolute;
  transform: translate(205%, -5%);
`;

const Vector7 = styled.svg`
  width: 438px;
  height: 494px;
  transform: rotate(90deg);
  flex-shrink: 0;
  fill: #82bbff;
  opacity: 0.3;
  filter: blur(-180px);
  position: absolute;
  transform: translate(255%, -20%);
`;

const Wrapper = styled.div`
  height: 180px;
  flex-shrink: 0;
  margin: 120px;
  width: calc(100% - 240px);
  display: flex;
  justify-content: space-between;
  z-index: 1;
  border: 1px solid black;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
  }
`;

const BiO = styled.div`
  width: 320px;
  height: 180px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 320px;
  }
`;

const Logo = styled.div`
  width: auto;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  gap: 12px;
`;

const LogoSvg = styled.svg`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
`;

const Name = styled.h2`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin: 0;
`;

const MainTitle = styled.h2`
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  opacity: 0.75;
  margin: 12px 0 24px 0;
  width: 101%;

`;

const Frame20 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
`;

const Title = styled.ul`
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 24px 0;
  text-transform: capitalize;
  padding: 0;
`;

const Content = styled.li`
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  margin: 18px 0 0 0;
  width: 110%;
  list-style-type: none;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 18px;
  }
`;

const Property = styled.div`
  width: 79px;
  height: 137px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Article = styled.div`
  width: 97px;
  height: 173px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Contact = styled.div`
  width: 265px;
  height: 137px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
