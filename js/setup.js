

var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']
var FIREBAL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
var gamers = []

//Генерация случайного числа
var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Генерация объектов в массив
var generateGamers = function(name, surname, coat, eyes) {
	for(i = 0; i < 4; i++) {
	gamers[i] = {
		names: name[random(0, name.length - 1)] + ' ' + surname[random(0, surname.length - 1)],
		coatColor: coat[random(0, coat.length - 1)],
		eyesColor: eyes[random(0, eyes.length - 1)]
	}
}
	return gamers
}

//Рендеринг волшебников

generateGamers(NAMES, SURNAME, COAT_COLOR, EYES_COLOR);

var renderWizard = function(wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);
	wizardElement.querySelector('.setup-similar-label').textContent = wizard.names;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardElement
}

var fragment = document.createDocumentFragment();
for(i = 0; i < gamers.length; i++) {
  	fragment.appendChild(renderWizard(gamers[i]));
}

setupSimilarList.appendChild(fragment)

document.querySelector('.setup-similar').classList.remove('hidden');

//События
var open = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var close = setup.querySelector('.setup-close');
var setupOpenKey = document.querySelector('.setup-open-icon');
var userName = setup.querySelector('.setup-user-name');




userName.onfocus = function() {
	this.focused = true;
}

userName.onblur = function() {
	this.focused = false;
}

//Функции открытия и закрытия окна setup

var closeSetup = function() {
	setup.classList.add('hidden');
}

var openSetup = function() {
	setup.classList.remove('hidden')
}


open.addEventListener('click', function(){
	openSetup();
})

setupOpenKey.addEventListener('keydown', function(evt){
	if (evt.keyCode === 13) {
		openSetup();	
	}
})

close.addEventListener('click', function(){
	closeSetup();
})

document.addEventListener('keydown', function(evt) {
	if (!userName.focused && evt.keyCode === 27) {
		closeSetup();
	}
})

close.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 13) {
		closeSetup();
	}
})

var setupWizard = setup.querySelector('.setup-wizard');

var inputCoat = setup.querySelector('input[name=coat-color]');
setupWizard.querySelector('.wizard-coat').addEventListener('click', function() {
	this.style.fill = COAT_COLOR[random(0, COAT_COLOR.length - 1)]
	inputCoat.value = this.style.fill;
	
})

var inputEyes = setup.querySelector('input[name=eyes-color]');
setupWizard.querySelector('.wizard-eyes').addEventListener('click', function() {
	this.style.fill = EYES_COLOR[random(0, EYES_COLOR.length - 1)]
	inputEyes.value = this.style.fill;
	
})

var fireballColor = setup.querySelector('.setup-fireball-wrap');
var inputFireball = setup.querySelector('input[name = fireball-color]');

fireballColor.addEventListener('click', function() {
	this.style.background = FIREBAL_COLOR[random(0, FIREBAL_COLOR.length - 1)]
	inputFireball.value = this.style.background;	
	
})


