import { Address } from "cluster";
import { AddressInfo } from "dgram";


var UNASSIGNED = 0;
var N = 9; 


export class Sudoku{
    
    FindUnassignedLocation(grid:number[][],l): boolean{
        for (var row = 0; row < 9; row++)
        for (var col = 0; col < 9; col++)
            if (grid[row][col] == UNASSIGNED){
                l[0]=row
                l[1]=col
                return true;
            }
    return false;
    }
    UsedInRow(grid: number[][], row, num): boolean{
        for (var col = 0; col < 9 ; col++)
            if (grid[row][col] == num)
              return true;
    return false;
    }

    UsedInCol(grid:number[][], col, num): boolean{
        for (var row = 0; row < 9; row++)
        if (grid[row][col] == num)
            {return true;}
    return false;
    }

    UsedInBox(grid:number[][], boxStartRow, boxStartCol, num): boolean{
        for (var row = 0; row < 3; row++)
            for (var col = 0; col < 3; col++)
                 if (grid[row+boxStartRow][col+boxStartCol] == num)
                     return true;
        return false;
    }


    printGrid(grid){
        for (var row = 0; row < N; row++)
          { for (var col = 0; col < N; col++)
                    process.stdout.write(grid[row][col].toString()+" ")
                    process.stdout.write("\n")
                }
    }
        isSafe(grid:number[][], row, col, num): boolean{

            return (!this.UsedInRow(grid, row, num) &&
            !(this.UsedInCol(grid, col, num)) &&
            !(this.UsedInBox(grid, row - row%3 , col - col%3, num)));
        }
        solveSudoku(grid:number[][]): boolean{
            var l=[0,0];
            if(!this.FindUnassignedLocation (grid, l) )
                        { return true;}
       
                        var row=l[0];
                        var col=l[1];
                       
                for (var num = 1; num <= 9; num++)
                {
                    // If possible
                    if (this.isSafe(grid, row, col, num))
                    {
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
            }

          

}