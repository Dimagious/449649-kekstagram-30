const SCALE_STEP = 0.25;
const SCALE_MAX_VALUE = 1;
const SCALE_MIN_VALUE = 0.25;

const defaultImg = document.querySelector('.img-upload__preview img');
const scaleValueInput = document.querySelector('.scale__control--value');

let scaleValue = 1;

const updateImageScale = (scaleFactor = 1) => {
  scaleValue += SCALE_STEP * scaleFactor;
  if (scaleValue < SCALE_MIN_VALUE) {
    scaleValue = SCALE_MIN_VALUE;
  } else if (scaleValue > SCALE_MAX_VALUE) {
    scaleValue = SCALE_MAX_VALUE;
  }

  scaleValueInput.value = `${scaleValue * 100}%`;
  defaultImg.style.transform = `scale(${scaleValue})`;
};

const onMinusButtonClick = () => {
  updateImageScale(-1);
};

const onPlusButtonClick = () => {
  updateImageScale();
};

export {onMinusButtonClick, onPlusButtonClick};
