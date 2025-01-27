import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background-color: #4a0e4e;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`

function Header() {
  return (
    <HeaderContainer>
      <Title>Event Finder</Title>
    </HeaderContainer>
  )
}

export default Header

