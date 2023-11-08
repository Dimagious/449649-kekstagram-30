const SCALE_STEP = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_MIN_VALUE = 25;
const DEFAULT_VALUE = 100;

const scaleDownButton = document.querySelector('.scale__control--smaller');
const display = document.querySelector('.scale__control--value');
const scaleUpButton = document.querySelector('.scale__control--bigger');

const setScale = (value) => {
  value = Math.max(value, SCALE_MIN_VALUE);
  value = Math.min(value, SCALE_MAX_VALUE);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', {bubbles: true}));
};

const getScale = () => Number.parseFloat(display.value);
const resetScale = () => setScale(DEFAULT_VALUE);
const scaleDown = () => setScale(getScale() - SCALE_STEP);
const scaleUp = () => setScale(getScale() + SCALE_STEP);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {getScale, resetScale};
