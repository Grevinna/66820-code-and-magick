'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60)

  var max = -1;

  for(var i = 0 ; i < times.length; i++ ) {
    var time = times[i];
    if (time > max) {
      max = time;
    }


  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * (time-min);

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + height;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1');
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0,', ((Math.random()*5)*5).toFixed(0);
    }

    ctx.fillRect(histoX + columnIndent * i, 100, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name + ':' + time.toFixed(0), histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Катя', 'Лена', 'Вы'], [22.22, 33.33, 44.44]);
