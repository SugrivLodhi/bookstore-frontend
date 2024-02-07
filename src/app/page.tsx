"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

const Container = styled.main`
  height: calc(100vh - 8rem) ;
  
`

export default function Home() {
  return (
    <Container>
      Book store
    </Container>
  );
}
