var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;

var BAR_X = 130;
var BAR_Y = 120;

var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var GAP = 90;

var renderCloud = function (ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxTime = function (arr) {
	var maxTime = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxTime) {
			maxTime = arr[i];
		}
	}
	return maxTime;
}


window.renderStatistics = function (ctx, names, times) {
	renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0,0,0,0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

	ctx.fillStyle = 'black';
	ctx.fillText('Ура вы победили', 110, 40);
	ctx.fillText('Список результатов:', 110, 60);

	var quality = getMaxTime(times);


	for (var i = 0; i < names.length; i++) {
		
			ctx.fillStyle = (names[i] == 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(2,3,226)';
			ctx.fillText(names[i], BAR_X + GAP * i, BAR_Y - 10);
			ctx.fillRect(BAR_X + GAP * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / quality);	
		
		
	}

	
}