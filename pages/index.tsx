import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";

import Hero from "../views/hero";
import FeaturedHouse from "../views/featuredhouse";
import LetTour from "../views/sell";
import SellingBuying from "../views/sellingbuying";
import AboutUs from "../views/aboutus";
import Subscribe from "../views/subscribe";
import Footer from "../views/footer";

export default function Home() {
  return (
    <>
      <ColorBur>
        <VectorColorBur>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="441"
            height="481"
            viewBox="0 0 441 481"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_18)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M298.209 155.001C287.173 189.669 261.914 216.19 239.037 244.462C219.326 268.821 198.32 290.535 173.292 309.373C145.414 330.356 119.122 359.558 84.2732 360.946C49.3115 362.339 19.9507 336.407 -8.93251 316.634C-36.0888 298.044 -55.4251 272.427 -78.8344 249.286C-110.874 217.612 -166.167 199.642 -172.434 155.001C-178.493 111.845 -134.511 78.3497 -107.647 44.0607C-83.8375 13.6712 -57.2616 -13.2453 -24.5624 -33.7378C9.01465 -54.7805 45.0816 -81.9806 84.2732 -76.2154C123.401 -70.4596 140.038 -20.5008 176.088 -4.2213C218.116 14.7576 280.755 -11.4202 308.836 25.1917C335.703 60.222 311.604 112.919 298.209 155.001Z"
                fill="#82F7FF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_18"
                x="-293"
                y="-197"
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
                  result="effect1_foregroundBlur_4_18"
                />
              </filter>
            </defs>
          </svg>
        </VectorColorBur>
        <VectorColorBur>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="688"
            height="396"
            viewBox="0 0 688 396"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_19)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M545.209 70.0007C534.173 104.669 508.914 131.19 486.037 159.462C466.326 183.821 445.32 205.535 420.292 224.373C392.414 245.356 366.122 274.558 331.273 275.946C296.311 277.339 266.951 251.407 238.067 231.634C210.911 213.044 191.575 187.427 168.166 164.286C136.126 132.612 80.8334 114.642 74.5661 70.0007C68.5073 26.8452 112.489 -6.65035 139.353 -40.9393C163.162 -71.3288 189.738 -98.2453 222.438 -118.738C256.015 -139.781 292.082 -166.981 331.273 -161.215C370.401 -155.46 387.038 -105.501 423.088 -89.2213C465.116 -70.2424 527.755 -96.4202 555.836 -59.8083C582.703 -24.778 558.604 27.919 545.209 70.0007Z"
                fill="#82FFD2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_19"
                x="-46"
                y="-282"
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
                  result="effect1_foregroundBlur_4_19"
                />
              </filter>
            </defs>
          </svg>
        </VectorColorBur>
      </ColorBur>
      <Hero />
      <FeaturedHouse />
      <FirstVector>
        <VColor>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="520"
            height="678"
            viewBox="0 0 520 678"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_11)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                fill="#FF9882"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_11"
                x="0"
                y="0"
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
                  result="effect1_foregroundBlur_4_11"
                />
              </filter>
            </defs>
          </svg>
        </VColor>
        <VColor>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="461"
            height="678"
            viewBox="0 0 461 678"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_13)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
                fill="#FFFA82"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_13"
                x="0"
                y="0"
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
                  result="effect1_foregroundBlur_4_13"
                />
              </filter>
            </defs>
          </svg>
        </VColor>
      </FirstVector>
      <LetTour />
      <AboutUs />
      <MiddleVector>
        <Vector>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="444"
            height="678"
            viewBox="0 0 444 678"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_12)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M301.209 352.001C290.173 386.669 264.914 413.19 242.037 441.462C222.326 465.821 201.32 487.535 176.292 506.373C148.414 527.356 122.122 556.558 87.2732 557.946C52.3115 559.339 22.9507 533.407 -5.93251 513.634C-33.0888 495.044 -52.4251 469.427 -75.8344 446.286C-107.874 414.612 -163.167 396.642 -169.434 352.001C-175.493 308.845 -131.511 275.35 -104.647 241.061C-80.8375 210.671 -54.2616 183.755 -21.5624 163.262C12.0146 142.219 48.0816 115.019 87.2732 120.785C126.401 126.54 143.038 176.499 179.088 192.779C221.116 211.758 283.755 185.58 311.836 222.192C338.703 257.222 314.604 309.919 301.209 352.001Z"
                fill="#82FFE8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_12"
                x="-290"
                y="0"
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
                  result="effect1_foregroundBlur_4_12"
                />
              </filter>
            </defs>
          </svg>
        </Vector>
        <Vector>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="472"
            height="678"
            viewBox="0 0 472 678"
            fill="none"
          >
            <g opacity="1" filter="url(#filter0_f_4_14)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M329.209 352.001C318.173 386.669 292.914 413.19 270.037 441.462C250.326 465.821 229.32 487.535 204.292 506.373C176.414 527.356 150.122 556.558 115.273 557.946C80.3115 559.339 50.9507 533.407 22.0675 513.634C-5.08885 495.044 -24.4251 469.427 -47.8344 446.286C-79.8736 414.612 -135.167 396.642 -141.434 352.001C-147.493 308.845 -103.511 275.35 -76.6469 241.061C-52.8376 210.671 -26.2616 183.755 6.43753 163.262C40.0146 142.219 76.0816 115.019 115.273 120.785C154.401 126.54 171.038 176.499 207.088 192.779C249.116 211.758 311.755 185.58 339.836 222.192C366.703 257.222 342.604 309.919 329.209 352.001Z"
                fill="#C8FF82"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_4_14"
                x="-262"
                y="0"
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
                  result="effect1_foregroundBlur_4_14"
                />
              </filter>
            </defs>
          </svg>
        </Vector>
      </MiddleVector>
      <SellingBuying />
      <Subscribe/>
      <Footer />
      <ColorFooter>
        <VectorFooter>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="414"
            height="507"
            viewBox="0 0 414 507"
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
          </svg>
        </VectorFooter>
        <VectorFooter>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="660"
            height="442"
            viewBox="0 0 660 442"
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
                  result="effect1_foregroundBlur_4_16"
                />
              </filter>
            </defs>
          </svg>
        </VectorFooter>
      </ColorFooter>
    </>
  );
}

