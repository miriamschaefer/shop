const ENDPOINT = 'https://fakestoreapi.com/products/';

export const getProductsFromApi = () => {
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => data);
};
