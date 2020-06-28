# Create function called "isAnagramValid"
def isAnagramValid(s1, s2):
	# if both strings has the same length. We continue
    if len(s1) != len(s2):
        return False
    
	# if both strings are the same. We stop.
    if s1 == s2: 
        return True

	# declare helpers to save each variable
    h1 = dict()
    h2 = dict()

	# Iterate first string and save how many letters exists
	# First we convert the string one to lowercase
    for currLetter in s1:
        letterExists = False
        if currLetter in h1:
            letterExists = True
        
        if letterExists:
            h1[currLetter] += 1
        else:
            h1[currLetter] = 1
	
	# Iterate second string and save how many letter exists
	# First we convert the string two to lowercase
    for currLetter in s2:
        letterExists = False
        if currLetter in h2:
            letterExists = True
        
        if letterExists:
            h2[currLetter] += 1
        else:
            h2[currLetter] = 1
	
	# Iterate one of the object created.
    for key in h1:
        # if the letter exists. Continue
        if not key in h1 or not key in h2:
            return False

        # If counter of characters are the same. Continue
        if h1[key] != h2[key]: 
            return False
		
    return True

if __name__ == "__main__":
    print(isAnagramValid("hello", "llohe"))