import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PodcastList from '../components/PodcastList';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await axios.get('/api/podcasts');
        setPodcasts(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Podcasts</h1>
      {loading ? <p>Loading...</p> : <PodcastList podcasts={podcasts} />}
    </div>
  );
};

export default Podcasts;
