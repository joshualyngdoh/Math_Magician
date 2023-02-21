import calculate from '../../logic/calculate';

describe('testing for calculate funtion', () => {
  const num = {
    total: null,
    next: null,
    operation: null,
  };
  test('for multiplication', () => {
    let result = calculate(num, '10');
    result = calculate(result, 'x');
    result = calculate(result, '8');
    result = calculate(result, '=');
    expect(result.total).toBe('80');
  });

  test('for addition', () => {
    let result = calculate(num, '10');
    result = calculate(result, '+');
    result = calculate(result, '8');
    result = calculate(result, '=');
    expect(result.total).toBe('18');
  });

  test('for subtraction', () => {
    let result = calculate(num, '24');
    result = calculate(result, '-');
    result = calculate(result, '6');
    result = calculate(result, '=');
    expect(result.total).toBe('18');
  });

  test('for division', () => {
    let result = calculate(num, '8');
    result = calculate(result, '÷');
    result = calculate(result, '2');
    result = calculate(result, '=');
    expect(result.total).toBe('4');
  });
});
