import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Calendar, TrendingUpIcon as Trending, Tag, Info } from "lucide-react"

const Nav = styled.nav`
  background-color: #4a0e4e;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`

function Navbar() {
  return (
    <Nav>
      <Logo to="/">
        <Calendar size={24} />
        <span style={{ marginLeft: "0.5rem" }}>EventFinder</span>
      </Logo>
      <NavLinks>
        <NavLink to="/events">
          <Calendar size={18} />
          Events
        </NavLink>
        <NavLink to="/trending">
          <Trending size={18} />
          Trending
        </NavLink>
        <NavLink to="/discounts">
          <Tag size={18} />
          Discounts
        </NavLink>
        <NavLink to="/about">
          <Info size={18} />
          About
        </NavLink>
      </NavLinks>
    </Nav>
  )
}

export default Navbar

