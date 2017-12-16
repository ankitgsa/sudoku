"use strict";
exports.__esModule = true;
var UNASSIGNED = 0;
var N = 9;
var Sudoku = /** @class */ (function () {
    function Sudoku() {
    }
    Sudoku.prototype.FindUnassignedLocation = function (grid, l) {
        for (var row = 0; row < 9; row++)
            for (var col = 0; col < 9; col++)
                if (grid[row][col] == UNASSIGNED) {
                    l[0] = row;
                    l[1] = col;
                    return true;
                }
        return false;
    };
    Sudoku.prototype.UsedInRow = function (grid, row, num) {
        for (var col = 0; col < 9; col++)
            if (grid[row][col] == num)
                return true;
        return false;
    };
    Sudoku.prototype.UsedInCol = function (grid, col, num) {
        for (var row = 0; row < 9; row++)
            if (grid[row][col] == num) {
                return true;
            }
        return false;
    };
    Sudoku.prototype.UsedInBox = function (grid, boxStartRow, boxStartCol, num) {
        for (var row = 0; row < 3; row++)
            for (var col = 0; col < 3; col++)
                if (grid[row + boxStartRow][col + boxStartCol] == num)
                    return true;
        return false;
    };
    Sudoku.prototype.printGrid = function (grid) {
        for (var row = 0; row < N; row++) {
            for (var col = 0; col < N; col++)
                process.stdout.write(grid[row][col].toString() + " ");
            process.stdout.write("\n");
        }
    };
    Sudoku.prototype.isSafe = function (grid, row, col, num) {
        return (!this.UsedInRow(grid, row, num) &&
            !(this.UsedInCol(grid, col, num)) &&
            !(this.UsedInBox(grid, row - row % 3, col - col % 3, num)));
    };
    Sudoku.prototype.solveSudoku = function (grid) {
        var l = [0, 0];
        if (!this.FindUnassignedLocation(grid, l)) {
            return true;
        }
        var row = l[0];
        var col = l[1];
        for (var num = 1; num <= 9; num++) {
            // If possible
            if (this.isSafe(grid, row, col, num)) {
                // make tentative assignment
                grid[row][col] = num;
                // Solved!
                if (this.solveSudoku(grid))
                    return true;
                //Fail, try again
                grid[row][col] = UNASSIGNED;
            }
        }
        return false;
    };
    return Sudoku;
}());
exports.Sudoku = Sudoku;
