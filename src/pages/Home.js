import React from 'react';
import Carousel from '../components/Carousel';
import FeaturedTrip from '../components/FeaturedTrip';
import FavouriteTrip from '../components/FavouriteTrip';
import Services from '../components/Services';

function Home() {

  return (
    <div>
      <Carousel />
      <FeaturedTrip />
      <FavouriteTrip />
      <Services />
    </div>
  )
}

export default Home;
