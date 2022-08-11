import operate from './operate';

const numberOne = 2;
const numberTwo = 2;
describe('operate', () => {
  it('2 plus 2 should be equal to 4', () => {
    const operation = '+';
    const results = operate(numberOne, numberTwo, operation);
    expect(results).toEqual('4');
  });
  it('2 minus 2 should be equal to 0', () => {
    const operation = '-';
    const results = operate(numberOne, numberTwo, operation);
    expect(results).toEqual('0');
  });
  it('2 times 2 should be equal to 4', () => {
    const operation = 'x';
    const results = operate(numberOne, numberTwo, operation);
    expect(results).toEqual('4');
  });
  it('2 divided by 2 should be equal to 1', () => {
    const operation = '÷';
    const results = operate(numberOne, numberTwo, operation);
    expect(results).toEqual('1');
  });
  it('2 mod 2 should be equal to 0', () => {
    const operation = '%';
    const results = operate(numberOne, numberTwo, operation);
    expect(results).toEqual('0');
  });
  it("2 divided by 0 should be equal to 'Can't divide by 0.'", () => {
    const operation = '÷';
    const results = operate(numberOne, 0, operation);
    expect(results).toEqual('Can\'t divide by 0.');
  });
  it("2 mod 0 should be equal to 'Can't find modulo as can't divide by 0.'", () => {
    const operation = '%';
    const results = operate(numberOne, 0, operation);
    expect(results).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
});
