const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

export {debounce, isEscapeKey, request};
