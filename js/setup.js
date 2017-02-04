'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var setupUserName = document.querySelector('.setup-user-name');

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat'); // мантия
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var wizardEyes = wizard.querySelector('#wizard-eyes'); // глаза
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var setupFireballWrap = document.querySelector('.setup-fireball-wrap'); // фаербол
var setupFireball = document.querySelector('.setup-fireball');
var setupFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Получение случайного цвета из предоставленного набора.
var getRandomColorFromSet = function (set) {
  var randomElementIndex = Math.floor(Math.random() * set.length - 1);
  return set[randomElementIndex];
};


// открыть окно настройки персонажа
setupOpen.addEventListener('click', function (event) {
  event.preventDefault();
  setup.classList.toggle('invisible');
});

// закрыть окно настройки персонажа
setupClose.addEventListener('click', function (event) {
  event.preventDefault();
  setup.classList.add('invisible');
});


// элемент является обязательным для заполнения
setupUserName.required = true;

// максимальная длина имени пользователя 50 символов
setupUserName.maxlength = 50;


// изменение цвета мантии
wizard.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomColorFromSet(wizardCoatColors);
});

// изменение цвета глаз
wizard.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomColorFromSet(wizardEyesColors);
});

// изменение цвета фаерболов
setupFireballWrap.addEventListener('click', function () {
  setupFireball.style.backgroundColor = getRandomColorFromSet(setupFireballColors);
});
