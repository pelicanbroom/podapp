import React from "react";
import usePostPodcastService from "./usePostPodcastService";

export interface Props {
  searchTerm: string;
}

const PodcastList: React.FC<Props> = ({ searchTerm }) => {
  const service = usePostPodcastService(searchTerm);

  return (
    <div>
      {service.status === "init" && <div>{service.default}</div>}
      {service.status === "loading" && <div>Loading...</div>}
      {service.status === "loaded" &&
        service.payload.results.map(podcast => (
          <div key={podcast.feedUrl}>{podcast.artistName}</div>
        ))}
      {service.status === "error" && <div>{service.error}</div>}
    </div>
  );
};

export default PodcastList;
