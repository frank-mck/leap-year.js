const { Test } = require('../src/leap-year');

describe('getLeapYear', () => {
  it('returns a list of leap years from a given start year and end year', () => {
    expect(Test.getLeapYears(1991, 2021)).toEqual([1992, 1996, 2000,
      2004, 2008, 2012,
      2016, 2020])
  })
})