import React from "react"
import styled from "styled-components"
import DiscountSection from "../components/DiscountSection"
import { fetchDiscounts } from "../api/mockApi"

const DiscountsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const PageTitle = styled.h1`
  color: #4a0e4e;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`

function DiscountsPage() {
  const [discounts, setDiscounts] = React.useState([])

  React.useEffect(() => {
    const loadDiscounts = async () => {
      const items = await fetchDiscounts()
      setDiscounts(items)
    }
    loadDiscounts()
  }, [])

  return (
    <DiscountsContainer>
      <PageTitle>Hot Discounts</PageTitle>
      <DiscountSection discounts={discounts} />
    </DiscountsContainer>
  )
}

export default DiscountsPage

