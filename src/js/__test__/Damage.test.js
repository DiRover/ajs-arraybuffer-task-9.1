import Damage from '../Damage';

test('check Magician attack 1', () => {
  const Magician = new Damage(false);
  const expected = 100;
  Magician.attackValue = 1;
  const received = Magician.attackValue;
  expect(received).toBe(expected);
});

test('check Magician attack 2', () => {
  const Magician = new Damage(false);
  const expected = 90;
  Magician.attackValue = 2;
  const received = Magician.attackValue;
  expect(received).toBe(expected);
});

test('check Daemon attack 1', () => {
  const Daemon = new Damage(true);
  const expected = 100;
  Daemon.attackValue = 1;
  const received = Daemon.attackValue;
  expect(received).toBe(expected);
});

test('check Daemon attack 2', () => {
  const Daemon = new Damage(true);
  const expected = 85;
  Daemon.attackValue = 2;
  const received = Daemon.attackValue;
  expect(received).toBe(expected);
});
