import React from "react"
import styled from "styled-components"
import SearchForm from "../components/SearchForm"
import EventList from "../components/EventList"
import TrendingSection from "../components/TrendingSection"
import DiscountSection from "../components/DiscountSection"
import { fetchEvents, fetchTrendingItems, fetchDiscounts } from "../api/mockApi"

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.h2`
  color: #4a0e4e;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

const HeroSection = styled.div`
  background-color: #4a0e4e;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

function HomePage() {
  const [events, setEvents] = React.useState([])
  const [trendingItems, setTrendingItems] = React.useState([])
  const [discounts, setDiscounts] = React.useState([])

  React.useEffect(() => {
    const loadInitialData = async () => {
      const trending = await fetchTrendingItems()
      setTrendingItems(trending)
      const discountItems = await fetchDiscounts()
      setDiscounts(discountItems)
    }
    loadInitialData()
  }, [])

  const handleSearch = async (location, interest) => {
    const fetchedEvents = await fetchEvents(location, interest)
    setEvents(fetchedEvents)
  }

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Discover Amazing Events Near You</HeroTitle>
        <HeroSubtitle>Find and attend events that match your interests</HeroSubtitle>
        <SearchForm onSearch={handleSearch} />
      </HeroSection>
      <EventList events={events} />
      <SectionTitle>Trending Events and Meetups</SectionTitle>
      <TrendingSection items={trendingItems.slice(0, 3)} />
      <SectionTitle>Hot Discounts</SectionTitle>
      <DiscountSection discounts={discounts.slice(0, 3)} />
    </HomeContainer>
  )
}

export default HomePage

