'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // black;
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150; // px;
  var step = histogramHeight / (+max);

  ctx.fillText('Список результатов: ', 120, 60);

  var barWidth = 40;
  var indent = 90;
  var lineHeight = 15;
  var initialX = 150;
  var initialY = 250;

  for (i = 0; i < times.length; i++) {
    if (names[i] + '' === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.3) + 0.3) + ')';
    }
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - (times[i] * step) - lineHeight);
  }
};
