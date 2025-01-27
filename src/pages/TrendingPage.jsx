import React from "react"
import styled from "styled-components"
import TrendingSection from "../components/TrendingSection"
import { fetchTrendingItems } from "../api/mockApi"

const TrendingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  color: #4a0e4e;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

function TrendingPage() {
  const [trendingItems, setTrendingItems] = React.useState([])

  React.useEffect(() => {
    const loadTrendingItems = async () => {
      const items = await fetchTrendingItems()
      setTrendingItems(items)
    }
    loadTrendingItems()
  }, [])

  return (
    <TrendingContainer>
      <PageTitle>Trending Events and Meetups</PageTitle>
      <TrendingSection items={trendingItems} />
    </TrendingContainer>
  )
}

export default TrendingPage

