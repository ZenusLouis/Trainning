import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";
import { Lexend } from "@next/font/google";

export default function SellingBuying() {
  return (
    <>
      <Wrapper>
        <MainContents>
          <Contents>
            <Group10>
              <Rectangle14></Rectangle14>
              <SmallTitle>See tips and trick from our partnership</SmallTitle>
            </Group10>
            <MainTitle>Find out more about selling and buying homes</MainTitle>
          </Contents>
          <ContactButton>More Artikel</ContactButton>
        </MainContents>
        <ColumnsWrapper>
          <Columns1>
            <Frame>
              <HouseImg
                src="../images/houses/454fa7819a75bfd3f5e332513d709bf7.jpeg"
                alt="..."
              />
              <SmallFrame>
                <Feedback>
                  <Customer>
                    <UserAvt
                      src="../images/avatar/z5107971385143_24566dea7cff03d44803c4f5ffe1e5f4.jpg"
                      alt="..."
                    />
                    <Name>Dianne Russell</Name>
                  </Customer>
                  <Comment>
                    The things we need to check when we want to buy a house
                  </Comment>
                </Feedback>
                <Date>
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                      fill="#888B97"
                    />
                  </Icon>
                  <DateTime>4 min read | 25 Apr 2021</DateTime>
                </Date>
              </SmallFrame>
            </Frame>
            <Frame>
              <HouseImg
                src="../images/houses/719cd8f2e3aec70e3ce776253cc7f272.jpeg"
                alt="..."
              />
              <SmallFrame>
                <Feedback>
                  <Customer>
                    <UserAvt
                      src="../images/avatar/0dec5695cd46cfa87b49b53be7db200d.jpeg"
                      alt="..."
                    />
                    <Name>Courtney Henry</Name>
                  </Customer>
                  <Comment>
                    7 Ways to distinguish the quality of the house we want to
                    buy
                  </Comment>
                </Feedback>
                <Date>
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                      fill="#888B97"
                    />
                  </Icon>
                  <DateTime>6 min read | 24 Apr 2021</DateTime>
                </Date>
              </SmallFrame>
            </Frame>
            <Frame>
              <HouseImg
                src="../images/houses/1d7a1f36e1b169c9c94dc1d7c57bc5b2.jpeg"
                alt="..."
              />
              <SmallFrame>
                <Feedback>
                  <Customer>
                    <UserAvt
                      src="../images/avatar/ce8e581c4255dd4249817f7c2496efc4.jpeg"
                      alt="..."
                    />
                    <Name>Darlene Robertson</Name>
                  </Customer>
                  <Comment>
                    The best way to know the quality of the house we want to buy
                  </Comment>
                </Feedback>
                <Date>
                  <Icon
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                      fill="#888B97"
                    />
                  </Icon>
                  <DateTime>2 min read | 24 Apr 2021</DateTime>
                </Date>
              </SmallFrame>
            </Frame>
          </Columns1>
          <Columns2>
            <Col2Img
              src="../../images/houses/cb3cd9a0c04762241610f3c68d1000c8.png"
              alt="..."
            />
            <Col2Feedback>
              <CusInfo>
                <Customer>
                  <UserAvt
                    src="../images/avatar/2dd3efaa42cb64b61220b8b963a49616.jpeg"
                    alt="..."
                  />
                  <Name>Cameron Williamson</Name>
                </Customer>
                <CusTitle>12 Things to know before buying a house</CusTitle>
                <CusComment>
                  Want to buy a house but are unsure about what we should know,
                  here I will try to explain what we should know and check when
                  we want to buy a house
                </CusComment>
              </CusInfo>
              <Date>
                <Icon
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                    fill="#888B97"
                  />
                </Icon>
                <DateTime>8 min read | 25 Apr 2021</DateTime>
              </Date>
            </Col2Feedback>
          </Columns2>
        </ColumnsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 120px;
  padding: 0;
  width: calc(100% - 240px);
  height: 753px;
  flex-shrink: 0;
  position: relative;
  margin-bottom: 120px;
  justify-content: center;
`;

const MainContents = styled.div`
  width: 422px;
  flex-shrink: 0;
  text-align: center;
  flex-direction: column;
`;

const Contents = styled(MainContents)`
  width: 422px;
  height: 119px;
  align-items: center;
  text-align: center;
  display: flex;
`;

const MainTitle = styled.div`
  color: var(--MRT-App-Headline, #1b1c57);
  text-align: center;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  width: 101%;
  margin-top: 12px;
`;

const Group10 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  height: 27px;
  flex-shrink: 0;
`;

const SmallTitle = styled.p`
  color: var(--Yellow-500, #f59e0b);
  text-align: center;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  width: 103%;
  margin: 0;
`;

const Rectangle14 = styled.div`
  width: 32px;
  height: 1px;
  flex-shrink: 0;
  background: var(--Yellow-500, #f59e0b);
  margin-top: 0;
  margin-bottom: 8px;
`;

const ContactButton = styled.button`
  margin-top: 1.5rem;
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  background: var(--Green-500, #10b981);
  height: 44px;
  color: #fff;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  border: none;
`;

const ColumnsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Columns1 = styled.div`
  width: 572px;
  height: 524px;
  flex-shrink: 0;
  gap: 40px;
`;

const Frame = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;
`;

const HouseImg = styled.img`
  width: 200px;
  height: 144px;
  border-radius: 16px;
  background: lightgray 50% / cover no-repeat, #c4c4c4;
`;

const SmallFrame = styled.div`
  display: flex;
  width: 340px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Feedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Customer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const UserAvt = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: lightgray 50% / cover no-repeat;

  /* Shadow Smooth 2 */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;

const Name = styled.p`
  color: var(--Neutral-700, #3c4563);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  margin: 0;
  flex: 1 0 0;
`;

const Comment = styled.p`
  align-self: stretch;
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 177.778% */
  text-transform: capitalize;
  margin: 0;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

const DateTime = styled.p`
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  flex: 1 0 0;
  margin: 0;
`;

const Columns2 = styled.div`
  margin-top: 2px;
  width: 560px;
  height: 480px;
  flex-shrink: 0;
`;

const Col2Img = styled.img`
  width: 560px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 16px;
  background: lightgray 50% / cover no-repeat, #c4c4c4;
  margin-bottom: 1.5rem;
`;

const Col2Feedback = styled.div`
  display: flex;
  width: 560px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const CusInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
const CusTitle = styled.h2`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  text-transform: capitalize;
  margin: 0;
  align-self: stretch;
`;
const CusComment = styled.p`
  align-self: stretch;
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  line-height: 24px; /* 171.429% */
`;
