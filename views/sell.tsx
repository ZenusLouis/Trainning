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
        <ImageContainer></ImageContainer>
        <Information>
          <MainContents>
            <FeaturedHouse>
              <Group10>
                <Rectangle14></Rectangle14>Ready to Sell!
              </Group10>
              <Heading>Let’s tour and see our house!</Heading>
              <Paragraph></Paragraph>
            </FeaturedHouse>
          </MainContents>
        </Information>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 0 120px;
  display: flex;
  padding: 0;
  width: calc(100% - 240px);
  height: 720px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
`;

const ImageContainer = styled.div``;

const Information = styled.div``;

const MainContents = styled.div`
    
`;

const FeaturedHouse = styled.div`
  padding: 0 0 0 40px;
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
`;

const Paragraph = styled.h1`
  color: var(--MRT-App-Neutral-01, #626687);
  font-family: Lexend;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  width: 110%;
`;
const Rectangle14 = styled.div`
  width: 32px;
  height: 1px;
  flex-shrink: 0;
  background: var(--Yellow-500, #f59e0b);
`;
const Group10 = styled.h1`
  color: var(--Yellow-500, #f59e0b);
  font-family: Lexend;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
`;
