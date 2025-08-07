const test = require('node:test');
const assert = require('node:assert');
const { calculateAchievements } = require('./api');

test('calculateAchievements returns correct messages', () => {
  assert.deepStrictEqual(
    calculateAchievements(70, 70),
    ['Цель достигнута! Продолжай в том же духе.']
  );
  assert.deepStrictEqual(
    calculateAchievements(73, 70),
    ['Почти у цели! Осталось меньше 5 кг.']
  );
  assert.deepStrictEqual(
    calculateAchievements(80, 70),
    ['Отличное начало! Держи курс на здоровый рацион.']
  );
});
