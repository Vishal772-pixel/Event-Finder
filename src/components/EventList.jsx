import React from "react"
import styled from "styled-components"
import EventCard from "./EventCard"

const EventListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`

function EventList({ events }) {
  return (
    <EventListContainer>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </EventListContainer>
  )
}

export default EventList

