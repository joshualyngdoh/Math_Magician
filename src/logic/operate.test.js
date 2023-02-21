import operate from './operate';

describe('testing for operate function', () => {
  test('addition', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  test('subtraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  test('multiplication', () => {
    const result = operate('4', '6', 'x');
    expect(result).toBe('24');
  });

  test('division', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  test('division by zero', () => {
    const result = operate('10', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('modulus', () => {
    const result = operate('5', '2', '%');
    expect(result).toBe('1');
  });

  test('unknown operation', () => {
    expect(() => operate('2', '3', 'foo')).toThrowError("Unknown operation 'foo'");
  });
});
