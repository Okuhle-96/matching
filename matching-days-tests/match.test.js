// describe("The Matching Days Functions", function(){

//   describe("Should be able to set twpo dates", function(){
//     it("should be able to set date 1 and show it's day.", function(){
//       let dayMatch = matchingDays();

//       dayMatch.setDate1("1996-01-22");

//       assert.equal(dayMatch.setDate1(), "Monday");
//     })

//     it("should be able to set date 2 and show it's day", function () {
//       let dayMatch = matchingDays();
//       dayMatch.setDate2("2017-04-06");
//       assert.equal(dayMatch.getDay2(), "Thursday");
//     })
//   })

//   describe("Should be able to get two dates when ", function(){
//     it("should be able to set date 1 and show it's day.", function(){
//       let dayMatch = matchingDays();

//       dayMatch.setDate1("1996-01-22");
//       dayMatch.setDate2("2010-07-01");

//       assert.equal(dayMatch.setDate1(), "Monday");
//     })

//     it("should be able to set date 2 and show it's day", function () {
//       let dayMatch = matchingDays();
//       dayMatch.setDate2("1965-05-08");
//       dayMatch.setDate2("2001-07-13");
//       assert.equal(dayMatch.getDay2(), "Thursday");
//     })
//   })
   

//   describe("Should be able to get a matching day ", function(){
//     it("should be able to set date 1 and show it's day.", function(){
//       let dayMatch = matchingDays();

//       dayMatch.setDate1("1996-01-22");
//       dayMatch.setDate2("2021-05-31");

//       dayMatch.setDate1();

//       assert.equal(dayMatch.getDay1(), true);
//     })
//   })

//   });
describe("The matchingDays factory functions", function () {
  it("should be able to determine that 23 May 1994 was a Monday.", function () {
    var matchingTest = getDay1();
    matchingTest.setDate1("1994-05-23");
    assert.equal(matchingTest.getDay1(), "monday");
  });
  it("should be able to determine that 2 July 2015 was a Thursday.", function () {
    var matchingTest = getDay1();
    matchingTest.setDate2("2015-07-02");
    assert.equal(matchingTest.getDay2(), "thursday");
  });
  it("should be able to indicate that 21 March 2015 and 31 October 1981 fell on the same day of the week.", function () {
    var matchingTest = getDay1();
    matchingTest.setDate1("2015-03-21");
    matchingTest.setDate2("1981-10-31");
    assert.equal(matchingTest.getDay1(), true);
  });
  it("should be able to indicate that 26 June 2003 and 3 Febuary 1991 did not fall on the same day of the week.", function () {
    var matchingTest = getDay1();
    matchingTest.setDate1("2003-06-26");
    matchingTest.setDate2("1991-02-03");
    assert.equal(matchingTest.getDay1(), false);
  });
});
