import React from "react"
import styled from "styled-components"

const DiscountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`

const DiscountItem = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 0;
  color: #4a0e4e;
`

const ItemInfo = styled.p`
  margin: 0.5rem 0;
  color: #666;
`

const DiscountBadge = styled.span`
  background-color: #ff6b6b;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.9rem;
`

function DiscountSection({ discounts }) {
  return (
    <DiscountContainer>
      {discounts.map((discount) => (
        <DiscountItem key={discount.id}>
          <ItemTitle>{discount.name}</ItemTitle>
          <ItemInfo>{discount.type}</ItemInfo>
          <ItemInfo>{discount.location}</ItemInfo>
          <ItemInfo>
            <DiscountBadge>{discount.discount}</DiscountBadge> off
          </ItemInfo>
        </DiscountItem>
      ))}
    </DiscountContainer>
  )
}

export default DiscountSection

