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
  }
}

module.exports = { Test };