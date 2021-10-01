const Test = {
  check: (year, pre) => {
    return year % pre === 0 ? true : false;
  },

  leapYear: (year) => {
    switch(true) {
      case Test.check(year, 400):
      return true;
      case Test.check(year, 100) && !Test.check(year, 400):
      return false;  
      case Test.check(year, 4) && !Test.check(year, 100):
      return true;
      case !Test.check(year, 4):
      return false;
    }
  },

  getLeapYears: (startYear, endYear) => {
    let leapYears = [];
    for (let year = startYear; year < endYear; year++) {
      if (Test.leapYear(year)) { leapYears.push(year) }
    }
    return leapYears;
  }
}

console.log(Test.getLeapYears(1991, 2021))

module.exports = { Test };