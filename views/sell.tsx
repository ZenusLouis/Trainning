import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";
import { Lexend } from "@next/font/google";

export default function LetTour() {
  return (
    <>
      <Wrapper>
        <Information>
          <MainContents>
            <FeaturedHouse>
              <Group10>
                <Rectangle14></Rectangle14>Ready to Sell!
              </Group10>
              <Heading>Let’s tour and see our house!</Heading>
              <Paragraph>
                Houses recommended by our partners that have been
                <br /> curated to become the home of your dreams!
              </Paragraph>
            </FeaturedHouse>
            <HouseDetails>
              <HouseContent>House Detail</HouseContent>
              <Row>
                <Bedrooms>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M23.8 14.7692C26.0713 14.7692 28 16.6618 28 19.0769V22.7692H26.2V24H25V22.7692H7V24H5.8V22.7692H4V19.0769C4 16.7474 5.86341 14.7692 8.2 14.7692H23.8ZM22.6 8C24.2133 8 25.6004 9.33021 25.6 11.0769L25.6004 14.017C25.0548 13.7102 24.4443 13.5385 23.8 13.5385L22.6 13.5378C22.6 12.4839 21.7586 11.6923 20.8 11.6923H17.2C16.739 11.6923 16.3185 11.87 16.0001 12.1623C15.682 11.8703 15.2613 11.6923 14.8 11.6923H11.2C10.2061 11.6923 9.40033 12.5185 9.4 13.5378L8.2 13.5385C7.55587 13.5385 6.9456 13.7101 6.4 14.0167V11.0769C6.4 9.4223 7.69394 8 9.4 8H22.6ZM14.8 12.9228C15.1256 12.9228 15.4 13.2305 15.4 13.5385L10.6 13.5378C10.6 13.1613 10.8923 12.9231 11.2 12.9231L14.8 12.9228ZM20.8 12.9272C21.1395 12.9228 21.3997 13.2225 21.4 13.5378H16.6C16.6 13.156 16.8923 12.9231 17.2 12.9231L20.8 12.9272Z"
                      fill="#888B97"
                    />
                  </svg>
                  <RowTitle>4 Bedrooms</RowTitle>
                </Bedrooms>
                <Bathrooms>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M27.0391 15.9553H5.96092C5.13083 15.9553 4.45534 16.6308 4.45534 17.4609C4.45534 18.291 5.13083 18.9665 5.96092 18.9665H27.0391C27.8692 18.9665 28.5447 18.291 28.5447 17.4609C28.5447 16.6308 27.8692 15.9553 27.0391 15.9553Z"
                      fill="#888B97"
                    />
                    <path
                      d="M27.1776 17.9819C26.9056 17.9056 26.6325 18.0602 26.5573 18.3272L26.5181 18.4647H6.48281L6.44267 18.3272C6.36739 18.0602 6.09239 17.9076 5.82237 17.9819C5.55537 18.0581 5.4018 18.3362 5.47811 18.6022L6.86123 23.4441C7.2898 24.9447 8.67898 25.9926 10.2388 25.9926H22.7602C24.321 25.9926 25.7091 24.9447 26.1377 23.4441L27.5208 18.6022C27.5981 18.3362 27.4435 18.0581 27.1776 17.9819ZM10.2398 23.9851C9.57128 23.9851 8.97506 23.5364 8.79237 22.893L8.14097 20.6106C8.0647 20.3436 8.21926 20.0665 8.48523 19.9903C8.75421 19.914 9.03025 20.0695 9.10553 20.3356L9.75693 22.618C9.81918 22.8318 10.0169 22.9824 10.2397 22.9824C10.5167 22.9824 10.7416 23.2072 10.7416 23.4843C10.7416 23.7613 10.5168 23.9851 10.2398 23.9851Z"
                      fill="#888B97"
                    />
                    <path
                      d="M11.2034 25.0411C10.9555 24.9197 10.6554 25.017 10.5299 25.266L9.52617 27.2734C9.40271 27.5213 9.50307 27.8224 9.75102 27.9469C9.82428 27.9831 9.90059 28.0001 9.97587 28.0001C10.1596 28.0001 10.3362 27.8987 10.4245 27.7221L11.4282 25.7147C11.5517 25.4667 11.4513 25.1655 11.2034 25.0411Z"
                      fill="#888B97"
                    />
                    <path
                      d="M23.4738 27.2743L22.4701 25.2668C22.3457 25.0179 22.0445 24.9185 21.7966 25.042C21.5487 25.1664 21.4483 25.4676 21.5717 25.7155L22.5754 27.723C22.6638 27.8986 22.8404 28 23.0241 28C23.0994 28 23.1757 27.9829 23.249 27.9478C23.4969 27.8233 23.5973 27.5222 23.4738 27.2743Z"
                      fill="#888B97"
                    />
                    <path
                      d="M24.6151 4C24.1032 4 23.6214 4.19973 23.2591 4.5621L21.6662 6.15501C21.4705 6.35073 21.4705 6.66893 21.6662 6.86465C21.8619 7.06038 22.1801 7.06038 22.3758 6.86465L23.9687 5.27274C24.1403 5.10011 24.3702 5.00474 24.6201 5.00474C25.124 5.00474 25.5335 5.41426 25.5335 5.91811V16.4572C25.5335 16.7342 25.7583 16.9591 26.0354 16.9591C26.3124 16.9591 26.5372 16.7342 26.5382 16.4562V5.91713C26.5383 4.86021 25.6791 4 24.6151 4Z"
                      fill="#888B97"
                    />
                    <path
                      d="M22.8776 6.65681L21.8739 5.65311C21.7595 5.53868 21.5999 5.48547 21.4373 5.51257L18.928 5.92411C18.7433 5.95422 18.5917 6.08469 18.5325 6.26136C18.4733 6.43803 18.5185 6.63475 18.649 6.76822L21.6601 9.86973C21.7555 9.9691 21.887 10.0223 22.0195 10.0223C22.0666 10.0223 22.1148 10.0153 22.162 10.0012C22.3406 9.94905 22.4761 9.80151 22.5123 9.61881L23.0141 7.10952C23.0472 6.94588 22.996 6.77622 22.8776 6.65681Z"
                      fill="#888B97"
                    />
                    <path
                      d="M16.3525 10.0806C16.1567 9.88491 15.8385 9.88491 15.6428 10.0806L14.6391 11.0843C14.4434 11.2801 14.4434 11.5983 14.6391 11.794C14.7375 11.8913 14.8659 11.9405 14.9944 11.9405C15.1229 11.9405 15.2514 11.8914 15.3488 11.794L16.3525 10.7903C16.5482 10.5945 16.5482 10.2764 16.3525 10.0806Z"
                      fill="#888B97"
                    />
                    <path
                      d="M18.3599 12.088C18.1641 11.8922 17.846 11.8922 17.6502 12.088L16.6465 13.0917C16.4508 13.2874 16.4508 13.6056 16.6465 13.8013C16.7449 13.8987 16.8733 13.9479 17.0018 13.9479C17.1303 13.9479 17.2588 13.8987 17.3562 13.8013L18.3599 12.7976C18.5556 12.6019 18.5556 12.2837 18.3599 12.088Z"
                      fill="#888B97"
                    />
                    <path
                      d="M19.3636 9.07673C19.1679 8.881 18.8497 8.881 18.654 9.07673L17.6503 10.0804C17.4545 10.2762 17.4545 10.5944 17.6503 10.7901C17.7487 10.8874 17.8771 10.9366 18.0056 10.9366C18.1341 10.9366 18.2625 10.8875 18.3599 10.7901L19.3636 9.78637C19.5594 9.59065 19.5594 9.27245 19.3636 9.07673Z"
                      fill="#888B97"
                    />
                  </svg>
                  <RowTitle>2 Bathrooms</RowTitle>
                </Bathrooms>
              </Row>
              <Row>
                <Carport>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M27.3838 10.6286L17.357 4.37929C16.5309 3.86917 15.4665 3.87438 14.6453 4.39024L4.60814 10.6338C3.98488 11.0255 3.81267 11.8251 4.22271 12.4197C4.63329 13.0144 5.47086 13.1792 6.09466 12.7869L16.0104 6.61852L25.9142 12.7922C26.1416 12.9325 26.3959 12.9987 26.6473 12.9987C27.0913 12.9987 27.5243 12.7916 27.7829 12.4109C28.1885 11.8131 28.0092 11.0161 27.3838 10.6286Z"
                      fill="#888B97"
                    />
                    <path
                      d="M24.2107 18.7531C24.134 18.3031 23.7525 17.9702 23.3075 17.9702H22.796L22.6017 15.8962C22.3942 13.6781 20.5985 12 18.4248 12H13.5761C11.4019 12 9.6067 13.6787 9.39866 15.8962L9.20484 17.9702H8.69287C8.24737 17.9702 7.86632 18.3031 7.78869 18.7531L7.02759 23.1768C6.93321 23.7251 7.08442 24.2895 7.43351 24.715C7.76941 25.1249 8.26412 25.3694 8.78167 25.3876V26.1221C8.78167 27.162 9.59452 28 10.6098 28H11.1872C12.2015 28 13.0266 27.162 13.0266 26.1221V25.3996H18.9794V26.1206C18.9794 27.1609 19.7978 28 20.8121 28H21.39C22.4043 28 23.2238 27.1609 23.2238 26.1206V25.3876C23.7413 25.3694 24.233 25.127 24.5679 24.7176C24.917 24.291 25.0661 23.7298 24.9728 23.1804L24.2107 18.7531ZM10.3906 23.6933C9.53465 23.6933 8.84052 22.9822 8.84052 22.1036C8.84052 21.225 9.53465 20.5134 10.3906 20.5134C11.2471 20.5134 11.9417 21.2245 11.9417 22.1036C11.9417 22.9822 11.2471 23.6933 10.3906 23.6933ZM10.7773 17.9702L10.9564 16.057C11.0868 14.666 12.2127 13.6183 13.5761 13.6183H13.8557V14.2196C13.8557 14.7414 14.2601 15.157 14.7685 15.157H17.2324C17.7408 15.157 18.1523 14.7414 18.1523 14.2196V13.6188H18.4248C19.7882 13.6188 20.9141 14.6665 21.044 16.0575L21.2236 17.9707L10.7773 17.9702ZM21.6082 23.6933C20.7522 23.6933 20.0581 22.9822 20.0581 22.1036C20.0581 21.225 20.7522 20.5134 21.6082 20.5134C22.4647 20.5134 23.1593 21.2245 23.1593 22.1036C23.1593 22.9822 22.4647 23.6933 21.6082 23.6933Z"
                      fill="#888B97"
                    />
                  </svg>
                  <RowTitle>1 Carport</RowTitle>
                </Carport>
                <Floors>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M27.2884 9H22.9324C22.2631 9 21.7207 9.53666 21.7207 10.1996V13.3135H18.5759C17.9064 13.3135 17.3641 13.85 17.3641 14.5129V17.6271H14.2192C13.5497 17.6271 13.0075 18.1643 13.0075 18.8265V22.0907H9.71171C9.39012 22.0907 9.08195 22.2169 8.85482 22.4416C8.6275 22.6664 8.5 22.973 8.5 23.2901L8.50039 25.7999C8.50039 26.4634 9.04297 27 9.71206 27H27.2884C27.9579 27 28.5 26.4634 28.5 25.7999V10.1995C28.5001 9.53666 27.9579 9 27.2884 9Z"
                      fill="#888B97"
                    />
                    <path
                      d="M21.264 5.2453C20.9425 4.92389 20.4158 4.91771 20.0863 5.23043C14.7431 10.3055 9.65982 15.2624 4.74409 20.0549C4.58768 20.2074 4.5 20.4146 4.5 20.6296V26.1877C4.5 26.6356 4.87278 27 5.33294 27C5.79264 27 6.16608 26.6357 6.16608 26.1877V20.9657C11.002 16.2503 16.0017 11.378 21.2485 6.39368C21.5778 6.08102 21.5845 5.56652 21.264 5.2453Z"
                      fill="#888B97"
                    />
                  </svg>
                  <RowTitle>2 Floors</RowTitle>
                </Floors>
              </Row>
            </HouseDetails>
            <Rectangle19></Rectangle19>
            <ContactInfo>
              <Group13>
                <UserAvt
                  src="../images/avatar/z5107971385143_24566dea7cff03d44803c4f5ffe1e5f4.jpg"
                  alt="..."
                />
                <Info>
                  <Name>Dianne Russell</Name>
                  <Major>Manager Director</Major>
                </Info>
              </Group13>
              <ContactButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.38439 2.47912C8.90949 2.3208 9.47298 2.34711 9.98104 2.55365C10.4891 2.7602 10.9111 3.13453 11.1768 3.61432L11.2668 3.79312L12.06 5.55832C12.3011 6.09411 12.3793 6.68894 12.285 7.26885C12.1907 7.84876 11.928 8.38814 11.5296 8.81992L11.3712 8.97832L10.1184 10.1459C9.8928 10.3595 10.062 11.1863 10.8792 12.5999C11.6124 13.8719 12.2112 14.4659 12.504 14.4983H12.5556L12.6192 14.4863L15.0792 13.7339C15.4098 13.6325 15.7626 13.6285 16.0955 13.7224C16.4283 13.8162 16.727 14.004 16.956 14.2631L17.0664 14.4011L18.6936 16.6571C19.0129 17.0992 19.1721 17.6368 19.1451 18.1814C19.118 18.7261 18.9063 19.2453 18.5448 19.6535L18.3984 19.8047L17.7468 20.4215C17.1627 20.9746 16.4322 21.3484 15.6419 21.4984C14.8516 21.6483 14.0349 21.5682 13.2888 21.2675C10.9668 20.3315 8.85719 18.1931 6.94079 14.8739C5.02079 11.5463 4.2228 8.64592 4.5792 6.16192C4.68715 5.41091 4.99653 4.70316 5.47446 4.11388C5.9524 3.52459 6.58104 3.07578 7.2936 2.81512L7.52519 2.73832L8.38439 2.47912Z"
                    fill="white"
                  />
                </svg>
                <ButtonContent>Contact Now</ButtonContent>
              </ContactButton>
            </ContactInfo>
          </MainContents>
        </Information>
        <ImageContainer>
          <Rectangle17>
            <Img17
              src="../../images/houses/1201dcd42c65b4db672ce5b3b060e8f8.png"
              alt="..."
            />
            <PlayIconSvg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_4_203)">
                <path d="M33 24.5L18.5 13.5H18V34.5L33 24.5Z" fill="white" />
                <g filter="url(#filter0_b_4_203)">
                  <path
                    d="M48 24C48 30.3652 45.4714 36.4697 40.9706 40.9706C36.4697 45.4714 30.3652 48 24 48C17.6348 48 11.5303 45.4714 7.02944 40.9706C2.52856 36.4697 0 30.3652 0 24C0 17.6348 2.52856 11.5303 7.02944 7.02944C11.5303 2.52856 17.6348 0 24 0C30.3652 0 36.4697 2.52856 40.9706 7.02944C45.4714 11.5303 48 17.6348 48 24ZM20.37 15.279C20.1457 15.1193 19.8818 15.0244 19.6072 15.0048C19.3325 14.9851 19.0578 15.0414 18.813 15.1675C18.5683 15.2936 18.3629 15.4846 18.2195 15.7197C18.0761 15.9547 18.0002 16.2247 18 16.5V31.5C18.0002 31.7753 18.0761 32.0453 18.2195 32.2803C18.3629 32.5154 18.5683 32.7064 18.813 32.8325C19.0578 32.9586 19.3325 33.0149 19.6072 32.9952C19.8818 32.9756 20.1457 32.8807 20.37 32.721L30.87 25.221C31.0644 25.0822 31.2229 24.8991 31.3323 24.6867C31.4417 24.4743 31.4987 24.2389 31.4987 24C31.4987 23.7611 31.4417 23.5257 31.3323 23.3133C31.2229 23.1009 31.0644 22.9178 30.87 22.779L20.37 15.279Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_4_203"
                  x="-5"
                  y="-5"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_4_203"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_4_203"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_4_203">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </PlayIconSvg>
          </Rectangle17>
          <Img18
            src="../images/furniture/8fd947b8be5ed1c26a9b6a162fd3b28c.jpeg"
            alt="..."
          />
          <Img19
            src="../images/furniture/b90888e4542b00c1610805f215e1c4df.jpeg"
            alt="..."
          />
          <Img20
            src="../images/furniture/8016eb8e3039eb495be659f80a051176.jpeg"
            alt="..."
          />
        </ImageContainer>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 0 120px;
  display: flex;
  padding: 0;
  width: calc(100% - 240px);
  height: 100%;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  justify-content: space-between;
  margin-bottom: 120px;
`;

const ImageContainer = styled.div`
  width: 528px;
  height: 459px;
  flex-shrink: 0;
`;

const Rectangle17 = styled.div`
  position: relative;
  width: 488px;
  height: 416px;
  margin-left: 40px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;

const Img17 = styled.img`
  width: 488px;
  height: 416px;
  flex-shrink: 0;
  border-radius: 4px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    lightgray 50% / cover no-repeat;
`;

const Img18 = styled.img`
  position: absolute;
  width: 296px;
  height: 168px;
  flex-shrink: 0;
  border-radius: 4px;
  background: lightgray 50% / cover no-repeat;
  bottom: 0;
  margin-right: 12px;
`;

const Img19 = styled.img`
  position: absolute;
  width: 96px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
  background: lightgray 50% / cover no-repeat;
  bottom: 0;
  right: 0;
  margin-right: 124px;
`;

const Img20 = styled.img`
  position: absolute;
  width: 96px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 4px;
  background: lightgray 50% / cover no-repeat;
  bottom: 0;
  right: 0;
  margin-right: 20px;
`;

const PlayIconSvg = styled.svg`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Information = styled.div`
  width: 522px;
  height: 404px;
  flex-shrink: 0;
`;

const MainContents = styled.div`
  width: 522px;
  height: 282px;
  flex-shrink: 0;
  padding: 0 0 0 40px;
`;

const FeaturedHouse = styled.div`
  width: 522px;
  height: 142px;
  flex-shrink: 0;
`;
const Heading = styled.h1`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  width: 101%;
  margin: 12px 0 16px 0;
`;

const Paragraph = styled.h1`
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  width: 100%;
  margin: 0;
`;
const Rectangle14 = styled.div`
  width: 32px;
  height: 1px;
  flex-shrink: 0;
  background: var(--Yellow-500, #f59e0b);
  margin-left: -40px;
  margin-right: 8px;
`;
const Group10 = styled.h1`
  color: var(--Yellow-500, #f59e0b);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin: 0;
`;

const HouseDetails = styled.div`
  width: 440px;
  height: 124px;
  flex-shrink: 0;
  gap: 16px;
`;

const HouseContent = styled.h2`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 175% */
  width: 100%;
  opacity: 0.75;
`;

const Row = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 53px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
`;
const Bedrooms = styled(StyledContainer)``;
const Bathrooms = styled(StyledContainer)``;
const Carport = styled(StyledContainer)``;
const Floors = styled(StyledContainer)``;

const RowTitle = styled.h3`
  color: var(--Neutral-700, #3c4563);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  flex: 1 0 0;
  width: 146px;
  margin: 0;
`;

const Rectangle19 = styled.div`
  width: 440px;
  height: 2px;
  flex-shrink: 0;
  background: var(--Neutral-100, #f0f3fd);
  margin: 2rem 0;
`;

const ContactInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 59px;
  width: 440px;
  height: 56px;
`;

const Group13 = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  width: 218px;
  height: 56px;
`;

const UserAvt = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Name = styled.h3`
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

const Major = styled.p`
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  width: 110%;
`;

const ContactButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  background: var(--Green-500, #10b981);
  height: 48px;
`;

const ButtonContent = styled.h3`
  color: #fff;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  margin: 0;
  width: 100%;
`;
