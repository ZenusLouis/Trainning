import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";

export default function FeaturedHouse(){
    return (
      <FeatureHouse>
        <FeaturedHouseNav>
          <FeaturedHouseTitle>
            <FeaturedHouseTitleTop>
              <svg
                width="32"
                height="1"
                viewBox="0 0 32 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="1" fill="#F59E0B" />
              </svg>
              Our Recommendation
            </FeaturedHouseTitleTop>
            <FeaturedHouseTitleLogo>Featured House</FeaturedHouseTitleLogo>
          </FeaturedHouseTitle>
          <FeaturedHouseOptions>
            <FeaturedHouseOption>
              <Link href="#">House</Link>
            </FeaturedHouseOption>
            <FeaturedHouseOption>
              <Link href="#">Villa</Link>
            </FeaturedHouseOption>
            <FeaturedHouseOption>
              <Link href="#">Apartment</Link>
            </FeaturedHouseOption>
          </FeaturedHouseOptions>
          <FeaturedHouseButton>
            <FeaturedHouseButtonBack>
              <Link href="#">
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.50778 17.1645C7.77808 17.165 8.04004 17.0703 8.24818 16.8967C8.36532 16.799 8.46215 16.679 8.53313 16.5436C8.60411 16.4081 8.64783 16.2599 8.6618 16.1075C8.67577 15.955 8.65971 15.8012 8.61454 15.655C8.56937 15.5088 8.49598 15.373 8.39857 15.2554L3.21577 9.01589L8.21347 2.76475C8.30957 2.64567 8.38133 2.50867 8.42463 2.3616C8.46794 2.21453 8.48193 2.0603 8.4658 1.90777C8.44968 1.75524 8.40375 1.60742 8.33067 1.47281C8.25758 1.3382 8.15878 1.21945 8.03994 1.12339C7.92024 1.01741 7.78007 0.937476 7.62821 0.888598C7.47636 0.839719 7.3161 0.822952 7.1575 0.839348C6.9989 0.855744 6.84538 0.904949 6.70658 0.983876C6.56778 1.0628 6.44668 1.16975 6.3509 1.298L0.763194 8.28251C0.593039 8.4908 0.500019 8.75207 0.500019 9.02171C0.500019 9.29134 0.593039 9.55261 0.763194 9.7609L6.54757 16.7454C6.66362 16.8863 6.81105 16.9976 6.97788 17.0705C7.14471 17.1433 7.32626 17.1755 7.50778 17.1645Z"
                    fill="#3C4563"
                  />
                </svg>
              </Link>
            </FeaturedHouseButtonBack>
            <FeaturedHouseButtonNext>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M11.6589 5.83552C11.3886 5.83499 11.1266 5.92971 10.9185 6.10326C10.8014 6.20098 10.7045 6.321 10.6336 6.45644C10.5626 6.59188 10.5189 6.74007 10.5049 6.89254C10.4909 7.04501 10.507 7.19875 10.5521 7.34496C10.5973 7.49118 10.6707 7.62699 10.7681 7.74462L15.9509 13.9841L10.9532 20.2353C10.8571 20.3543 10.7854 20.4913 10.7421 20.6384C10.6988 20.7855 10.6848 20.9397 10.7009 21.0922C10.717 21.2448 10.7629 21.3926 10.836 21.5272C10.9091 21.6618 11.0079 21.7806 11.1267 21.8766C11.2464 21.9826 11.3866 22.0625 11.5385 22.1114C11.6903 22.1603 11.8506 22.177 12.0092 22.1607C12.1678 22.1443 12.3213 22.0951 12.4601 22.0161C12.5989 21.9372 12.72 21.8303 12.8158 21.702L18.4035 14.7175C18.5736 14.5092 18.6667 14.2479 18.6667 13.9783C18.6667 13.7087 18.5736 13.4474 18.4035 13.2391L12.6191 6.25459C12.5031 6.11371 12.3556 6.00235 12.1888 5.92954C12.022 5.85673 11.8404 5.82452 11.6589 5.83552Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </FeaturedHouseButtonNext>
          </FeaturedHouseButton>
        </FeaturedHouseNav>
        <FeaturedHouseContent>
          {/* First Item */}
          <FHItem>
            <FHItemTop>
              <FHImageTop
                src="../../images/houses/house1.png"
                alt="Picture of house"
              />
              <FHItemTopType>
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0328 6.33118C10.7295 5.64846 10.2885 5.03568 9.7375 4.53118L9.28281 4.114C9.26737 4.10022 9.24879 4.09044 9.22869 4.08552C9.2086 4.0806 9.1876 4.0807 9.16754 4.08579C9.14749 4.09088 9.12899 4.10081 9.11367 4.11472C9.09835 4.12863 9.08668 4.14609 9.07969 4.16556L8.87656 4.74837C8.75 5.114 8.51719 5.48743 8.1875 5.85462C8.16563 5.87806 8.14063 5.88431 8.12344 5.88587C8.10625 5.88743 8.07969 5.88431 8.05625 5.86243C8.03437 5.84368 8.02344 5.81556 8.025 5.78743C8.08281 4.84681 7.80156 3.78587 7.18594 2.63118C6.67656 1.67181 5.96875 0.92337 5.08437 0.401495L4.43906 0.0218077C4.35469 -0.0281923 4.24688 0.0374326 4.25156 0.13587L4.28594 0.88587C4.30937 1.39837 4.25 1.8515 4.10938 2.22806C3.9375 2.689 3.69062 3.11712 3.375 3.5015C3.15535 3.76863 2.90639 4.01024 2.63281 4.22181C1.97391 4.72832 1.43815 5.37733 1.06562 6.12025C0.694022 6.86964 0.500453 7.69471 0.5 8.53118C0.5 9.26868 0.645312 9.98275 0.932812 10.6562C1.21042 11.3046 1.61103 11.893 2.1125 12.389C2.61875 12.889 3.20625 13.2827 3.86094 13.5562C4.53906 13.8406 5.25781 13.9843 6 13.9843C6.74219 13.9843 7.46094 13.8406 8.13906 13.5577C8.79214 13.2859 9.38601 12.8895 9.8875 12.3906C10.3938 11.8906 10.7906 11.3062 11.0672 10.6577C11.3543 9.98615 11.5015 9.26312 11.5 8.53274C11.5 7.77024 11.3438 7.02962 11.0328 6.33118Z"
                    fill="#EF4444"
                  />
                </svg>
                Popular
              </FHItemTopType>
            </FHItemTop>
            <FHItemBottom>
              <FHItemBottomTitle>Roselands House</FHItemBottomTitle>
              <FHItemBottomPrice>$ 35.000.000</FHItemBottomPrice>
              <FHItemBottomUser>
                <FHItemBottomUserAvatar
                  src="../../images/avatar/z5107971365229_2a8374ca093303cfccccd379385934d1.jpg"
                  alt="Picture of the author"
                />
                <FHItemBottomUsername>
                  <FHItemBottomUsername>Dianne Russell</FHItemBottomUsername>
                  <FHItemBottomUserAddress>
                    Manchester, Kentucky
                  </FHItemBottomUserAddress>
                </FHItemBottomUsername>
              </FHItemBottomUser>
            </FHItemBottom>
          </FHItem>
        </FeaturedHouseContent>
      </FeatureHouse>
    );
}

