import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";

export default function AboutUs() {
  return (
    <AboutUsPart>
      <ABTitle>
        <ABTitleTop>
          <ABTitleTopReg></ABTitleTopReg>
          <ABTitleTopText>See Our Review</ABTitleTopText>
        </ABTitleTop>
        <ABTitleText>What Our User Say About Us</ABTitleText>
      </ABTitle>
      <ABContent>
        {/* First review */}
        <ABContentReview>
          <ABContentReviewImg
            src="../../images/houses/house5.jpg"
            alt="Review Image"
          />
          <ABContentReviewDetail>
            <ABContentReviewDetailTitle>
              <ABContentReviewDetailTitleText>
                My house sold out fast!
              </ABContentReviewDetailTitleText>
              <ABContentReviewDetailTitleDesc>
                I was finally able to sell my house quickly through Hounter by
                immediately setting me up with people who wanted my house. I
                also do not get a discount from the sale of my house. Awesome!
              </ABContentReviewDetailTitleDesc>
            </ABContentReviewDetailTitle>
            <ABContentReviewDetailUser>
              <ABContentReviewDetailUserInfo>
                <ABContentReviewDetailUserAvatar
                  src="../../images/avatar/user1.jpg"
                  alt="User Avatar"
                />
                <ABContentReviewDetailUserInfoDetail>
                  <ABContentReviewDetailUsername>
                    Courtney Henry
                  </ABContentReviewDetailUsername>
                  <ABContentReviewDetailUserJob>
                    CEO Andarafish
                  </ABContentReviewDetailUserJob>
                </ABContentReviewDetailUserInfoDetail>
              </ABContentReviewDetailUserInfo>
              <ABContentReviewDetailUserStart>
                <Start>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </Start>
                <StartNumber>4.3</StartNumber>
              </ABContentReviewDetailUserStart>
            </ABContentReviewDetailUser>
          </ABContentReviewDetail>
        </ABContentReview>
        {/* Second review */}
        <ABContentReview>
          <ABContentReviewImg
            src="../../images/houses/house6.jpg"
            alt="Review Image"
          />
          <ABContentReviewDetail>
            <ABContentReviewDetailTitle>
              <ABContentReviewDetailTitleText>
                Best! I got the house I wanted through Hounter
              </ABContentReviewDetailTitleText>
              <ABContentReviewDetailTitleDesc>
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </ABContentReviewDetailTitleDesc>
            </ABContentReviewDetailTitle>
            <ABContentReviewDetailUser>
              <ABContentReviewDetailUserInfo>
                <ABContentReviewDetailUserAvatar
                  src="../../images/avatar/user2.jpg"
                  alt="User Avatar"
                />
                <ABContentReviewDetailUserInfoDetail>
                  <ABContentReviewDetailUsername>
                    Dianne Russell
                  </ABContentReviewDetailUsername>
                  <ABContentReviewDetailUserJob>
                    Manager Director
                  </ABContentReviewDetailUserJob>
                </ABContentReviewDetailUserInfoDetail>
              </ABContentReviewDetailUserInfo>
              <ABContentReviewDetailUserStart>
                <Start>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </Start>
                <StartNumber>4.6</StartNumber>
              </ABContentReviewDetailUserStart>
            </ABContentReviewDetailUser>
          </ABContentReviewDetail>
        </ABContentReview>
        {/* Third review */}
        <ABContentReview>
          <ABContentReviewImg
            src="../../images/houses/house7.jpg"
            alt="Review Image"
          />
          <ABContentReviewDetail>
            <ABContentReviewDetailTitle>
              <ABContentReviewDetailTitleText>
                Through the Hounter, I can get a house for my self
              </ABContentReviewDetailTitleText>
              <ABContentReviewDetailTitleDesc>
                By looking for information about what kind of house we want, we
                managed to get the house we wanted very quickly, and directly
                connected with the seller to be able to ask about the details,
                very helpful!
              </ABContentReviewDetailTitleDesc>
            </ABContentReviewDetailTitle>
            <ABContentReviewDetailUser>
              <ABContentReviewDetailUserInfo>
                <ABContentReviewDetailUserAvatar
                  src="../../images/avatar/user3.jpg"
                  alt="User Avatar"
                />
                <ABContentReviewDetailUserInfoDetail>
                  <ABContentReviewDetailUsername>
                    Esther Howard
                  </ABContentReviewDetailUsername>
                  <ABContentReviewDetailUserJob>
                    Head of Marketing
                  </ABContentReviewDetailUserJob>
                </ABContentReviewDetailUserInfoDetail>
              </ABContentReviewDetailUserInfo>
              <ABContentReviewDetailUserStart>
                <Start>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M25.6048 10.7088C25.5315 10.4929 25.3965 10.3031 25.2166 10.1629C25.0366 10.0228 24.8196 9.93838 24.5922 9.92018L17.941 9.39168L15.0628 3.02052C14.9712 2.81531 14.8221 2.64103 14.6336 2.51868C14.445 2.39634 14.2251 2.33118 14.0004 2.33105C13.7756 2.33093 13.5557 2.39585 13.367 2.51799C13.1783 2.64012 13.0291 2.81425 12.9372 3.01935L10.059 9.39168L3.40784 9.92018C3.18437 9.93789 2.97074 10.0196 2.79249 10.1555C2.61424 10.2915 2.47894 10.4759 2.40275 10.6867C2.32657 10.8975 2.31274 11.1259 2.36291 11.3443C2.41309 11.5628 2.52514 11.7622 2.68568 11.9187L7.60084 16.7102L5.86251 24.2375C5.80973 24.4654 5.82664 24.7038 5.91107 24.9219C5.99549 25.14 6.14352 25.3278 6.33595 25.4607C6.52837 25.5936 6.75632 25.6657 6.99019 25.6674C7.22407 25.6692 7.45308 25.6007 7.64751 25.4707L14 21.2357L20.3525 25.4707C20.5512 25.6026 20.7856 25.6706 21.0241 25.6653C21.2626 25.6601 21.4937 25.582 21.6865 25.4414C21.8792 25.3009 22.0243 25.1047 22.1022 24.8793C22.1802 24.6538 22.1872 24.4099 22.1223 24.1803L19.9885 16.7137L25.2805 11.9514C25.627 11.6387 25.7542 11.151 25.6048 10.7088Z"
                      fill="#F59E0B"
                    />
                  </svg>
                </Start>
                <StartNumber>4.6</StartNumber>
              </ABContentReviewDetailUserStart>
            </ABContentReviewDetailUser>
          </ABContentReviewDetail>
        </ABContentReview>
      </ABContent>
      <Pagination>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="8"
          viewBox="0 0 56 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#E0E3EB" />
          <circle cx="28" cy="4" r="4" fill="#3C4563" />
          <circle cx="52" cy="4" r="4" fill="#E0E3EB" />
        </svg>
      </Pagination>
    </AboutUsPart>
  );
}

