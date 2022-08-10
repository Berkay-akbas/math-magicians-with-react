import calculate from "./calculate";

describe("calculate", () => {
  it("should return null if no arguments are passed", () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  })
  it("should return empty object if button is 0", () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const buttonName = '0';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({});
  })
  it("if total is null and button is 0 next should be 0", () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const buttonName = '0';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({ total: null, next: '0', operation: '+' });
  })
  it("If there is no operation, next should increment by button value", () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };
    const buttonName = '3';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({ next: '23', total: null });
  })
  it("If button is '.', next should update", () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const buttonName = '.';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({ total: null, next: '0.', operation: '+' });
  })
  it("If button is '=', with no operation should return empty object", () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({});
  })
  it("If button is '=', total = 55 and next 23 with operation + should return new total of 78 ", () => {
    const obj = {
      total: '55',
      next: '23',
      operation: '+',
    };
    const buttonName = '=';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({ total: '78', next: null, operation: null });
  })
  it("If button is '=', total = 55 and next 23 with operation + should return new total of 78 ", () => {
    const obj = {
      total: '55',
      next: '23',
      operation: '+',
    };
    const buttonName = '=';
    const results = calculate(obj, buttonName);
    expect(results).toEqual({ total: '78', next: null, operation: null });
  })
});
    