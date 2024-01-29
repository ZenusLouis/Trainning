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
      <SubscribeUser>
        <SubscribeUserImg src="../../images/avatar/user2.jpg" />
      </SubscribeUser>
      <SubscribeUser>
        <SubscribeUserImg src="../../images/avatar/z5107971376232_a35e7b3e5c3eb837959738e1ee6bb690.jpg" />
      </SubscribeUser>
      <SubscribeUser>
        <SubscribeUserImg src="../../images/avatar/user4.png" />
      </SubscribeUser>
      <SubscribeUser>
        <SubscribeUserImg src="../../images/avatar/0dec5695cd46cfa87b49b53be7db200d.jpeg" />
      </SubscribeUser>
      <SubscribeUser>
        <HouseAndThingImg
          src="../../images/furniture/furniture1.jpg"
          width={81}
          height={81}
        />
      </SubscribeUser>
      <SubscribeUser>
        <HouseAndThingImg
          src="../../images/furniture/furniture2.jpg"
          width={54}
          height={54}
        />
      </SubscribeUser>
      <SubscribeUser>
        <HouseAndThingImg
          src="../../images/furniture/furniture3.jpg"
          width={70}
          height={70}
        />
      </SubscribeUser>
      <SubscribeUser>
        <HouseAndThingImg
          src="../../images/furniture/furniture4.jpg"
          width={55}
          height={55}
        />
      </SubscribeUser>
      <SubscribeTitle>
        Subscribe For More Info and update from Hounter
      </SubscribeTitle>
      <SubscribeInput>
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
        <SubscribeInputEmail placeholder="Your email here" />
        <SubscribeButton>Subsribe Now</SubscribeButton>
      </SubscribeInput>
    </SubscribePart>
  );
}

const SubscribePart = styled.div`
  margin: 0 120px;
  position: relative;
  display: flex;
  justify-content: center;
  height: 312px;
  width: auto;
  flex-shrink: 0;
  border-radius: 32px;
  background: url("../../images/background/backgroundSubscribe.png"),
    lightgray 50% / cover no-repeat;
  @media only screen and (max-width: 1285px) {
    height: 300px;
  }
  @media only screen and (max-width: 1016px) {
    height: 280px;
  }
  @media only screen and (max-width: 800px) {
    height: 260px;
  }
  @media only screen and (max-width: 700px) {
    height: 240px;
    margin: 0 60px;
  }
  @media only screen and (max-width: 500px) {
    height: 220px;
  }
`;
const SubscribeUser = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
  &:first-child {
    top: 20%;
    left: 20%;
  }
  &:nth-child(2) {
    bottom: 35%;
    left: 10%;
  }
  &:nth-child(3) {
    top: 30%;
    right: 10%;
  }
  &:nth-child(4) {
    top: 45%;
    right: 20%;
  }
  &:nth-child(5) {
    width: 81px;
    height: 81px;
    top: 10%;
    left: 5%;
  }
  &:nth-child(6) {
    width: 54px;
    height: 54px;
    bottom: 30%;
    left: 20%;
  }
  &:nth-child(7) {
    width: 70px;
    height: 70px;
    top: 12%;
    right: 15%;
  }
  &:nth-child(8) {
    width: 55px;
    height: 55px;
    bottom: 20%;
    right: 5%;
  }
  @media only screen and (max-width: 900px) {
    &:first-child {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(6) {
      display: none;
    }
    &:nth-child(7) {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(4) {
        display: none;
      }
      &:nth-child(5) {
        display: none;
      }
      &:nth-child(8) {
        display: none;
      }
    }
  }
`;
const SubscribeUserImg = styled.img`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 2px solid #fff;
`;
const HouseAndThingImg = styled.img`
  flex-shrink: 0;
  border-radius: 24px;
  border: 2px solid #fff;
`;
const SubscribeTitle = styled.div`
  margin-top: 65px;
  width: 36%;
  height: 30%;
  color: var(--MRT-App-Headline, #1b1c57);
  text-align: center;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
  text-transform: capitalize;
  @media only screen and (max-width: 1285px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 1011px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 825px) {
    margin-top: 50px; 
    width: 40%;
    height: 35%;
  }
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 25px;
    height: 20%;
    width: 60%;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;
const SubscribeInput = styled.div`
  position: absolute;
  bottom: 20%;
  display: flex;
  width: 496px;
  padding: 4px 4px 4px 24px;
  align-items: center;
  gap: 16px;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.05);
  @media only screen and (max-width: 1285px) {
    width: 350px;
  }
  @media only screen and (max-width: 1011px) {
    width: 300px;
  }
  @media only screen and (max-width: 800px) {
    width: 250px;
    gap: 10px;
    bottom: 30%;
  }
  @media only screen and (max-width: 700px) {
    width: 250px;
    bottom: 22%;
  }
  @media only screen and (max-width: 500px) {
    width: 200px;
    gap: 5px;
    bottom: 20%;
  } 
`;
const SubscribeInputEmail = styled.input`
  flex: 1 0 0;
  border: none;
  outline: none;
  &::placeholder {
    color: var(--Neutral-500, #888b97);
    font-family: Lexend;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
  @media only screen and (max-width: 500px) {
    width: 150px;
  }
`;
const SubscribeButton = styled.button`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  border: none;
  background: var(--Green-500, #10b981);

  color: #fff;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */
  @media only screen and (max-width: 1285px) {
    font-size: 10px;
    padding: 10px 14px;
  }
  @media only screen and (max-width: 1011px) {
    font-size: 8px;
    padding: 5px 10px;
    font-size: 10px;
    position: absolute;
    bottom: 1px;
    top: 1px;
    right: 3px;
  }
  @media only screen and (max-width: 800px) {
    top: 120%;
    right: 35%;
    z-index: 2;
    width: 80px;
    height: 30px;
  }
  @media only screen and (max-width: 500px) {
    right: 30%;
  }
`;
