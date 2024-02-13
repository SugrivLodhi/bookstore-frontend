"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Logo  from '../../public/book-logo.jpg'
import { CgProfile } from "react-icons/cg";
import LoginModal from './Login'
const Wrapper = styled.section`
   padding: 1rem 2rem;
   display:flex;
   justify-content: space-between;
   align-items: center;
   max-height: 4rem;
   background: #d2cdcdea;
   position: sticky;
   top:0;
   left:0;
   z-index: 2;

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
  const [islogin,setlogin]= useState(false)
  return (
    <>
    <Wrapper>
     <Image src={Logo} width={30} height={30} alt='book_logo' /> 
     <Input type='search' placeholder='Search book' />
     <CgProfile onClick={()=>setlogin(true)}  />
    </Wrapper>
    {islogin && (
      <LoginModal onClose={()=>setlogin(false)} />
    )} 
    </>
  )
}

export default Header