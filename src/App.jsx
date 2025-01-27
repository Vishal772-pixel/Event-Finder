import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import EventsPage from "./pages/EventsPage"
import TrendingPage from "./pages/TrendingPage"
import DiscountsPage from "./pages/DiscountsPage"
import AboutPage from "./pages/AboutPage"

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  background-color: #f8f8ff;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/discounts" element={<DiscountsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App

