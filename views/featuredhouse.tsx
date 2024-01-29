import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";

export default function FeaturedHouse() {
  return (
    <FeatureHouse>
      <FHNav>
        <FHTitle>
          <FHTitleRemind>
            <FHTitleRemindSpace></FHTitleRemindSpace>Our Recommendation
          </FHTitleRemind>
          <FHTitleText>Featured House</FHTitleText>
        </FHTitle>
        <FHCategories>
          <FHCategory>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 10.8319V19.5C20.9998 19.7719 20.9262 20.0386 20.7868 20.272C20.6475 20.5054 20.4476 20.6968 20.2084 20.8259C19.9916 20.9432 19.7485 21.0031 19.5021 20.9999H14.9967C14.7978 20.9999 14.607 20.9209 14.4664 20.7803C14.3257 20.6396 14.2467 20.4488 14.2467 20.2499V15.7493C14.2467 15.5504 14.1677 15.3596 14.0271 15.2189C13.8864 15.0783 13.6956 14.9993 13.4967 14.9993H10.4967C10.2978 14.9993 10.107 15.0783 9.9664 15.2189C9.82574 15.3596 9.74673 15.5504 9.74673 15.7493V20.2499C9.74673 20.4488 9.66771 20.6396 9.52706 20.7803C9.3864 20.9209 9.19564 20.9999 8.99673 20.9999H4.5002C4.28754 21.0005 4.07723 20.9556 3.88335 20.8682C3.68948 20.7808 3.51651 20.653 3.37604 20.4934C3.12946 20.2082 2.99571 19.8427 3.00001 19.4657V10.8318C3.00017 10.6228 3.04392 10.4162 3.12846 10.225C3.21299 10.0339 3.33646 9.86251 3.49098 9.7218L10.9903 2.90308C11.2658 2.65075 11.6258 2.51078 11.9994 2.51074C12.3729 2.51071 12.733 2.65062 13.0085 2.90289L20.5091 9.72189C20.6636 9.86263 20.787 10.034 20.8716 10.2252C20.9561 10.4163 20.9998 10.6229 21 10.8319Z"
                fill="#10B981"
              />
            </svg>
            Home
          </FHCategory>
          <FHCategory>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 20.9999H4C3.45 20.9999 3 20.5499 3 19.9999V8.68994C3 8.26994 3.25 7.89994 3.64 7.74994L14.64 3.51994C14.7921 3.46126 14.9561 3.44064 15.118 3.45986C15.2798 3.47909 15.4345 3.53758 15.5686 3.63025C15.7027 3.72292 15.8121 3.84696 15.8873 3.99156C15.9624 4.13617 16.0012 4.29696 16 4.45994V9.99994H8C7.45 9.99994 7 10.4499 7 10.9999V20.9999ZM17 11.9999H10C9.45 11.9999 9 12.4499 9 12.9999V19.9999C9 20.5499 9.45 20.9999 10 20.9999H14V16.9999C14 16.4499 14.45 15.9999 15 15.9999C15.55 15.9999 16 16.4499 16 16.9999V20.9999H20C20.55 20.9999 21 20.5499 21 19.9999V11.9999C21 10.8999 20.1 9.99994 19 9.99994C17.9 9.99994 17 10.8999 17 11.9999Z"
                fill="#888B97"
              />
            </svg>
            Villa
          </FHCategory>
          <FHCategory>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 11V5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V7H5C3.9 7 3 7.9 3 9V19C3 20.1 3.9 21 5 21H11V17H13V21H19C20.1 21 21 20.1 21 19V13C21 11.9 20.1 11 19 11H17ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM11 15H9V13H11V15ZM11 11H9V9H11V11ZM11 7H9V5H11V7ZM15 15H13V13H15V15ZM15 11H13V9H15V11ZM15 7H13V5H15V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z"
                fill="#888B97"
              />
            </svg>
            Apartment
          </FHCategory>
        </FHCategories>
        <FHArrow>
          <FHArrowButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M17.5078 22.1645C17.7781 22.165 18.04 22.0703 18.2482 21.8967C18.3653 21.799 18.4622 21.679 18.5331 21.5436C18.6041 21.4081 18.6478 21.2599 18.6618 21.1075C18.6758 20.955 18.6597 20.8012 18.6145 20.655C18.5694 20.5088 18.496 20.373 18.3986 20.2554L13.2158 14.0159L18.2135 7.76475C18.3096 7.64567 18.3813 7.50867 18.4246 7.3616C18.4679 7.21453 18.4819 7.0603 18.4658 6.90777C18.4497 6.75524 18.4038 6.60742 18.3307 6.47281C18.2576 6.3382 18.1588 6.21945 18.0399 6.12339C17.9202 6.01741 17.7801 5.93748 17.6282 5.8886C17.4764 5.83972 17.3161 5.82295 17.1575 5.83935C16.9989 5.85574 16.8454 5.90495 16.7066 5.98388C16.5678 6.0628 16.4467 6.16975 16.3509 6.298L10.7632 13.2825C10.593 13.4908 10.5 13.7521 10.5 14.0217C10.5 14.2913 10.593 14.5526 10.7632 14.7609L16.5476 21.7454C16.6636 21.8863 16.811 21.9976 16.9779 22.0705C17.1447 22.1433 17.3263 22.1755 17.5078 22.1645Z"
                fill="#3C4563"
              />
            </svg>
          </FHArrowButton>
          <FHArrowButton>
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
          </FHArrowButton>
        </FHArrow>
      </FHNav>
      <FHHouses>
        {/* First house */}
        <FHHouse>
          <FHHouseImage>
            <FHHouseImageImg src="../../images/houses/house1.png" alt="House" />
            <FHHouseTypePopular>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.0328 7.33118C12.7295 6.64846 12.2885 6.03568 11.7375 5.53118L11.2828 5.114C11.2674 5.10022 11.2488 5.09044 11.2287 5.08552C11.2086 5.0806 11.1876 5.0807 11.1675 5.08579C11.1475 5.09088 11.129 5.10081 11.1137 5.11472C11.0984 5.12863 11.0867 5.14609 11.0797 5.16556L10.8766 5.74837C10.75 6.114 10.5172 6.48743 10.1875 6.85462C10.1656 6.87806 10.1406 6.88431 10.1234 6.88587C10.1063 6.88743 10.0797 6.88431 10.0562 6.86243C10.0344 6.84368 10.0234 6.81556 10.025 6.78743C10.0828 5.84681 9.80156 4.78587 9.18594 3.63118C8.67656 2.67181 7.96875 1.92337 7.08437 1.4015L6.43906 1.02181C6.35469 0.971808 6.24688 1.03743 6.25156 1.13587L6.28594 1.88587C6.30937 2.39837 6.25 2.8515 6.10938 3.22806C5.9375 3.689 5.69062 4.11712 5.375 4.5015C5.15535 4.76863 4.90639 5.01024 4.63281 5.22181C3.97391 5.72832 3.43815 6.37733 3.06562 7.12025C2.69402 7.86964 2.50045 8.69471 2.5 9.53118C2.5 10.2687 2.64531 10.9827 2.93281 11.6562C3.21042 12.3046 3.61103 12.893 4.1125 13.389C4.61875 13.889 5.20625 14.2827 5.86094 14.5562C6.53906 14.8406 7.25781 14.9843 8 14.9843C8.74219 14.9843 9.46094 14.8406 10.1391 14.5577C10.7921 14.2859 11.386 13.8895 11.8875 13.3906C12.3938 12.8906 12.7906 12.3062 13.0672 11.6577C13.3543 10.9861 13.5015 10.2631 13.5 9.53274C13.5 8.77024 13.3438 8.02962 13.0328 7.33118Z"
                  fill="#EF4444"
                />
              </svg>
              <FHHouseTypeTextPopular>Popular</FHHouseTypeTextPopular>
            </FHHouseTypePopular>
          </FHHouseImage>
          <FHHouseInfo>
            <FHHouseName>Roselands House</FHHouseName>
            <FHHousePrice>$ 35.000.000</FHHousePrice>
          </FHHouseInfo>
          <FHHouseOwner>
            <FHHouseOwnerAvatar>
              <FHHouseOwnerAvatarImage src="../../images/avatar/user2.jpg" />
            </FHHouseOwnerAvatar>
            <FHHouseOwnerInfo>
              <FHHouseOwnerName>Dianne Russell</FHHouseOwnerName>
              <FHHouseOwnerAddress>Manchester, Kentucky</FHHouseOwnerAddress>
            </FHHouseOwnerInfo>
          </FHHouseOwner>
        </FHHouse>
        {/* Second house */}
        <FHHouse>
          <FHHouseImage>
            <FHHouseImageImg src="../../images/houses/house2.png" alt="House" />
            <FHHouseTypeNewHouse>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14 7.22126V13C13.9999 13.1812 13.9508 13.3591 13.8579 13.5147C13.765 13.6703 13.6317 13.7979 13.4723 13.8839C13.3278 13.9622 13.1657 14.0021 13.0014 13.9999H9.99782C9.86521 13.9999 9.73803 13.9473 9.64426 13.8535C9.5505 13.7597 9.49782 13.6326 9.49782 13.4999V10.4995C9.49782 10.3669 9.44514 10.2397 9.35137 10.146C9.2576 10.0522 9.13043 9.99951 8.99782 9.99951H6.99782C6.86521 9.99951 6.73803 10.0522 6.64426 10.146C6.5505 10.2397 6.49782 10.3669 6.49782 10.4995V13.4999C6.49782 13.6326 6.44514 13.7597 6.35137 13.8535C6.2576 13.9473 6.13043 13.9999 5.99782 13.9999H3.00013C2.85836 14.0003 2.71816 13.9704 2.5889 13.9121C2.45965 13.8539 2.34434 13.7687 2.25069 13.6623C2.08631 13.4721 1.99714 13.2285 2.00001 12.9771V7.2212C2.00011 7.08187 2.02928 6.9441 2.08564 6.81669C2.142 6.68927 2.22431 6.57501 2.32732 6.4812L7.32688 1.93539C7.51053 1.76717 7.75053 1.67385 7.99957 1.67383C8.24862 1.6738 8.48864 1.76708 8.67232 1.93526L13.6728 6.48126C13.7757 6.57509 13.858 6.68935 13.9144 6.81677C13.9707 6.94418 13.9999 7.08194 14 7.22126Z"
                  fill="#1D4ED8"
                />
              </svg>
              <FHHouseTypeTextNewHouse>New house</FHHouseTypeTextNewHouse>
            </FHHouseTypeNewHouse>
          </FHHouseImage>
          <FHHouseInfo>
            <FHHouseName>Woodlandside</FHHouseName>
            <FHHousePrice>$ 20.000.000</FHHousePrice>
          </FHHouseInfo>
          <FHHouseOwner>
            <FHHouseOwnerAvatar>
              <FHHouseOwnerAvatarImage src="../../images/avatar/z5107971386247_df73c2f1583d9002af787466125fc334.jpg" />
            </FHHouseOwnerAvatar>
            <FHHouseOwnerInfo>
              <FHHouseOwnerName>Robert Fox</FHHouseOwnerName>
              <FHHouseOwnerAddress>
                Dr. San Jose, South Dakota
              </FHHouseOwnerAddress>
            </FHHouseOwnerInfo>
          </FHHouseOwner>
        </FHHouse>
        {/* Third house */}
        <FHHouse>
          <FHHouseImage>
            <FHHouseImageImg src="../../images/houses/house3.png" alt="House" />
            <FHHouseTypeBestDeals>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.8 4.79999H2.79998V4.39999L11.6 3.69599V4.39999H12.8V3.19999C12.8 2.31999 12.0872 1.70239 11.2168 1.82639L3.18398 2.97359C2.31278 3.09839 1.59998 3.91999 1.59998 4.79999V12.8C1.59998 13.2243 1.76855 13.6313 2.0686 13.9314C2.36866 14.2314 2.77563 14.4 3.19998 14.4H12.8C13.2243 14.4 13.6313 14.2314 13.9313 13.9314C14.2314 13.6313 14.4 13.2243 14.4 12.8V6.39999C14.4 5.97564 14.2314 5.56868 13.9313 5.26862C13.6313 4.96856 13.2243 4.79999 12.8 4.79999ZM11.6 10.4048C11.4423 10.4047 11.2863 10.3736 11.1406 10.3133C10.995 10.2529 10.8627 10.1644 10.7513 10.0529C10.6399 9.94141 10.5515 9.80905 10.4912 9.66339C10.4309 9.51773 10.3999 9.36163 10.4 9.20399C10.4 9.04635 10.4311 8.89027 10.4915 8.74465C10.5519 8.59903 10.6403 8.46673 10.7518 8.3553C10.8634 8.24387 10.9957 8.15549 11.1414 8.09521C11.287 8.03493 11.4431 8.00394 11.6008 8.00399C11.9191 8.0041 12.2244 8.13067 12.4495 8.35586C12.6745 8.58105 12.8009 8.88642 12.8008 9.20479C12.8007 9.52315 12.6741 9.82844 12.4489 10.0535C12.2237 10.2785 11.9183 10.4049 11.6 10.4048Z"
                  fill="#047857"
                />
              </svg>
              <FHHouseTypeTextBestDeals>Best Deals</FHHouseTypeTextBestDeals>
            </FHHouseTypeBestDeals>
          </FHHouseImage>
          <FHHouseInfo>
            <FHHouseName>The Old Lighthouse</FHHouseName>
            <FHHousePrice>$ 44.000.000</FHHousePrice>
          </FHHouseInfo>
          <FHHouseOwner>
            <FHHouseOwnerAvatar>
              <FHHouseOwnerAvatarImage src="../../images/avatar/z5107971376232_a35e7b3e5c3eb837959738e1ee6bb690.jpg" />
            </FHHouseOwnerAvatar>
            <FHHouseOwnerInfo>
              <FHHouseOwnerName>Ronald Richards</FHHouseOwnerName>
              <FHHouseOwnerAddress>Santa Ana, Illinois</FHHouseOwnerAddress>
            </FHHouseOwnerInfo>
          </FHHouseOwner>
        </FHHouse>
        {/* Last house */}
        <FHHouse>
          <FHHouseImage>
            <FHHouseImageImg src="../../images/houses/house4.png" alt="House" />
            <FHHouseTypePopular>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.0328 7.33118C12.7295 6.64846 12.2885 6.03568 11.7375 5.53118L11.2828 5.114C11.2674 5.10022 11.2488 5.09044 11.2287 5.08552C11.2086 5.0806 11.1876 5.0807 11.1675 5.08579C11.1475 5.09088 11.129 5.10081 11.1137 5.11472C11.0984 5.12863 11.0867 5.14609 11.0797 5.16556L10.8766 5.74837C10.75 6.114 10.5172 6.48743 10.1875 6.85462C10.1656 6.87806 10.1406 6.88431 10.1234 6.88587C10.1063 6.88743 10.0797 6.88431 10.0562 6.86243C10.0344 6.84368 10.0234 6.81556 10.025 6.78743C10.0828 5.84681 9.80156 4.78587 9.18594 3.63118C8.67656 2.67181 7.96875 1.92337 7.08437 1.4015L6.43906 1.02181C6.35469 0.971808 6.24688 1.03743 6.25156 1.13587L6.28594 1.88587C6.30937 2.39837 6.25 2.8515 6.10938 3.22806C5.9375 3.689 5.69062 4.11712 5.375 4.5015C5.15535 4.76863 4.90639 5.01024 4.63281 5.22181C3.97391 5.72832 3.43815 6.37733 3.06562 7.12025C2.69402 7.86964 2.50045 8.69471 2.5 9.53118C2.5 10.2687 2.64531 10.9827 2.93281 11.6562C3.21042 12.3046 3.61103 12.893 4.1125 13.389C4.61875 13.889 5.20625 14.2827 5.86094 14.5562C6.53906 14.8406 7.25781 14.9843 8 14.9843C8.74219 14.9843 9.46094 14.8406 10.1391 14.5577C10.7921 14.2859 11.386 13.8895 11.8875 13.3906C12.3938 12.8906 12.7906 12.3062 13.0672 11.6577C13.3543 10.9861 13.5015 10.2631 13.5 9.53274C13.5 8.77024 13.3438 8.02962 13.0328 7.33118Z"
                  fill="#EF4444"
                />
              </svg>
              <FHHouseTypeTextPopular>Popular</FHHouseTypeTextPopular>
            </FHHouseTypePopular>
          </FHHouseImage>
          <FHHouseInfo>
            <FHHouseName>Cosmo&apos;s House</FHHouseName>
            <FHHousePrice>$ 22.000.000</FHHousePrice>
          </FHHouseInfo>
          <FHHouseOwner>
            <FHHouseOwnerAvatar>
              <FHHouseOwnerAvatarImage src="../../images/avatar/z5107971365229_2a8374ca093303cfccccd379385934d1.jpg" />
            </FHHouseOwnerAvatar>
            <FHHouseOwnerInfo>
              <FHHouseOwnerName>Jenny Wilson</FHHouseOwnerName>
              <FHHouseOwnerAddress>
                Preston Rd. Inglewood, Maine 98380
              </FHHouseOwnerAddress>
            </FHHouseOwnerInfo>
          </FHHouseOwner>
        </FHHouse>
      </FHHouses>
    </FeatureHouse>
  );
}