// FeaturedHouse
const FeatureHouse = styled.div`
  width: 1440px;
  height: 4590px;
  
  background: #fff;
`;
const FeaturedHouseNav = styled.div`
display: flex;
`;
const FeaturedHouseTitle = styled.div``;
const FeaturedHouseTitleTop = styled.div`
  color: var(--Yellow-500, #f59e0b);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FeaturedHouseTitleLogo = styled.div`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;
const FeaturedHouseOptions = styled.div` 
  display: inline-flex;
  align-items: flex-start;
  gap: 32px;
`;
const FeaturedHouseOption = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 8px;

  border-radius: 32px;
  border: 1px solid var(--Neutral-300, #e0e3eb);

  &:first-child {
    background: var(--Green-100, #d1fae5);
  }
`;
const FeaturedHouseButton = styled.div``;
const FeaturedHouseButtonBack = styled.div`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;

  border-radius: 32px;
  background: var(--Neutral-300, #e0e3eb);
`;
const FeaturedHouseButtonNext = styled.div`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;

  border-radius: 32px;
  background: var(--Green-500, #10b981);
`;
const FeaturedHouseContent = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 40px;
`;
const FHItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const FHItemTop = styled.div`
  width: 340px;
  height: 382px;
`;
const FHImageTop = styled.img`
  width: 340px;
  height: 382px;
  flex-shrink: 0;
  
  border-radius: 24px;
  background: lightgray 50% / cover no-repeat;
`;
const FHItemTopType = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 32px;
  background: var(--Red-100, #fee2e2);

  color: var(--Red-500, #ef4444);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FHItemBottom = styled.div``;
const FHItemBottomTitle = styled.div`
  align-self: stretch;

  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;
const FHItemBottomPrice = styled.div`
  align-self: stretch;

  color: var(--Neutral-700, #3c4563);
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`;
const FHItemBottomUser = styled.div`
  display: flex;
  width: 340px;
  align-items: center;
  gap: 16px;
`;
const FHItemBottomUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  border-radius: 40px;
  background: lightgray 50% / cover no-repeat;
`;

const FHItemBottomUserInfo = styled.div`

`;

const FHItemBottomUsername = styled.div`
  align-self: stretch;
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;
const FHItemBottomUserAddress = styled.div`
  align-self: stretch;
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;