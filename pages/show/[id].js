import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Show from '../../components/Show/Show';
import Navbar from '../../components/Navbar/Navbar';
import ShowContainer from '../../containers/ShowContainer';

const ShowPage = () => {
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const handleGetSingleShow = async (id) => {
    try {
      const showResponse = await axios.get(
        `https://api.tvmaze.com/shows/${id}`,
      );
      setShowData(showResponse.data);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching show data:', error);
      setLoading(false);
    }
  };

  useEffect((id) => {
    handleGetSingleShow(id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Show Single</title>
        <meta name="description" content="Welcome to the machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={`main`}>
        <Show>
          <Image
            src={showData.image.original}
            width={250}
            height={250}
            alt={showData.name}
          />
          <p>Name: {showData.name}</p>
          <p>Language: {showData.language}</p>
          <p>Status: {showData.status}</p>
          <p>Ended: {showData.ended}</p>
          <p>Rating: {showData.rating.average}</p>
          <p>Summary: {showData.summary}</p>
        </Show>
      </main>

      <footer className={`footer`}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by UMAI
        </a>
      </footer>
    </div>
  );
};

export default ShowPage;