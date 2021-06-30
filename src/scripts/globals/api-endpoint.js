import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list?api_key=${CONFIG.KEY}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}?api_key=${CONFIG.KEY}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}?api_key=${CONFIG.KEY}`,
  INSERT_REVIEW: `${CONFIG.BASE_URL}review?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
