const isEscapeKey = (evt) => evt.key === 'Escape';

const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export {request, isEscapeKey};
