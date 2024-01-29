import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";
import { Lexend } from "@next/font/google";

export default function Hero() {
  return (
    <>
      <HeroWrapper>
        <NavBar>
          <GroupLogo>
            <Logo>
              <svg
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
              </svg>
            </Logo>
            <LogoContent>Hounter</LogoContent>
          </GroupLogo>
          <NavigationLinks>
            <NavLink>
              <Link href="/#">
                <NavContent>About Us</NavContent>
              </Link>
            </NavLink>
            <NavLink>
              <Link href="/#">
                <NavContent>Articles</NavContent>
              </Link>
            </NavLink>
            <NavLink>
              <Link href="/#">
                <NavContent>
                  Property
                  <NavSvg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M14.6236 7.12001C14.624 6.94625 14.5631 6.77784 14.4515 6.64404C14.3887 6.56874 14.3116 6.50649 14.2245 6.46086C14.1374 6.41523 14.0421 6.38712 13.9441 6.37814C13.8461 6.36916 13.7473 6.37948 13.6533 6.40852C13.5593 6.43756 13.472 6.48474 13.3964 6.54736L9.38526 9.87916L5.36668 6.66635C5.29013 6.60458 5.20205 6.55844 5.10751 6.53061C5.01296 6.50277 4.91381 6.49377 4.81576 6.50414C4.71771 6.51451 4.62268 6.54403 4.53614 6.59101C4.44961 6.638 4.37327 6.70151 4.31151 6.77791C4.24339 6.85486 4.192 6.94497 4.16058 7.04259C4.12916 7.14021 4.11838 7.24323 4.12892 7.34519C4.13946 7.44715 4.17109 7.54584 4.22183 7.63507C4.27257 7.7243 4.34132 7.80215 4.42377 7.86372L8.91381 11.4558C9.04771 11.5652 9.21567 11.625 9.38901 11.625C9.56234 11.625 9.7303 11.5652 9.8642 11.4558L14.3542 7.73729C14.4448 7.66268 14.5164 7.56791 14.5632 7.46066C14.61 7.35341 14.6307 7.23671 14.6236 7.12001Z"
                      fill="white"
                    />
                  </NavSvg>
                </NavContent>
              </Link>
            </NavLink>
          </NavigationLinks>
          <SignUp>Sign Up!</SignUp>
        </NavBar>
        <MainContents>
          <Title>
            <Heading>
              find the place to
              <br /> live <Color>your dreams</Color>
              <br /> easily here
            </Heading>
            <Paragraph>
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </Paragraph>
          </Title>
          <SearchContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z"
                fill="#F59E0B"
              />
            </svg>
            <SearchInput
              type="text"
              placeholder="Search for the location you want!"
            />
            <SearchButton onClick={() => console.log("Search button clicked")}>
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.99335 5.0018C9.76166 5.00135 9.53713 5.08254 9.35872 5.2313C9.25831 5.31506 9.17532 5.41793 9.11448 5.53402C9.05364 5.65011 9.01616 5.77714 9.00419 5.90782C8.99221 6.03851 9.00598 6.17029 9.0447 6.29562C9.08341 6.42094 9.14632 6.53735 9.22981 6.63818L13.6722 11.9863L9.38847 17.3444C9.3061 17.4465 9.24459 17.5639 9.20747 17.69C9.17036 17.8161 9.15837 17.9482 9.17219 18.079C9.18601 18.2097 9.22537 18.3364 9.28802 18.4518C9.35066 18.5672 9.43535 18.669 9.53721 18.7513C9.63981 18.8421 9.75996 18.9107 9.89012 18.9526C10.0203 18.9945 10.1576 19.0088 10.2936 18.9948C10.4295 18.9807 10.5611 18.9385 10.6801 18.8709C10.7991 18.8032 10.9029 18.7116 10.985 18.6016L15.7744 12.6149C15.9203 12.4364 16 12.2124 16 11.9813C16 11.7502 15.9203 11.5263 15.7744 11.3477L10.8164 5.36101C10.7169 5.24026 10.5905 5.14481 10.4475 5.0824C10.3045 5.01999 10.1489 4.99238 9.99335 5.0018Z"
                  fill="white"
                />
              </svg>
            </SearchButton>
          </SearchContainer>
          <OurPartnership>
            <Description>Our Partnership</Description>
            <Frame9>
              <PartnerLogo
                src="/images/partners/traveloka_logo2.png"
                width={64}
                height={64}
                alt="Traveloka Logo"
              />
              <PartnerLogo
                src="/images/partners/traveloka_logo5.png"
                width={64}
                height={64}
                alt="Traveloka Logo"
              />
              <PartnerLogo
                src="/images/partners/traveloka_logo3.png"
                width={64}
                height={64}
                alt="Traveloka Logo"
              />
              <PartnerLogo
                src="/images/partners/traveloka_logo4.png"
                width={64}
                height={64}
                alt="Traveloka Logo"
              />
            </Frame9>
          </OurPartnership>
        </MainContents>
        <ImageContainer>
          <BackgroundContainer>
            <Background
              src="../images/06fae8934f48f55676495873fae3c843.png"
              alt="..."
            />
            <Overlay />
          </BackgroundContainer>
          <Vector9>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="79"
              viewBox="0 0 47 79"
              fill="none"
            >
              <path
                d="M2 2H38.5C41.8137 2 44.5 4.68629 44.5 8V77"
                stroke="#3B82F6"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Vector9>
          <Vector8>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="96"
              viewBox="0 0 71 96"
              fill="none"
            >
              <path
                d="M2 94V8.5C2 5.18629 4.68629 2.5 8 2.5H68.5"
                stroke="#EF4444"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Vector8>
          <Vector4
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="102"
            viewBox="0 0 44 102"
            fill="none"
          >
            <path
              d="M2 2.5H37.5C39.7091 2.5 41.5 4.29086 41.5 6.5V99.5"
              stroke="#F59E0B"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Vector4>
          <Vector5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="47"
              height="5"
              viewBox="0 0 47 5"
              fill="none"
            >
              <path
                d="M2 2.5H44.5"
                stroke="#D1FAE5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Vector5>
          <Vector6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="5"
              viewBox="0 0 17 5"
              fill="none"
            >
              <path
                d="M2.5 2.5H14.5"
                stroke="#D1FAE5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Vector6>
          <Vector7>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="5"
              viewBox="0 0 34 5"
              fill="none"
            >
              <path
                d="M2.5 2.5H32"
                stroke="#D1FAE5"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Vector7>
          <Frame13>
            <Peoples>
              <Group7>
                <AvatarImage
                  src="/images/avatar/39887d20d3a5a634417ab525725d1ba4.jpeg"
                  alt="..."
                />
                <MiddleImage
                  src="/images/avatar/e2e29c917a6283248eace2ad62d7f604.jpeg"
                  alt="..."
                />
                <LastImage
                  src="../images/avatar/z5107971385143_24566dea7cff03d44803c4f5ffe1e5f4.jpg"
                  alt="..."
                />
              </Group7>
              <Frame8>
                <Frame8Title>1K+ People</Frame8Title>
                <Frame8Sub>Successfully Getting Home</Frame8Sub>
              </Frame8>
            </Peoples>
            <Peoples2>
              <Group7>
                <AvatarImage
                  src="/images/houses/cb3cd9a0c04762241610f3c68d1000c8.png"
                  alt="..."
                />
              </Group7>
              <Frame8>
                <Frame8Title2>56 Houses</Frame8Title2>
                <Frame8Sub2>Sold Monthly</Frame8Sub2>
              </Frame8>
            </Peoples2>
            <Peoples3>
              <Group7 style={{ width: "56px" }}>
                <AvatarImage
                  src="/images/avatar/951a8daef2ed8040f84c7832c5365910.jpeg"
                  alt="..."
                />
              </Group7>
              <Frame8>
                <Frame8Title>4K+</Frame8Title>
                <Frame8Sub3>People Looking for New Homes</Frame8Sub3>
              </Frame8>
            </Peoples3>
          </Frame13>
        </ImageContainer>
      </HeroWrapper>
    </>
  );
}

