const ROOT_URI: string = 'https://127.0.0.1:8000';

export const API_ROUTE = {
  LOGON: {
    URI: ROOT_URI+'/api/login',
  },
  USER: {
    URI: ROOT_URI+'/api/users',
  },
  RESTAURANTS: {
    URI: ROOT_URI+'/api/restaurants',
  },
  ROOMS: {
    URI: ROOT_URI+'/api/rooms',
  },
  FAVORITES: {
    URI: ROOT_URI+'/api/favorites',
  },
  CURRENT_USER: {
    URI: ROOT_URI+'/api/currentuser',
  }
};