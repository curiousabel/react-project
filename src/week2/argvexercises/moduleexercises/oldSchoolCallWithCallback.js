const rtnLib = require('./superfancynonblockingrtns');
let someParam = 'no err';
// call library routine with
// no error and anonymous callback function with 2 params
rtnLib.someOldRtnUsingCallback(someParam, (errorMessage, results) => {
  errorMessage // will be empty
    ? console.log(`Error ==> ${errorMessage}`)
    : console.log(`The call ${results.val1} ${results.val2}`);
});
// pass an err and see what happens
someParam = 'err';
// same call as above
rtnLib.someOldRtnUsingCallback(someParam, (errorMessage, results) => {
  errorMessage // will have a value
    ? console.log(`Error ==> ${errorMessage}`)
    : console.log(`The call ${results.val1} ${results.val2}`);
});
// now don't pass a callback and see what happens
rtnLib.someOldRtnUsingCallback(someParam);
// now exercise the other library routine with just a callback
rtnLib.anotherOldSchoolCallbackRtn((errorMessage, results) => {
  errorMessage
    ? console.log(`Error ==> ${errorMessage}`)
    : console.log(`The other call ${results.val1} ${results.val2}`);
});
