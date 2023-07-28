import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import HomeContainer from '../containers/HomeContainer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Examen Prog 2023</title>
        <meta name="description" content="Welcome to the machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={`main`}>
        <Hero />
        <HomeContainer />
      </main>

      <footer className={`footer`}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by UMAI
        </a>
      </footer>
    </div>
  );
}

/*
import React, { useState } from 'react';
import { useAppContext } from '../../contexts/AppContext';

const OtroComponente = () => {
  const [query, setQuery] = useState('');
  const { shows, loading, error, handleGetShows } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGetShows(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Buscar Shows</button>
      </form>
      {loading ? <p>Cargando...</p> : null}
      {error ? <p>{error}</p> : null}
      {shows.map((show) => (
        <div key={show.id}>
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default OtroComponente;
*/
