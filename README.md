# Sudoku puzzle Solver
Given a partially filled 9×9 2D array ‘grid[9][9]’, the goal is to assign digits (from 1 to 9) to the empty cells so that every row, column, and subgrid of size 3×3 contains exactly one instance of the digits from 1 to 9.

# Goal
To solve the given problem using Typescript


# Typescript Installation 

For npm users:
	npm install -g typescript

# Compiling Code

	tsc main.ts
	tsc SolveSudoku.ts
This will generate main.js & SolveSudoku for you automatically

# Run Code

	node main.js



# Inside Code
	
	main.ts
		Hardcode your suduko problem, 0 represents empty spaces
		Then it invokes SolveSudoku.ts 

	SolveSudoku.ts
		It has multiple functions to solve the sudoku 

		##Naive Algorithm
			The Naive Algorithm is to generate all possible configurations of numbers from 1 to 9 to fill the empty cells. Try every configuration one by one until the correct configuration is found.

		##Backtracking Algorithm
			Like all other Backtracking problems, we can solve Sudoku by one by one assigning numbers to empty cells. Before assigning a number, we check whether it is safe to assign. We basically check that the same number is not present in current row, current column and current 3X3 subgrid. After checking for safety, we assign the number, and recursively check whether this assignment leads to a solution or not. If the assignment doesn’t lead to a solution, then we try next number for current empty cell. And if none of number (1 to 9) lead to solution, we return false.


# Algorithm

	Find row, col of an unassigned cell
	If there is none, return true
  		For digits from 1 to 9
    			a) If there is no conflict for digit at row,col
        			assign digit to row,col and recursively try fill in rest of grid
    			b) If recursion successful, return true
   				c) Else, remove digit and try another
	If all digits have been tried and nothing worked, return false

  