const { Test } = require('../src/leap-year');

describe('getClosestLeapYear', () => {
  it('return the closest leap year when given a year', () => {
    expect(Test.getClosestLeapYear(1)).toEqual(4)
  });

  it('return the closest leap year when given a year', () => {
    expect(Test.getClosestLeapYear(1991)).toEqual(1992)
  })
})