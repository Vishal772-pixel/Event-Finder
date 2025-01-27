import React from "react"
import styled from "styled-components"
import SearchForm from "../components/SearchForm"
import EventList from "../components/EventList"
import { fetchEvents } from "../api/mockApi"

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  color: #4a0e4e;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

function EventsPage() {
  const [events, setEvents] = React.useState([])

  const handleSearch = async (location, interest) => {
    const fetchedEvents = await fetchEvents(location, interest)
    setEvents(fetchedEvents)
  }

  return (
    <EventsContainer>
      <PageTitle>Find Events</PageTitle>
      <SearchForm onSearch={handleSearch} />
      <EventList events={events} />
    </EventsContainer>
  )
}

export default EventsPage

