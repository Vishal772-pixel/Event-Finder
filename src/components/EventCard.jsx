import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const EventTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 0;
  color: #4a0e4e;
`

const EventInfo = styled.p`
  margin: 0.5rem 0;
  color: #666;
`

function EventCard({ event }) {
  return (
    <Card>
      <EventTitle>{event.name}</EventTitle>
      <EventInfo>{event.date}</EventInfo>
      <EventInfo>{event.location}</EventInfo>
      <EventInfo>{event.description}</EventInfo>
    </Card>
  )
}

export default EventCard

