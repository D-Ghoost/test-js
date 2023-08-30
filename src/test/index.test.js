var module = require('../index.js');

test('validate even number', () => {
     expect(module.isEven(4)).toBe(true);
     expect(module.isEven(15)).toBe(false);
     expect(module.isEven(71)).toBe(false);
     expect(module.isEven(84)).toBe(true);
})

test('create fibonacci', () => {
     expect(module.fibonacci(20)).toBe([1,1,2,3,5,8,13]);
     expect(module.fibonacci(60)).toBe([1,1,2,3,5,8,13,21,34,55]);
})

test('order list of numbers', () => {
     expect(module.orderNumber([1,4,5,3,10,2,6,9,8,7])).toBe([1,2,3,4,5,6,7,8,9,10]);
     expect(module.orderNumber([1,4,5,3,10,2,6,9,8,7,11,13,14,10,12])).toBe([1,2,3,4,5,6,7,8,9,10,10,11,12,13,14]);
})
