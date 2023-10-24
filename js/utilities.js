const getRandomInteger = (min, max) => Math.round((max - min) * Math.random() + min);
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
const getRandomMessage = (messages) => {
  const numberOfMessages = getRandomInteger(1, 2);
  const messageSet = new Set();

  while (messageSet.size < numberOfMessages) {
    messageSet.add(getRandomItem(messages));
  }

  return [...messageSet].join(' ');
};

export {getRandomInteger, getRandomItem, getRandomMessage};
