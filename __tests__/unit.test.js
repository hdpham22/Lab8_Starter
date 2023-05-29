// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
const goodPhoneNumber1 = '123-456-7890';
const goodPhoneNumber2 = '246-810-1214';

const badPhoneNumber1 = '1234567890';
const badPhoneNumber2 = '0';

const goodEmail1 = 'hieu@gmail.com';
const goodEmail2 = 'jeff@ucsd.edu';

const badEmail1 = '1';
const badEmail2 = 'hieu@e';

const strongPass1 = 'H1h_haos';
const strongPass2 = 'wofovj_Wspfj';

const weakPass1 = '1';
const weakPass2 = 'hieu';

const goodDate1 = '12/21/2004';
const goodDate2 = '2/4/2010';

const badDate1 = '1';
const badDate2 = '10000/2000000/3000000000';

const goodHex1 = '#123';
const goodHex2 = '#123456';

const badHex1 = '#843290348429482';
const badHex2 = '3407234';

test('123-456-7890 and 246-810-1214 are valid phone numbers', () => {
    // TODO
    expect(functions.isPhoneNumber(goodPhoneNumber1)).toBe(true);
    expect(functions.isPhoneNumber(goodPhoneNumber2)).toBe(true);
});

test('1234567890 and 0 aren\'t valid phone numbers', () => {
    // TODO
    expect(functions.isPhoneNumber(badPhoneNumber1)).toBe(false);
    expect(functions.isPhoneNumber(badPhoneNumber2)).toBe(false);
});

test('good emails', () => {
    // TODO
    expect(functions.isEmail(goodEmail1)).toBe(true);
    expect(functions.isEmail(goodEmail2)).toBe(true);
});

test('bad emails', () => {
    // TODO
    expect(functions.isEmail(badEmail1)).toBe(false);
    expect(functions.isEmail(badEmail2)).toBe(false);
});

test('strong passwords', () => {
    // TODO
    expect(functions.isStrongPassword(strongPass1)).toBe(true);
    expect(functions.isStrongPassword(strongPass2)).toBe(true);
});

test('weak passwords', () => {
    // TODO
    expect(functions.isEmail(weakPass1)).toBe(false);
    expect(functions.isEmail(weakPass2)).toBe(false);
});

test('valid dates', () => {
    // TODO
    expect(functions.isDate(goodDate1)).toBe(true);
    expect(functions.isDate(goodDate2)).toBe(true);
});

test('invalid dates', () => {
    // TODO
    expect(functions.isDate(badDate1)).toBe(false);
    expect(functions.isDate(badDate2)).toBe(false);
});

test('good hex colors', () => {
    // TODO
    expect(functions.isHexColor(goodHex1)).toBe(true);
    expect(functions.isHexColor(goodHex2)).toBe(true);
});

test('bad hex colors', () => {
    // TODO
    expect(functions.isHexColor(badHex1)).toBe(false);
    expect(functions.isHexColor(badHex2)).toBe(false);
});