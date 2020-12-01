const makeGet = (url, options = {}) => {
  const urlObj = new URL(url),
    params = options['params'] || {},
    headers = options['headers'] || {};

  Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
  return fetch(urlObj, { headers }).then((res) => res.json());
};

export const getCategorias = () => {
  let url = 'http://localhost:3000/api/categories';
  const headers = '';
  return makeGet(url, { headers });
};
