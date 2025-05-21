const mockEvents = [
  {
    id: 1,
    name: "Tech Meetup",
    date: "2023-06-15",
    location: "Bengluru",
    description: "A meetup for tech enthusiasts",
  },
  {
    id: 2,
    name: "Art Exhibition",
    date: "2023-06-20",
    location: "Gurugram",
    description: "Showcasing modern art pieces",
  },
  {
    id: 3,
    name: "Food Festival",
    date: "2023-06-25",
    location: "Mumbai",
    description: "Taste cuisines from around the world",
  },
  {
    id: 4,
    name: "Music Concert",
    date: "2023-07-01",
    location: "London",
    description: "Live performance by top artists",
  },
  {
    id: 5,
    name: "Startup Conference",
    date: "2023-07-10",
    location: "San Francisco",
    description: "Network with entrepreneurs and investors",
  },
]

const mockTrendingItems = [
  {
    id: 1,
    name: "Summer Music Festival",
    type: "Event",
    location: "Los Angeles",
    date: "2023-07-15",
  },
  {
    id: 2,
    name: "Startup Networking",
    type: "Meetup",
    location: "San Francisco",
    date: "2023-06-30",
  },
  {
    id: 3,
    name: "Yoga in the Park",
    type: "Event",
    location: "Central Park, New York",
    date: "Every Sunday",
  },
  {
    id: 4,
    name: "AI and Machine Learning Workshop",
    type: "Meetup",
    location: "Boston",
    date: "2023-07-05",
  },
  {
    id: 5,
    name: "International Film Festival",
    type: "Event",
    location: "Toronto",
    date: "2023-07-20",
  },
]

const mockDiscounts = [
  {
    id: 1,
    name: "Gourmet Burger Joint",
    type: "Restaurant",
    location: "Chicago",
    discount: "20%",
  },
  {
    id: 2,
    name: "Luxury Spa Experience",
    type: "Wellness",
    location: "Miami",
    discount: "30%",
  },
  {
    id: 3,
    name: "Designer Outlet",
    type: "Shopping",
    location: "Las Vegas",
    discount: "50%",
  },
  {
    id: 4,
    name: "Adventure Park",
    type: "Entertainment",
    location: "Orlando",
    discount: "25%",
  },
  {
    id: 5,
    name: "Michelin Star Restaurant",
    type: "Dining",
    location: "New York",
    discount: "15%",
  },
]

export const fetchEvents = (location, interest) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredEvents = mockEvents.filter(
        (event) =>
          event.location.toLowerCase().includes(location.toLowerCase()) ||
          event.description.toLowerCase().includes(interest.toLowerCase()),
      )
      resolve(filteredEvents)
    }, 500)
  })
}

export const fetchTrendingItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTrendingItems)
    }, 500)
  })
}

export const fetchDiscounts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDiscounts)
    }, 500)
  })
}