// FeaturedHouse
const FeatureHouse = styled.div`
  position: relative;
  height: 860px;
  flex-shrink: 0;
  background: #fff;
  margin-bottom: 120px;
  z-index: -1; /* Move the FeatureHouse content to the back */
  padding: 0 0 0 40px;
  overflow: hidden;
`;

const FHNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 120px;
  margin-right: 120px;
`;

const FHTitle = styled.div`
  width: 293px;
  height: 70px;
  flex-shrink: 0;
`;
const FHTitleRemind = styled.div`
  display: flex;
  align-items: center;
  width: 101%;
  height: 18px;
  flex-shrink: 0;
  margin-left: -40px;
  color: var(--Yellow-500, #f59e0b);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FHTitleRemindSpace = styled.div`
  width: 32px;
  height: 1px;
  flex-shrink: 0;
  margin-right: 8px;
  background: var(--Yellow-500, #f59e0b);
`;

const FHTitleText = styled.div`
  color: var(--MRT-App-Headline, #1b1c57);
  font-family: Lexend;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-right: 25px;
`;
const FHCategories = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 32px;
`;
const FHCategory = styled.div`
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  display: flex;
  padding: 12px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 32px;
  border: 1px solid var(--Neutral-300, #e0e3eb);
  &:first-child {
    background: var(--Green-100, #d1fae5);
    color: var(--Green-500, #10b981);
  }
`;
const FHArrow = styled.div`
  display: flex;
  width: 136px;
  height: 52px;
  flex-shrink: 0;
`;
const FHArrowButton = styled.button`
  display: inline-flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  border: none;
  border-radius: 32px;
  background: var(--Green-500, #10b981);
  &:first-child {
    background: var(--Neutral-300, #e0e3eb);
  }
  &:nth-child(2) {
    margin-left: 16px;
  }
`;
const FHHouses = styled.div`
  margin-left: 120px;
  display: inline-flex;
  align-items: flex-start;
  gap: 60px;
  z-index: 2;
`;
const FHHouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
const FHHouseImage = styled.div`
  position: relative;
  width: 442px;
  height: 496px;
  flex-shrink: 0;
  border-radius: 24px;
  background: lightgray 50% / cover no-repeat;
`;
const FHHouseImageImg = styled.img`
  position: relative;
  width: 442px;
  height: 496px;
  flex-shrink: 0;
  border-radius: 24px;
`;
const FHHouseTypePopular = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 32px;
  background: var(--Red-100, #fee2e2);
`;
const FHHouseTypeNewHouse = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 32px;
  background: var(--Blue-100, #dbeafe);
`;
const FHHouseTypeBestDeals = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: inline-flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 32px;
  background: var(--Green-100, #d1fae5);
`;
const FHHouseTypeTextPopular = styled.div`
  color: var(--Red-500, #ef4444);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FHHouseTypeTextNewHouse = styled.div`
  color: var(--Blue-700, #1d4ed8);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FHHouseTypeTextBestDeals = styled.div`
  color: var(--Green-700, #047857);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
const FHHouseInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
const FHHouseName = styled.div`
  align-self: stretch;
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;
const FHHousePrice = styled.div`
  align-self: stretch;
  color: var(--Neutral-700, #3c4563);
  font-family: Lexend;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`;
const FHHouseOwner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const FHHouseOwnerAvatar = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
`;
const FHHouseOwnerAvatarImage = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
`;
const FHHouseOwnerInfo = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  justify-content: space-between;
`;
const FHHouseOwnerName = styled.div`
  align-self: stretch;
  color: var(--Neutral-900, #0e1735);
  font-family: Lexend;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;
const FHHouseOwnerAddress = styled.div`
  align-self: stretch;
  color: var(--Neutral-500, #888b97);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
