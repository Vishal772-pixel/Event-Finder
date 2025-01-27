import React from "react"
import styled from "styled-components"

const TrendingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`

const TrendingItem = styled.div`
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

function TrendingSection({ items }) {
  return (
    <TrendingContainer>
      {items.map((item) => (
        <TrendingItem key={item.id}>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemInfo>{item.type}</ItemInfo>
          <ItemInfo>{item.location}</ItemInfo>
          <ItemInfo>{item.date}</ItemInfo>
        </TrendingItem>
      ))}
    </TrendingContainer>
  )
}

export default TrendingSection

