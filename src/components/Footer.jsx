import React from "react"
import styled from "styled-components"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterContainer = styled.footer`
  background-color: #4a0e4e;
  color: white;
  padding: 2rem;
`

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const FooterSection = styled.div`
  margin-bottom: 1rem;
  min-width: 200px;
`

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialIcon = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ffffff33;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>EventFinder</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Discover</FooterTitle>
          <FooterLink href="#">Events</FooterLink>
          <FooterLink href="#">Trending</FooterLink>
          <FooterLink href="#">Discounts</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <Facebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <Instagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <Linkedin />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; {new Date().getFullYear()} EventFinder. All rights reserved.</Copyright>
    </FooterContainer>
  )
}

export default Footer

