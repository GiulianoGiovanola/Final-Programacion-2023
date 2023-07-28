import React from 'react';
import Search from '../components/Search/Search';
import FeaturedShows from '../components/FeaturedShows/FeaturedShows';
import Results from '../components/Results/Results';

const HomeContainer = () => {
  return (
    <>
      <Search />
      <FeaturedShows />
    </>
  );
};

export default HomeContainer;
