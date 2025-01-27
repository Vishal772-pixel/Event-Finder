import React, { useState } from "react"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  flex-grow: 1;
`

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4a0e4e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a1b6e;
  }
`

function SearchForm({ onSearch }) {
  const [location, setLocation] = useState("")
  const [interest, setInterest] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(location, interest)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <Input
        type="text"
        placeholder="Enter interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}

export default SearchForm

