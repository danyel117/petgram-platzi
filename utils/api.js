var dev = 'local'; //local, test, produccion

var urlBase = '';
if (dev === 'produccion') {
  urlBase = 'https://2ymyjlo1vf.execute-api.us-east-1.amazonaws.com/dev';
} else if (dev === 'test') {
  urlBase = 'https://petgram-platzi.danyel117.vercel.app/api';
} else if (dev === 'local') {
  urlBase = 'http://127.0.0.1:8000';
}

const getHeaders = (token) => {
  return {
    Authorization: `JWT ${token}`,
    Accept: 'application/json',
  };
};

const makePost = (url, body, options = {}) => {
  const headers = options['headers'] || {};

  return fetch(url, { body, headers, method: 'POST' }).then((res) => res.json());
};

const makeGet = (url, options = {}) => {
  const urlObj = new URL(url),
    params = options['params'] || {},
    headers = options['headers'] || {};

  Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
  return fetch(urlObj, { headers }).then((res) => res.json());
};

const makeJSONPost = (url, data, options = {}) => {
  const body = JSON.stringify(data);
  const headers = options['headers'] || {};
  headers['Content-Type'] = 'application/json';

  return makePost(url, body, { headers });
};

export const fetchToken = (data) => {
  let url = urlBase + '/token-auth/';
  const headers = { Accept: 'application/json' };
  console.log(url);
  return makeJSONPost(url, data, { headers });
};

export const refreshToken = (data) => {
  let url = urlBase + '/api-token-refresh/';
  const body = { token: data };
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getCategorias = () => {
  let url = urlBase + '/Categorias/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};

export const getUser = () => {
  const url = urlBase + '/user/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};

export const createUser = (data) => {
  let url = urlBase + '/user/';
  const headers=''
  return makeJSONPost(url, data, { headers });
};

export const toggleLike = (data) => {
  let url = urlBase + '/likes/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeJSONPost(url, data, { headers });
};

export const getPhoto = (id) => {
  let url = urlBase + `/Publicaciones/?photo=${id}`;
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};

export const getFavs = () => {
  let url = urlBase + '/Likes/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};

export const getPosts = (categoryId=null) => {
  let url=""
  if (categoryId){
  url = urlBase + `/Publicaciones/?cat=${categoryId}`;
  }
  else{

    url = urlBase + '/Publicaciones/';
  }
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};