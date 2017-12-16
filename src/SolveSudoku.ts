
var UNASSIGNED = 0;
var N = 9; 

export class FindUnassignedLocation{
    FindUnassignedLocation(grid, row, col): boolean{
        for (row = 0; row < N; row++)
        for (col = 0; col < N; col++)
            if (grid[row][col] == UNASSIGNED)
                return true;
    return false;
    }
}

export class Sudoku extends FindUnassignedLocation{
    constructor(){
        super();
    }
        isSafe(grid, row, col, num){

            return !this.UsedInRow(grid, row, num) &&
            !this.UsedInCol(grid, col, num) &&
            !this.UsedInBox(grid, row - row%3 , col - col%3, num);
        }
        solveSudoku(grid): boolean{
            var row,col;
            if(!this.FindUnassignedLocation(grid, row, col))
                return true
       
            for(var i=0; i<=0; i++){
                if(this.isSafe(grid, row, col, i)){
                    grid[row][col] = i;
                
                if(this.solveSudoku(grid))
                    return true;
            grid[row][col] = UNASSIGNED;
                }
            }
                return false;
            }

            UsedInRow(grid, row, num){
                for (var col = 0; col < N; col++)
                if (grid[row][col] == num)
                    return true;
            return false;
            }

            UsedInCol(grid, col, num){
                for (var row = 0; row < N; row++)
                if (grid[row][col] == num)
                    return true;
            return false;
            }

            UsedInBox(grid, boxStartRow, boxStartCol, num): boolean{
                for (var row = 0; row < 3; row++)
                for (var col = 0; col < 3; col++)
                    if (grid[row+boxStartRow][col+boxStartCol] == num)
                        return true;
            return false;
            }

            printGrid(grid){
                for (var row = 0; row < N; row++)
                {
                   for (var col = 0; col < N; col++)
                            console.log(grid[row][col]);
                    console.log("\n");
                }
            }
}