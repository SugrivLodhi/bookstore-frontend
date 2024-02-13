"use client"
import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import { dummyProducts } from "@/constant/dummyData";
import ProductCard from "@/components/ProductCard";
const Container = styled.main`
  height: calc(100vh - 8rem) ;
  
`
const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 1rem;
  padding: 0.5rem;
`
export default function Home() {
  return (
    <Container>
     <ProductWrapper>
     {dummyProducts.map((item:any)=>(
      <ProductCard 
       key={item.d}
      image={item.image}
       title={item.title}
        description={item.description}
         price={item.price} 
      />
     ))}
     </ProductWrapper>
    </Container>
  );
}
