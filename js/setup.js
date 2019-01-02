
var setup = document.querySelector('.setup').classList.remove('hidden')
var setupSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green']
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



