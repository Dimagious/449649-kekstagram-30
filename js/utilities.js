const getRandomInteger = (min, max) => Math.round((max - min) * Math.random() + min);
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];

export {getRandomInteger, getRandomItem};
