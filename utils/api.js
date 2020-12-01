
var dev = 'test'; //local, test, produccion

var urlBase = '';
if (dev === 'produccion') {
  urlBase = 'https://2ymyjlo1vf.execute-api.us-east-1.amazonaws.com/dev';
} else if (dev === 'test') {
  urlBase = 'https://petgram-platzi.danyel117.vercel.app';
} else if (dev === 'local') {
  urlBase = 'http://localhost:3000/api';
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
  let url = urlBase + '/auth/';
  const headers = { Accept: 'application/json' };
  return makeJSONPost(url, data, { headers });
};

export const getCategorias = () => {
  let url = urlBase + '/categories';
  const headers = '';
  return makeGet(url, { headers });
};

export const getUser = () => {
  const url = urlBase + '/user/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};

export const toggleLike = (data) => {
  let url = urlBase + '/likes/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeJSONPost(url, data, { headers });
};

export const getPosts = () => {
  const url = urlBase + '/posts/';
  const token = JSON.parse(localStorage.getItem('token'));
  const headers = getHeaders(token);
  return makeGet(url, { headers });
};