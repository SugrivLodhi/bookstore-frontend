import React from 'react';
import styled from 'styled-components';

// Define types for props
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

// Styled components
const CardContainer = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 299px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  max-height: 15rem;
  object-fit: fill;
`;

const Title = styled.h3`
  margin-top: 12px;
  font-size: 18px;
  color: #333;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #666;
`;

const Price = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

// Product Listing Card Component
const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </CardContainer>
  );
};

export default ProductCard;