const HeroWrapper = styled.div`
  margin: 0 0 120px 120px;
  display: flex;
  padding: 0;
  width: calc(100% - 120px);
  height: 720px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: auto;
    margin-bottom: 120px;
  }
`;

const MainContents = styled.div`
  margin: 10% 0 5% 0; /* Sử dụng % cho margin-top và margin-bottom */
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: 496px;
  height: 446px;

  @media (max-width: 1400px) {
    margin-top: calc(30% + 2rem);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    margin-top: calc(30% + 2rem);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 50%;
  }

  @media (max-width: 576px) {
    margin-top: 80%;
  }

  @media (max-width: 368px) {
    margin-top: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
`;

const Heading = styled.h1`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  text-transform: capitalize;
  width: 496px;
  margin: 0;
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
`;

const Color = styled.span`
  color: transparent;
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: var(--MRT-App-Headline, #1b1c57);
  display: inline;
`;

const NavBar = styled.div`
  display: flex;
  width: calc(100% - 120px);
  height: 46px;
  flex-shrink: 0;
  position: absolute;
  top: 40px;
  left: 0;
  align-items: center;
  z-index: 1;
  @media (max-width: 1400px) {
    width: 100%;
    display: grid;
  }
`;

const GroupLogo = styled.div`
  width: 115px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

const LogoContent = styled.p`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;
const Logo = styled.div`
  svg {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    margin-right: 10px;
  }
`;

const NavigationLinks = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 24px;
  text-align: center;
  margin-left: auto;
  margin-right: 56px;
  @media (max-width: 1400px) {
    width: 100%;
    display: inline-block;
  }
