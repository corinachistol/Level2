///me developers
var f = function (argument) {
    var result = argument + 0.5;
    return result;
};
/////tester
var testValues = [
    { in: 1, out: 1.5 },
    { in: -1, out: -0.5 },
    { in: "1", out: NaN },
];
testValues.forEach(function (test, index) {
    var result = f(test.in);
    console.log("test ".concat(index + 1, ": ").concat(test.in, " -> ").concat(result, " ") + (result === test.out ? 'passed ' : ' failed'));
});
