import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import NextLink from "next/link";
import { Lexend } from "@next/font/google";

export default function Footer() {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  height: 180px;
  flex-shrink: 0;
`;
