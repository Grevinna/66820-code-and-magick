'use strict';

window.renderStatistics = function (ctx, names, times) {

  var histoHeight = 150;
  var histoX = 140;
  var columnIndent = 50;
  var max = -1;
  var defaultColor;

  var drawRect = function (x1, y1, x2, y2, color) {
    ctx.fillStyle = color || '#000000';
    ctx.fillRect(x1, y1, x2, y2);
  };

  var drawText = function (text, x, y, color) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = color || '#000000';
    ctx.fillText(text, x, y);
  };

  var randomColor = function () {
    return 'rgba(0, 0, ' + (Math.random() * 255).toFixed(0) + ', ' + (Math.random() * 0.5).toFixed(1) + ')';
  };

  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');

  ctx.strokeRect(100, 10, 420, 270);

  drawRect(100, 10, 420, 270, 'rgba(256, 256, 256, 1.0)');

  drawText('Ура вы победили!', 120, 40);
  drawText('Список результатов: ', 120, 60);

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = histoHeight / max;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    var baseX = histoX + columnIndent * i;
    var height = step * times[i];
    var baseY = 100 + (150 - height);

    if (name === 'Вы') {
      defaultColor = 'rgba(255, 0, 0, 1)';
    } else {
      defaultColor = randomColor();
    }

    drawRect(baseX, baseY, 40, height, defaultColor);
    drawText(name, baseX, 100 + histoHeight + 20);
    drawText(time.toFixed (0), baseX, baseY - 10);
  }
};
