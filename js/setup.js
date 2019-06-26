'use strict';

var setup = document.querySelector('.setup');
var WIZARDS_LENGTH = 4;
var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupInput = setup.querySelector('.setup-user-name');
var wizards = [];
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var formInputCoat = setup.querySelector('input[name="coat-color"]');
var formInputEyes = setup.querySelector('input[name="eyes-color"]');
var formInputFireball = setup.querySelector('input[name="fireball-color"]');
var fireballColor = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];
var fragment = document.createDocumentFragment();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createWizards() {
  for (var i = 0; i < WIZARDS_LENGTH; i++) {
    wizards[i] = {
      name: names[getRndInteger(0, names.length)] + ' ' + surnames[getRndInteger(0, surnames.length)],
      coatColor: coatColor[getRndInteger(0, coatColor.length)],
      eyesColor: eyesColor[getRndInteger(0, eyesColor.length)]
    };
  }

  return wizards;
};

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  checkInputFocus();
};

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

function checkInputFocus() {
  setupInput.addEventListener('focusin', function (evt) {
    document.removeEventListener('keydown', onPopupEscPress);
  }, true);

  setupInput.addEventListener('focusout', function (evt) {
    document.addEventListener('keydown', onPopupEscPress);
  }, true);
};

createWizards();

for (var i = 0; i < WIZARDS_LENGTH; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var i = getRndInteger(0, coatColor.length);
  wizardCoat.setAttribute('style', 'fill:' + coatColor[i]);
  formInputCoat.value = coatColor[i];
});

wizardEyes.addEventListener('click', function () {
  var i = getRndInteger(0, eyesColor.length);
  wizardEyes.setAttribute('style', 'fill:' + eyesColor[i]);
  formInputEyes.value = eyesColor[i];

});

wizardFireball.addEventListener('click', function () {
  var i = getRndInteger(0, fireballColor.length);
  wizardFireball.setAttribute('style', 'background:' + fireballColor[i]);
  formInputFireball.value = fireballColor[i];
});

