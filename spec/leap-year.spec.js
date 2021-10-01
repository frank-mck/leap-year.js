const { Test } = require('../src/leap-year')

describe('leapYear', () => {
  it('when leap year is divisible by 400 return true', () => {
    expect(Test.leapYear(400)).toBeTruthy();
    expect(Test.leapYear(42000)).toBeTruthy();
    expect(Test.leapYear(800)).toBeTruthy();
    expect(Test.leapYear(2400)).toBeTruthy();
  });

  it('if year is divisible by 100 but not 400 then return false', () => {
    expect(Test.leapYear(100)).toBeFalsy();
    expect(Test.leapYear(200)).toBeFalsy();
    expect(Test.leapYear(500)).toBeFalsy();
    expect(Test.leapYear(1100)).toBeFalsy();
  });

  it('all years divisible by 4 but not 100 return true', () => {
    expect(Test.leapYear(4)).toBeTruthy();
    expect(Test.leapYear(40)).toBeTruthy();
    expect(Test.leapYear(52)).toBeTruthy();
    expect(Test.leapYear(168)).toBeTruthy();
  });

  it('all years not divisible by 4 return false', () => {
    expect(Test.leapYear(5)).toBeFalsy();
    expect(Test.leapYear(13)).toBeFalsy();
    expect(Test.leapYear(101)).toBeFalsy();
    expect(Test.leapYear(2029)).toBeFalsy();
  
  })
})