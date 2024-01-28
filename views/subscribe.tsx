import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";

export default function Subscribe() {
  return (
    <SubscribePart>
      <Rec24>
        <SubscribeTitle>
          Subscribe For More Info and update from Hounter
        </SubscribeTitle>
        <Ellipse6></Ellipse6>
        <Ellipse7></Ellipse7>
        <Ellipse8></Ellipse8>
        <Ellipse9></Ellipse9>
        <Rec12></Rec12>
        <Rec25></Rec25>
        <Rec26></Rec26>
        <Rec27></Rec27>
        <SearchContainer>
          <SearchEmailIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z"
                fill="#3B82F6"
              />
            </svg>
          </SearchEmailIcon>
          <SearchInput type="text" placeholder="Your email here" />
          <SearchButton>
            <SearchButtonText>Subsribe Now</SearchButtonText>
          </SearchButton>
        </SearchContainer>
      </Rec24>
    </SubscribePart>
  );
}

const SubscribePart = styled.div`
  width: 1200px;
  height: 312px;
  flex-shrink: 0;
  border-radius: 32px;
`;
const Rec24 = styled.div`
  width: 1200px;
  height: 312px;
  flex-shrink: 0;
  border-radius: 32px;
  background: url("../../images/background/backgroundSubscribe.png"),
    lightgray 50% / cover no-repeat;
`;
const SubscribeTitle = styled.div`
  width: 422px;
  height: 96px;
  color: var(--MRT-App-Headline, #1b1c57);
  text-align: center;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 150% */
  text-transform: capitalize;
`;
const Ellipse6 = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 2px solid #fff;
  background: url("../../images/avatar/z5107971376232_a35e7b3e5c3eb837959738e1ee6bb690.jpg"),
    lightgray 50% / cover no-repeat;

  /* Shadow Smooth 2 */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;
const Ellipse7 = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 2px solid #fff;
  background: url("../../images/avatar/user2.jpg"),
    lightgray 50% / cover no-repeat;

  /* Shadow Smooth 2 */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;
const Ellipse8 = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 2px solid #fff;
  background: url("../../images/avatar/0dec5695cd46cfa87b49b53be7db200d.jpeg"),
    lightgray 50% / cover no-repeat;

  /* Shadow Smooth 2 */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;
const Ellipse9 = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 2px solid #fff;
  background: url("../../images/avatar/user4.png"),
    lightgray 50% / cover no-repeat;

  /* Shadow Smooth 2 */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;

const Rec12 = styled.div`
  width: 81px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid #fff;
  background: url("../../images/furniture/furniture1.jpg"),
    lightgray 50% / cover no-repeat;
`;
const Rec25 = styled.div`
  width: 54px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid #fff;
  background: url("../../images/furniture/furniture2.jpg"),
    lightgray 50% / cover no-repeat;
`;
const Rec26 = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid #fff;
  background: url("../../images/furniture/furniture3.jpg"),
    lightgray 50% / cover no-repeat;
`;
const Rec27 = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid #fff;
  background: url("../../images/furniture/furniture4.jpg"),
    lightgray 50% / cover no-repeat;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 496px;
  height: 24px;
  padding: 4px 4px 4px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  background: #fff;

  /* Shadow / Smooth */
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.05);
`;
const SearchInput = styled.input`
  width: 100%;
  height: auto;
  ::placeholder {
    color: var(--Neutral-500, #888b97);
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
    flex: 1 0 0;
  }
`;
const SearchEmailIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
const SearchButton = styled.button`
  display: flex;
  height: 16px;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  background: var(--Green-500, #10b981);
`;
const SearchButtonText = styled.p`
  color: #fff;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;
