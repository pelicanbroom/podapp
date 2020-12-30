import axios from 'axios';
import { Podcast } from '../models/Podcast';

const FAVORITE_API_BASE_URL = 'http://localhost:8080/podcasts';

class FavoriteService {
    
    getPodcasts() {
        return axios.get(FAVORITE_API_BASE_URL);
    }

    createPodcast(podcast: Podcast) {
        return axios.post(FAVORITE_API_BASE_URL, podcast);
    }
}

export default new FavoriteService()
