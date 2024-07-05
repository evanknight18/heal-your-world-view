import React from 'react';

const PodcastList = ({ podcasts }) => {
  return (
    <div className="container mx-auto my-8">
      <ul className="space-y-4">
        {podcasts.map(podcast => (
          <li key={podcast._id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold">{podcast.title}</h3>
            <p className="text-gray-700">{podcast.description}</p>
            <audio controls className="mt-2 w-full">
              <source src={podcast.audioFile} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastList;
