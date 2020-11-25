const assert = require('assert').strict;
const studentMarks = require('../studentMarks')
describe('Marks more than current marks', () => {
 it('should return []', () => {
        assert.deepStrictEqual(studentMarks.getStudentsWithMarksMoreThan(90),[]);
    });
    it('should return [ 42, 45, ]', () => {
        assert.deepStrictEqual(studentMarks.getStudentsWithMarksMoreThan(40),[ 42, 45, ]);
    });
    it('should return [ 45 ]', () => {
        assert.deepStrictEqual(studentMarks.getStudentsWithMarksMoreThan(44),[ 45 ]);
    });
    it('should return [ 42, 45, 31 ]', () => {
        assert.deepStrictEqual(studentMarks.getStudentsWithMarksMoreThan(30),[ 42, 45, 31 ]);
    });
});
