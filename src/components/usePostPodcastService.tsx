import { useEffect, useState } from 'react';
import { Service } from '../models/Service';
import { Podcast } from '../models/Podcast';

export interface Podcasts {
  results: Podcast[];
}

const usePostPodcastService = (searchTerm: string): Service<Podcasts> => {
  const [result, setResult] = useState<Service<Podcasts>>({
    status: 'loading'
  });

  useEffect(() => {
    if (searchTerm) {
      setResult({ status: 'loading' });
      setTimeout(() => {
        fetch(
          'https://itunes.apple.com/search?term=' + searchTerm + '&media=podcast'
        )
          .then((response) => response.json())
          .then((response) => setResult({ status: 'loaded', payload: response }))
          .catch((error) => 
            console.log(error)
            /* setResult({ status: 'error', error }) */
            );
      }, 500);

     
    } else {
      setResult({
        status: 'init',
        default: 'Type something in the search bar'
      });
    }
  }, [searchTerm]);

  return result;
};

export default usePostPodcastService;
