import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Review from '../../components/review/Review'
import Trip from '../../components/trip/Trip'

const Home = () => {
  return (
    <>
      <Header />
      <Trip />
      <Review />
      {/* <Footer /> */}
    </>
  )
}

export default Home