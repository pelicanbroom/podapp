import { useEffect, useState } from "react";
import { Service } from "./Service";
import { Podcast } from "./Podcast";

export interface Podcasts {
  results: Podcast[];
}

const usePostPodcastService = (searchTerm: string) => {
  const [result, setResult] = useState<Service<Podcasts>>({
    status: "loading"
  });

  useEffect(() => {
    if (searchTerm) {
      setResult({ status: "loading" });

      fetch(
        "https://itunes.apple.com/search?term=" + searchTerm + "&media=podcast"
      )
        .then(response => response.json())
        .then(response => setResult({ status: "loaded", payload: response }))
        .catch(error => setResult({ status: "error", error }));
    }
  }, [searchTerm]);

  return result;
};

export default usePostPodcastService;
