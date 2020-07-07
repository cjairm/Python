# Create a function called "getCountOfUniqueValues"
def getCountOfUniqueValues(x):
    # Check the length of the array

    # If array length is equal two, check the first and second value. Then, return the count of unique values
    if (len(x) == 2):
        if x[0] == x[1]:
            return 1
        else:
            return 2

    # If array length is equal one/zero, return the count of one/zero unique value
    if (len(x) <= 1):
        return len(x)

    # Create reference (pointer) at the begining (position 1) of the array called firstRef
    firstRef = 0

    # Create another reference (pointer) at position 2 in the array called secondRef
    secondRef = 1
    
    # Create loop. Stay there until reference two is equal to the length of the array
    posDic = len(x) - 1
    while (secondRef < posDic):
        # If the element in the array that points firstRef and that one that points secondref two are equal. Incremente secondRef
        # If are diferents increment secondRef and firstRef
        if (x[firstRef] != x[secondRef]):
            firstRef += 1
            x[secondRef] = x[firstRef]
        
        secondRef += 1
    
    # Return value of firstRef
    return firstRef

if __name__ == "__main__":
    print(getCountOfUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))