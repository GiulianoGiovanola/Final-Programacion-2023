import React from 'react';
import Show from '../Show/Show';

const FeaturedShows = () => {
  const featuredShowIds = [1, 2, 3];

  return (
    <div>
      <h2>Search Results</h2>
      <div className="grid">
        {featuredShowIds.map((id) => (
          <div className="col_4" key={id}>
            <Show id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedShows;
