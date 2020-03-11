import React from 'react'
import Menu from '../components/Menu'
import Categories from '../components/Categories'
import LatestNews from '../components/LatestNews'

function LandingScreen() {

  return (
    <div className="landingscreen m-2">
      <Menu />
      <Categories />
      <LatestNews />
    </div>
  );
}

export default LandingScreen