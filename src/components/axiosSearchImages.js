import axios from 'axios';

export function axiosSearchImages(name, page) {
  return axios.get(
    `https://pixabay.com/api/?key=31270894-f030383025237e7d53b6441a5&q=${name}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
  );
}
