const { calculadora } = require('./calculadora');

test('soma de 2 numeros', () => {
  expect(calculadora.soma(2, 2)).toBe(4);
});

test('subtracao de 2 numeros', () => {
expect(calculadora.subtracao(3, 1)).toBe(2);
});

test('multiplicacao de 2 numeros', () => {
  expect(calculadora.multiplicacao(3, 2)).toBe(6);
  });

  test('divisão de 2 numeros', () => {
    expect(calculadora.divisao(6, 2)).toBe(3);
    });