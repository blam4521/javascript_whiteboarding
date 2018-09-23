//return the remaining elements of an array after chopping off n elements from the head

// function slash(arr, n) {
//     if (arr.length > 0) {
//         return arr.splice(n);
//     }
//  }
// console.log(slash([1,2,3], 2));

// +d+=3=+s+  true
// f++d+ false

function ident(str) {
    let strArr = str.split("")
  
    // Lets handle the base cases for the string
    // For the string if you notice the first element is a letter
    // then the string would be false because there is no '+' to the left of it.
    // It is the same with the last element of the str, if it is a letter, then 
    // the string would also be false because there is no '+' to the right side.
    // So we have to first check the first and last element outside of our for loop.
    
    // Setup the regex to make sure the strArr matches with a letter and not a symbol
    // I think this means look at all letters upper and lower case to see if 
    // your input matches any of attributes described above.
    let letters = /^[a-zA-Z]+$/;
    let numbers = /^[0-9]+$/;
    // If there is a match kick them out of the function, return false
    // example: "+d+e" or "f++d+" 
    // The last element in the first example is a letter
    // The first element in the second example is a letter
    if(strArr[0].match(letters) || strArr[strArr.length - 1].match(letters)) {
        // console.log('this is match')
        return false
    } else {
        // If its not a letter it has to be a '+' or '='
        // Then preceed to check every element between 
        // the index of 1 and length of string-1
        // console.log('this is not a letter')
        
        // This handles the middle part of the array
        for(let i=1; i<strArr.length-1; i++) {
            if(strArr[i] !== '+' && strArr[i] !== '=' && !(strArr[i].match(numbers))) {
                // console.log(strArr[i])  
                // Check the left side of the letter and the right side  
                if(strArr[i-1] ==='+' && strArr[i+1] ==='+'){   
                    return true
                }
            
            }
        }
    return false
    }

    
}
console.log(ident("+++"))
console.log(ident("+d+b+=3=+s+"))
console.log(ident("fff"))
console.log(ident("b+d+w+p=d+"))
console.log(ident("+sdfsdfsdfsd+g+a+="))