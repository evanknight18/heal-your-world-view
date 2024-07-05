import React from 'react';

const PodcastPlayer = ({ title, audioFile }) => {
    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Now Playing: {title}</h3>
            <audio controls className="w-full">
                <source src={audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default PodcastPlayer;
