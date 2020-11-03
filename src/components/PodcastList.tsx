import React from 'react';
import usePostPodcastService from './usePostPodcastService';
import { Podcast } from '../models/Podcast';

export interface Props {
  searchTerm: string;
}

const PodcastList: React.FC<Props> = ({ searchTerm }) => {
  const [items, setItems] = React.useState<Podcast[]>([]);
  const service = usePostPodcastService(searchTerm);

  const addToFavorite = (podcast: Podcast) => {
    setItems([...items, podcast]);
    localStorage.setItem('favorites', JSON.stringify(items));
  };

  return (
    <div>
      {service.status === 'init' && <div>{service.default}</div>}
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map((podcast) => (
          <div key={podcast.feedUrl}>
            {podcast.artistName} - {podcast.collectionName}{' '}
            <button type="button" onClick={() => addToFavorite(podcast)}>
              Add Podcast To Favorite
            </button>
            <ul>
              {items.map((item) => (
                <li key={item.feedUrl}>{item.artistName}</li>
              ))}
            </ul>
          </div>
        ))}
      {service.status === 'error' && <div>{service.error}</div>}
    </div>
  );
};

export default PodcastList;
