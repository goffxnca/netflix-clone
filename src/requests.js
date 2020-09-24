const APIKey = "61cc89b61fe69dd43640b41d9ecf852a";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKey}`,
  fetchNetflixOriginals: `/discover/tv/?width_networks=231&api_key=${APIKey}`,
  fetchTopRated: `/movie/top_rated&language=en-US&api_key=${APIKey}`,
  fetchActionMovies: `/discover/movie?with_genres=28&api_key=${APIKey}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${APIKey}`,
  fetchHorrorMovies: `/discover/movie?with_genres=27&api_key=${APIKey}`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749&api_key=${APIKey}`,
  fetchDocumentaries: `/discover/movie?with_genres=99&api_key=${APIKey}`,
};

export default requests;
