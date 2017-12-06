let { traverse } = require('../src/matrixTraversal');
let expect = require('chai').expect;

describe('traversal',  () => {

    it('should return empty string for null', () => {
        expect(traverse()).to.equal("");
    });

    it('should handle single row with single value', () => {
        var arr = [["1"]];
        expect(traverse(arr)).to.equal("1");
    });

    it('should handle single row with multiple values', () => {
        var arr = [["1", "2"]];
        expect(traverse(arr)).to.equal("1 2");
    });

    it('should handle 2 rows with 2 values', () => {
        var arr = [["1", "2"], ["3", "4"]];
        expect(traverse(arr)).to.equal("1 2 4 3");
    });

    it('should handle 2 rows with 3 values', () => {
        var arr = [["1", "2", "3"], ["4", "5", "6"]];
        expect(traverse(arr)).to.equal("1 2 3 6 5 4");
    });

    it('should handle 3 rows with 3 values', () => {
        var arr = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
        expect(traverse(arr)).to.equal("1 2 3 6 9 8 7 4 5");
    });

    it('should handle 4 rows with 5 values', () => {
        var arr = [["1", "2", "3", "4", "5"],
            ["6", "7", "8", "9", "10"],
            ["11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20"]];
        expect(traverse(arr)).to.equal("1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12");
    });

    it('should handle 5 rows with 6 values', () => {
        var arr = [["1", "2", "3", "4", "5", "6"],
            ["7", "8", "9", "10", "11", "12"],
            ["13", "14", "15", "16", "17", "18"],
            ["19", "20", "21", "22", "23", "24"],
            ["25", "26", "27", "28", "29", "30"]];
        expect(traverse(arr)).to.equal("1 2 3 4 5 6 12 18 24 30 29 28 27 26 25 19 13 7 8 9 10 11 17 23 22 21 20 14 15 16");
    });

});
