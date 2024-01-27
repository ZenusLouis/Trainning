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
<<<<<<< HEAD
import SellingBuying from "../views/sellingbuying";

=======
import AboutUs from "../views/aboutus";
>>>>>>> 17d3b5fbb55dce01e941300297a8bbddec78e046

export default function Home() {
  return (
    <>
      {/* <ColorBur>
        <Vector>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="441"
            height="481"
            viewBox="0 0 441 481"
            fill="none"
          >
            <g opacity="0.3" filter="url(#filter0_f_4_18)">
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
        </Vector>
        <Vector>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="688"
            height="396"
            viewBox="0 0 688 396"
            fill="none"
          >
            <g opacity="0.3" filter="url(#filter0_f_4_19)">
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
        </Vector>
      </ColorBur> */}
      <Hero />
      <FeaturedHouse />
      <LetTour></LetTour>
<<<<<<< HEAD
      {/* <AboutUs></AboutUs> */}
=======
      <AboutUs/>
      {/* <AboutUs></AboutUs>
>>>>>>> 17d3b5fbb55dce01e941300297a8bbddec78e046
      <SellingBuying></SellingBuying>
      {/* <FindHouse></FindHouse>
      <Subscribe></Subscribe>
      <Footer></Footer> */}
    </>
  );
}

const ColorBur = styled.div`
  position: relative;
  width: 688px; /* Set the width of the ColorBur container */
  height: 481px; /* Set the height of the ColorBur container */
`;

const Vector = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  filter: blur(60px); /* Add your filter styles here */
`;

const FirstPath = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #82F7FF;
`;

const SecondPath = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #82FFD2;
`;

// HeroWrapper

// LetTour

// AboutUs

// SellingBuying

// FindHouse

// Subscribe

// Footer

