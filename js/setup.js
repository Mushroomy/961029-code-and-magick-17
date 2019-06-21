'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
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

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var wizards = [];
var createWizards = function () {
  for (var i = 0; i < WIZARDS_LENGTH; i++) {
    wizards[i] = {
      name: names[getRndInteger(0,names.length)] + ' ' + surnames[getRndInteger(0,surnames.length)],
      coatColor: coatColor[getRndInteger(0,coatColor.length)],
      eyesColor: eyesColor[getRndInteger(0,eyesColor.length)]
    };
  }

  return wizards;
};

createWizards();

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = document.querySelector('.setup-similar-list');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_LENGTH; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setup.querySelector('.setup-similar').classList.remove('hidden');