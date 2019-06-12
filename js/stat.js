'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var FONT_GAP = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLOR_BLACK = '#000';
var COLOR_WHITE = '#fff';
var FONT_STYLE = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = COLOR_BLACK;
  ctx.font = FONT_STYLE;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 210, 30);
  ctx.fillText('Список результатов:', 210, 48);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);
  ctx.fillStyle = COLOR_BLACK;
  var maxTime = getMaxElement(times);

  function randomInteger(min, max) {
    return Math.random() * (max - min);
  }

  for (var i = 0; i < names.length; i++) {
    var roundTimes = Math.round(times[i]);
    var roundHeight = Math.round((BAR_HEIGHT * roundTimes) / maxTime);
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(roundTimes, CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y - FONT_GAP - FONT_GAP - roundHeight);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomInteger(0.0, 1.0) + ')';
    }
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y - FONT_GAP, BAR_WIDTH, -(roundHeight));
  }
};