`;

const NavLink = styled.a`
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  text-decoration: none;
`;

const NavContent = styled.p`
  color: var(--Neutral-100, #f0f3fd);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  display: block;
  margin: 0;
`;

const NavSvg = styled.svg`
  width: 15.25px;
  height: 10.5px;
  flex-shrink: 0;
  fill: #fff;
  margin-left: 10px;
`;

const SignUp = styled.button`
  color: var(--Green-700, #047857);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  display: inline-flex;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 32px;
  background: var(--Green-100, #d1fae5);
  border: none;
  /* Hover effect example */
  &:hover {
    background-color: #333; /* Change the background color on hover */
    color: #fff; /* Change the text color on hover */
  }
  @media (max-width: 1400px) {
    width: 108px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  width: 496px;
  padding: 4px 4px 4px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  border: 1px solid var(--Neutral-300, #e0e3eb);
  background: #fff;

  & svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
`;

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-right: 8px;
  width: 100%;
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

const SearchButton = styled.button`
  color: #fff;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  background: var(--Green-500, #10b981);
  border: none;
`;

const ImageContainer = styled.div`
  width: 907px;
  height: 720px;
  flex-shrink: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  overflow: hidden;
  transform: translate(20%, 0px);
  border-radius: 0px 0px 0px 80px;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const BackgroundContainer = styled.div`
  z-index: -2;
`;

const Background = styled.img`
  z-index: -2;
  transform: translate(-5.5%, 0.5%);
  margin-top: -4px;
  max-width: 907px;
  width: 110%;
  max-height: 800px;
  height: 112%;
  position: absolute;
  left: 0;
`;
const Overlay = styled.div`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
      17deg,
      #0c1537 -6.09%,
      rgba(12, 21, 55, 0.15) 32.63%
    ),
    lightgray -49.239px -4.186px / 124.722% 112.25% no-repeat;
  mix-blend-mode: overlay;
  z-index: 1;
`;
const Frame13 = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 16px;
  height: 104px;
  margin-bottom: 48px;
  margin-top: 568px;
  transform: translateX(0.7%);
`;

const Peoples = styled.div`
  display: flex;
  padding: 24px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  background: #fff;
  height: 100px;
  /* Shadow IG Post */
  box-shadow: 0px 11px 48px 0px rgba(51, 51, 51, 0.06);
`;

const Peoples2 = styled(Peoples)`
  width: 201px;
`;

const Peoples3 = styled(Peoples)`
  width: 298px;
`;

const Paragraph = styled.p`
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  font-size: 16px;
  opacity: 0.75;
  margin: 0;
  width: 110%;
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
`;
const OurPartnership = styled.div`
  width: 427px;
  height: 96px;
`;
const Description = styled.p`
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 1rem; /* 16px / 16px */
  font-style: normal;
  font-weight: 400;
  line-height: 2rem; /* 32px / 16px */
  margin: 0;
`;

const Frame9 = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 32px;
  height: 64px;
  flex: 1 0 0;
  width: 100%;
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
  }
`;

const PartnerLogo = styled.img`
  height: 64px;
  flex: 1 0 0;
`;

const Group7 = styled.div`
  width: 112px;
  height: 56px;
  display: inline-flex;
`;

const AvatarImage = styled.img`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 56px;
  border: 3px solid #fff;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
  object-fit: cover;
  position: absolute;
`;

const MiddleImage = styled(AvatarImage)`
  position: absolute;
  transform: translateX(50%);
`;

const LastImage = styled(AvatarImage)`
  position: absolute;
  transform: translateX(100%);
`;

const Frame8 = styled.div`
  display: flex;
  width: 152px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const Frame8Title = styled.h3`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  align-self: stretch;
  height: 24px;
  margin-bottom: 0px;
`;

const Frame8Title2 = styled(Frame8Title)`
  width: 120%;
`;

const Frame8Sub = styled.p`
  align-self: stretch;
  color: var(--MRT-App-Subheadline, #68799f);
  font-family: Lexend;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  margin-top: 0px;
`;

const Frame8Sub2 = styled(Frame8Sub)`
  width: 120%;
`;

const Frame8Sub3 = styled(Frame8Sub)`
  width: 130%;
`;

const Vector4 = styled.svg`
  margin-right: -353px;
  margin-top: 206px;
  width: 39.5px;
  height: 97px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Yellow-500, #f59e0b);
  z-index: 1;
`;

const Vector5 = styled.svg`
  margin-right: 16px;
  margin-top: 368px;
  width: 42.5px;
  height: 4px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Green-100, #d1fae5);
  z-index: 2;
`;

const Vector6 = styled.svg`
  margin-right: 16px;
  margin-top: 368px;
  width: 12px;
  height: 4px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Green-100, #d1fae5);
  z-index: 3;
`;

const Vector7 = styled.svg`
  margin-right: -318px;
  margin-top: 368px;
  width: 29.5px;
  height: 4px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Green-100, #d1fae5);
`;

const Vector8 = styled.svg`
  margin-right: 413px;
  margin-top: 141.2px;
  width: 66.5px;
  height: 91.5px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Red-500, #ef4444);
`;

const Vector9 = styled.svg`
  margin-right: -553px;
  margin-top: 407px;
  width: 70px;
  height: 75px;
  flex-shrink: 0;
  stroke-width: 4px;
  stroke: var(--Blue-500, #3b82f6);
`;
