import orderByProps from '../index';

test('sort prop object', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const srt = ['defence', 'level', 'name'];

  const result = [{ key: 'defence', value: 40 }, { key: 'level', value: 2 }, { key: 'name', value: 'мечник' }, { key: 'attack', value: 80 }, { key: 'health', value: 10 }];

  expect(orderByProps(obj, srt)).toEqual(result);
});
