# Description

Implement a function called "countUniqueValues". Which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it always be sorted.

# Example Output

| Input                      | Output        |
|:--------------------------:|:-------------:|
| [1,1,1,1,1,2]              | 2             |
|                            |               |
| [1,2,3,4,4,4,7,7,12,12,13] | 7             |
|                            |               |
| []                         | 0             |
|                            |               |
| [-2,-1,-1,0,1]             | 4             |

# Pseudo code

This was my thinking before resolve the problem.
```
Create a function called "getCountOfUniqueValues"

    Check the length of the array
    
    If array length is equal two, check the first and second value. Then, return the count of unique values
    
    If array length is equal one/zero, return the count of one/zero unique value
    
    Create reference (pointer) at the begining (position 1) of the array called firstRef
    
    Create another reference (pointer) at position 2 in the array called secondRef
    
    Create loop. Stay there until reference two is equal to the length of the array
    
        If the element in the array that points firstRef and that one that points secondref two are equal. Incremente secondRef
        
        If are diferents increment secondRef and firstRef
    
    Return value of firstRef
```

# How it works?

```
initial state
//  f  
// [1,2,3,4,4,4,7,7,12,12,13]
//    s

2 state
//    f  
// [1,2,3,4,4,4,7,7,12,12,13]
//      s 

3 state
//      f  
// [1,2,3,4,4,4,7,7,12,12,13]
//        s 

4 state
//        f  
// [1,2,3,4,4,4,7,7,12,12,13]
//          s 

5 state
//        f  
// [1,2,3,4,4,4,7,7,12,12,13]
//            s 

6 state
//          f  
// [1,2,3,4,7,4,7,7,12,12,13]
//              s 

... states

final state
//               f  
// [1,2,3,4,7,12,13,7,12,12,13]
//                          s
```

# How to use it

* Download main.py
* Save them in some folder
* Run `python ./my/folder/main.py`

# Author

Carlos Mendez

## Why 0(n)?

This is just to obtain vizually how fast is the program, and is called Big O notation.

### Created at 

Jul 7, 2020

### Same algorithm, different languages

* [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS/002_count_unique_values)
* [Golang](https://github.com/cjairm/go/tree/master/Algorithms-Go/002_count_unique_values)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS/002_count_unique_values)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp/002_count_unique_values)