const ColorBur = styled.div`
  position: absolute;
  width: 688px;
  height: 494px;
  overflow: hidden;
`;

const VectorColorBur = styled.svg`
  position: absolute;
  width: 438px;
  height: 494px;
  flex-shrink: 0;
  mix-blend-mode: multiply;
  opacity: 0.5;
  filter: blur(60px);

  &:first-child {
    fill: #82f7ff;
    left: -100px;
    top: -70px;
    transform: rotate(0deg);
  }

  &:last-child {
    fill: #82ffd2;
    top: -180px;
    left: 100px;
    transform: rotate(270deg);
  }
`;
const FirstVector = styled.div`
  position: absolute;
  flex-shrink: 0;
  width: 688px;
  height: 100%;
  right: 0;
  margin-top: -300px;
  z-index: -3;
`;

const VColor = styled.svg`
  position: absolute;
  width: 438px;
  height: 494px;
  flex-shrink: 0;
  opacity: 0.5;
  mix-blend-mode: multiply;
  filter: blur(60px);

  &:first-child {
    fill: #ff9882;
    margin-top: -40px;
    margin-left: 150px;
  }

  &:last-child {
    fill: #fffa82;
    margin-left: 250px;
    margin-top: 150px;
  }
`;

const MiddleVector = styled.div`
  position: absolute;
  width: 438px;
  height: auto;
  flex-shrink: 0;
  margin-top: -140px;
  margin-left: 10px;
`;

const Vector = styled.svg`
  position: absolute;
  width: 438px;
  height: 494px;
  flex-shrink: 0;
  opacity: 0.5;
  mix-blend-mode: multiply;
  filter: blur(60px);

  &:first-child {
    fill: #82ffe8;
    margin-top: -15px;
    margin-left: -115px;
  }

  &:last-child {
    fill: #c8ff82;
    margin-top: 280px;
    margin-left: -90px;
  }
`;
const ColorFooter = styled.div`
  position: absolute;
  overflow: hidden;
  width: 688px;
  height: 494px;
  right: 0;
  margin-top: -495px;
`;

const VectorFooter = styled.svg`
  position: absolute;
  width: 438px;
  height: 494px;
  flex-shrink: 0;
  opacity: 0.5;
  mix-blend-mode: multiply;
  filter: blur(60px);

  &:first-child {
    fill: #82bbff;
    margin-left: 310px;
    z-index: -1;
  }

  &:last-child {
    fill: #b9ff82;
    margin-left: 25px;
    margin-top: 80px;
    z-index: 1;
  }
`;
