import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Show.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Show = ({ id }) => {
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchShowData = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShowData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching show data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShowData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.card}>
      <Image
        src={showData.image.original}
        width={250}
        height={250}
        alt={showData.name}
      />
      <h3>{showData.name}</h3>
      <p>Genres: {showData.genres.join(', ')}</p>
      <p>Language: {showData.language}</p>
      <p>Rating: {showData.rating.average}</p>
      <Link href={`/show/${id}`}>
        <a>Show Details</a>
      </Link>
    </div>
  );
};

export default Show;
