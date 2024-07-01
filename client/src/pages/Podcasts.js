import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcasts } from '../redux/actions/podcastActions';
import PodcastList from '../components/PodcastList';

const Podcasts = () => {
    const dispatch = useDispatch();
    const podcasts = useSelector(state => state.podcasts.podcasts);
    const loading = useSelector(state => state.podcasts.loading);

    useEffect(() => {
        dispatch(fetchPodcasts());
    }, [dispatch]);

    return (
        <div>
            <h1>Podcasts</h1>
            {loading ? <p>Loading...</p> : <PodcastList podcasts={podcasts} />}
        </div>
    );
};

export default Podcasts;
