'use strict';

// объявление констант
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// объявление фукнций
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getName() {
  return FIRST_NAMES[getRandomInt(0, FIRST_NAMES.length)] + ' ' + SECOND_NAMES[getRandomInt(0, SECOND_NAMES.length)];
}

function getColorCoat() {
  return COAT_COLORS[getRandomInt(0, COAT_COLORS.length)];
}

function getColorEyes() {
  return COAT_COLORS[getRandomInt(0, EYES_COLOR.length)];
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getName();
  wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill:' + getColorCoat() + ';');
  wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill:' + getColorEyes() + ';');

  return wizardElement;
}

// работа с DOM
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

document.querySelector('.setup').classList.remove('hidden');

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
