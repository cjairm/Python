# Description

Given two strings, write a function to determine if the second string is an anagramof the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as, "cinema" formed from "iceman".

# Example Output

| Input                 | Output        |
|:---------------------:|:-------------:|
| "", ""                | True          |
|                       |               |
| "aaz", "zza"          | False         |
|                       |               |
| "anagram", "nagaram"  | True          |
|                       |               |
| "awesome", "awesom"   | False         |

# Pseudo code

This was my thinking before resolve the problem.
```
Create function called "isAnagramValid"
	if both strings has the same length. We continue
	if both strings are the same. We stop.
	declare helpers to save each variable

	Iterate first string and save how many letters exists
	First we convert the string one to lowercase
	
	Iterate second string and save how many letter exists
	First we convert the string two to lowercase
	
	Iterate one of the object created.
		if the letter exists. Continue
		If counter of characters are the same. Continue
		
	Return true
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

Jun 27, 2020

### Same algorithm, different languages

* [JavaScript](https://github.com/cjairm/javascript/tree/master/Algorithms-JS/001_anagram)
* [Python](https://github.com/cjairm/python/tree/master/Algoritms-Py/001_anagram)
* [TypeScript](https://github.com/cjairm/typescript/tree/master/Algorithms-TS/001_anagram)
* [C++(Arduino)](https://github.com/cjairm/arduino/tree/master/Algorithms-Cpp)