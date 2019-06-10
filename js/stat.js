'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 50;
var FONT_GAP = 20;

var barHeight = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.bezierCurveTo(100, 30, 160, 20, 230, 30);
  ctx.bezierCurveTo(290, 10, 310, 10, 400, 40);
  ctx.bezierCurveTo(460, 10, 500, 10, 525, 40);
  ctx.bezierCurveTo(535, 70, 535, 80, 515, 125);
  ctx.bezierCurveTo(535, 170, 535, 170, 515, 210);
  ctx.bezierCurveTo(535, 260, 535, 280, 480, 285);
  ctx.bezierCurveTo(450, 275, 470, 285, 430, 285);
  ctx.bezierCurveTo(330, 280, 350, 280, 310, 290);
  ctx.bezierCurveTo(250, 280, 290, 280, 200, 290);
  ctx.bezierCurveTo(170, 280, 170, 280, 120, 280);
  ctx.bezierCurveTo(100, 220, 100, 150, 120, 145);
  ctx.bezierCurveTo(110, 140, 110, 130, 120, 100);

  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.bezierCurveTo(90, 20, 150, 10, 220, 20);
  ctx.bezierCurveTo(280, 0, 300, 0, 390, 30);
  ctx.bezierCurveTo(450, 0, 490, 0, 515, 30);
  ctx.bezierCurveTo(525, 60, 525, 70, 505, 115);
  ctx.bezierCurveTo(525, 160, 525, 160, 505, 200);
  ctx.bezierCurveTo(525, 250, 525, 270, 460, 275);
  ctx.bezierCurveTo(440, 265, 460, 275, 420, 275);
  ctx.bezierCurveTo(320, 270, 340, 270, 300, 280);
  ctx.bezierCurveTo(240, 270, 280, 270, 190, 280);
  ctx.bezierCurveTo(160, 270, 160, 270, 110, 270);
  ctx.bezierCurveTo(90, 210, 90, 140, 110, 135);
  ctx.bezierCurveTo(100, 130, 100, 120, 110, 90);

  ctx.closePath();
  ctx.lineWidth = 1;
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
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

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.3)', 100);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff', 100);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  function randomInteger(min, max) {
    var rand = Math.random() * (max - min);
    return rand;
  }

  for (var i = 0; i < names.length; i++) {

    var roundTimes = Math.round(times[i]);
    var roundHeight = Math.round((barHeight * roundTimes) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillText(roundTimes, CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y - FONT_GAP - FONT_GAP - roundHeight);

    if (names[i] === 'Вы') {

      ctx.fillStyle = 'rgba(255, 0, 0, 1)';

    } else {

      ctx.fillStyle = 'rgba(0, 0, 255,' + randomInteger(0.0, 1.0) + ')';

    };
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y - FONT_GAP, BAR_WIDTH, - roundHeight);

  }

};


