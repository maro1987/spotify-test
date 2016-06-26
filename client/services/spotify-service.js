import 'whatwg-fetch';

const BASE_URL = 'https://api.spotify.com/v1/';

export function getSearchResults(searchText) {
  return (async() => {
    try {
      const response = await fetch(`${BASE_URL}search?q=artist:${searchText}&type=track&limit=10`);
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  })();
}


export function getMe(accessToken) {
  return (async() => {
    try {
      const response = await fetch(`${BASE_URL}me`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  })();
}
