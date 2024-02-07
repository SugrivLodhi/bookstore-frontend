"use client"
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #b2a6a6; 
  color: #180d0d; 
  padding: 20px;
  text-align: center;
  height: 4rem;
`;
const Footer = () => {
  return (
    <FooterContainer>
    © 2024 My Website. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;