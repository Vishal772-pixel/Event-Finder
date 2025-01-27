import React from "react"
import styled from "styled-components"

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  color: #4a0e4e;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

const Content = styled.div`
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }
`

function AboutPage() {
  return (
    <AboutContainer>
      <PageTitle>About EventFinder</PageTitle>
      <Content>
        <p>
          EventFinder is your go-to platform for discovering exciting events, trending meetups, and amazing discounts in
          your area. Our mission is to connect people with experiences that matter to them, whether it's a tech
          conference, an art exhibition, or a food festival.
        </p>
        <p>
          Founded in 2023, EventFinder has quickly become a leading resource for event-goers and discount hunters alike.
          We partner with event organizers, local businesses, and community leaders to bring you the most comprehensive
          and up-to-date information on what's happening in your city and beyond.
        </p>
        <p>
          Our team is passionate about creating a user-friendly platform that makes it easy for you to find and attend
          events that match your interests. We're constantly improving our services and adding new features to enhance
          your experience.
        </p>
        <p>Thank you for choosing EventFinder. We hope you discover your next great adventure through our platform!</p>
      </Content>
    </AboutContainer>
  )
}

export default AboutPage

