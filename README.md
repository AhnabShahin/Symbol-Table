# Symbol-Table
## Introduction
Build a symbol-table in this assignment. At this initial stage, we will omit many details regarding an actual symbol-table and we will simply adhere to the basic concept that “a symbol-table is an efficient data-dictionary for the symbols used in a program". Thus, our focus in this assignment is to construct a simple hash-based data-dictionary based on chaining.

## Inputs
The input to your program will be a sequence of two tuples, where each element in each tuple is a string.
An example of input sequence is given below:
-	int, INTEGER
-	myFunction, FUNCTION
-	x, ID
-	5, NUM
The first element of each tuple will be the name of the record to be stored in the symbol table. Hence, you have to apply the hash function on the first element of each tuple that is the name.
## Tasks
Implement the following functionalities:
1.	Insert a new symbol/name along with its type into the symbol table
2.	Search a symbol/name along with its type from the symbol table
3.	Delete a symbol/name along with its type into the symbol table
4.	Show the contents of symbol table in the console
5.	Update an already existing entry in the symbol table

## Implementation Details
To implement the tasks mentioned in the previous section, you need to do the followings:
1.	Declare the followings:
	
    - (a)	struct SymbolInfo : The definition of this structure will grow gradually throughout the development of this project. For this assignment, we simply need two members, one for storing the symbol (e.g. \x") and another for storing the type of the symbol (e.g. IDENTIFIER).
    - (b)	SymbolInfo *SymbolTable[MAX] : Since our symboltable will be a hashtable based on chaining, we will have to start with an array of pointers where each pointer points to a list of nodes of type struct SymbolInfo. SymbolTable is such an array of pointers. For this assignment, the choice of the size of this array, MAX as well as of the hash function is left upto you.
   
2.	In addition to this array of pointers, define the following global functions: 
    - [x]	insert()
    - [x]	search()
    - [x]	delete()
    - [x]	show()
    - [x] update()
    - [x] getHashKey()
