const { calculadora } = require('./calculadora');

test('soma de 2 numeros', () => {
  expect(calculadora.soma(2, 2)).toBe(4);
});

test('subtracao de 2 numeros', () => {

})