import { getRandomInteger, getRandomItem, getRandomMessage } from './utilities.js';

const USERNAMES = ['Юля', 'Дима', 'Данил', 'Максим'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Утренний кофе и вдохновение. Готов к новым достижениям!',
  'Закаты в моем любимом городе.',
  'Моменты с семьей - лучшая часть выходных.',
  'Сладкий перерыв с шоколадкой',
  'Отпуск начался! Приключения ждут.',
];

const buildCommentsData = (itemCount) =>
  new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(MESSAGES),
    name: getRandomItem(USERNAMES),
  }));

const buildPostsData = (itemCount) =>
  new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: buildCommentsData(getRandomInteger(0, 30)),
  }));

export { buildPostsData };
