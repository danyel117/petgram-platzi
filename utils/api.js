const makeGet = (url, options = {}) => {
  const urlObj = new URL(url),
    params = options['params'] || {},
    headers = options['headers'] || {};

  Object.keys(params).forEach((key) => urlObj.searchParams.append(key, params[key]));
  return fetch(urlObj, { headers }).then((res) => res.json());
};

export const getCategorias = () => {
  let url = 'https://petgram-server-24iykciv5.now.sh/categories';
  const headers = '';
  return makeGet(url, { headers });
};
