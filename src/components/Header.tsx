"use client"
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Logo  from '../../public/book-logo.jpg'
import { CgProfile } from "react-icons/cg";
const Wrapper = styled.section`
   padding: 1rem 2rem;
   display:flex;
   justify-content: space-between;
   align-items: center;
   max-height: 4rem;
   background: #d2cdcdea
`
const Input = styled.input`
  padding: 0.7rem 1rem;
  margin: 0.5rem;
  color: "#5b3844";
  background: #f5f2f2;
  border: none;
  width: 60vw;
  border-radius: 3px;
`
const Header = () => {
  return (
    <Wrapper>
     <Image src={Logo} width={30} height={30} alt='book_logo' /> 
     <Input type='search' placeholder='Search book' />
     <CgProfile />
    </Wrapper>
  )
}

export default Header