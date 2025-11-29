import axios from 'axios';

const API_KEY = '53375249-7d769a3dfab07f88475703207';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15; // кількість карток на один запит

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: PER_PAGE,
    page,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

export { PER_PAGE };