const AboutUsPart = styled.div`
  width: 100%;
  height: 664px;
  margin: 120px auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Title
const ABTitle = styled.div`
  width: 461px;
  height: 79px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ABTitleText = styled.h2`
  color: var(--MRT-App-Headline, #1b1c57);
  text-align: center;
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  width: 103%;
  margin: 12px 0 0 0;
`;

const ABTitleTop = styled.div`
  width: 107px;
  height: 27px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ABTitleTopText = styled.p`
  color: var(--Yellow-500, #f59e0b);
  text-align: center;
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  margin: 0;
  width: 103%;
`;

const ABTitleTopReg = styled.div`
  width: 32px;
  height: 1px;
  flex-shrink: 0;
  background: var(--Yellow-500, #f59e0b);
  margin-bottom: 8px;
`;

// Content
const ABContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 56px;
  margin-top: 40px;
`;
const ABContentReview = styled.div`
  width: 740px;
  height: 505px;
`;
const ABContentReviewImg = styled.img`
  width: 740px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  opacity: 0.7;
  background: lightgray 50% / cover no-repeat, #c4c4c4;
`;
const ABContentReviewDetail = styled.div`
  display: flex;
  width: 612px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.05);
  transform: translate(10%, -61%);
`;
const ABContentReviewDetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;
const ABContentReviewDetailTitleText = styled.div`
  width: 548px;
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;
const ABContentReviewDetailTitleDesc = styled.div`
  width: 548px;
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;
const ABContentReviewDetailUser = styled.div`
  display: flex;
  width: 548px;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 24px;
`;
const ABContentReviewDetailUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1 0 0;
`;
const ABContentReviewDetailUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: lightgray 50% / cover no-repeat;

  box-shadow: 0px 9px 32px 0px rgba(89, 92, 219, 0.1);
`;
const ABContentReviewDetailUserInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
`;
const ABContentReviewDetailUsername = styled.div`
  align-self: stretch;
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
const ABContentReviewDetailUserJob = styled.div`
  align-self: stretch;
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
const ABContentReviewDetailUserStart = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Start = styled.div`
  width: 28px;
  height: 28px;
`;
const StartNumber = styled.div`
  color: var(--Neutral-700, #3c4563);
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
const Pagination = styled.svg`
  width: 56px;
  height: 8px;
  flex-shrink: 0;
  margin-top: 32px;
`;
