const getRandomInteger = (min, max) => Math.round((max - min) * Math.random() + min);
const getRandomItem = (items) => items[getRandomInteger(0, items.length - 1)];
const getRandomMessage = (messages) => {
  const numberOfMessages = getRandomInteger(1, 2);
  const messageArray = [];

  Array(numberOfMessages)
    .fill()
    .forEach(() => {
      messageArray.push(getRandomItem(messages));
    });

  return messageArray.join(' ');
};

export {getRandomInteger, getRandomItem, getRandomMessage};
