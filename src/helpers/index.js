import axios from 'axios';
import { YOUTUBE_ROOT_API } from '../constants' ;

export const youtubeAPI = (options, cb) => {
  if (!options || !options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  const params = {
    part: 'snippet',
    key: options.key,
    q: options.q,
    type: 'video'
  };

  return axios.get(YOUTUBE_ROOT_API, { params })
    .then((response) => {
      if (cb && typeof cb === 'function') cb(response.data.items);
    })
    .catch((error) => console.error(error));
}
