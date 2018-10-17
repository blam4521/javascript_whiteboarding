// Replace word with another word.

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// helper functions
function cleanString(str) {
  return str
    .toLowerCase()
    .sort()
    .replace(/[^a-z]/g, "");
}

anagrams("dormitory", "dirty room");

module.exports = anagrams;

// str1 = stringA.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
//     str2 = stringB.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
//     // console.log(str1.length,str2.length)

//     if(str1.length === str2.length){
//         const str1_array = str1.split("")
//         let str1_obj = {}

//         for(i=0;i<str1_array.length; i++) {
//             let str1_count = 0
//             let character = str1.charAt(i)
//             // console.log( str1_obj[character] )
//             // if this key is true then add one
//             if(str1_obj[character]){
//                 // console.log(str1_obj[character])
//                 str1_obj[character] = str1_obj[str1_array[i]]+1
//                 // console.log(str1_array[i], str1_count)
//                 console.log('inside if',character)
//             } else {
//                 str1_obj[str1_array[i]] = str1_count + 1
//                 console.log('else', str1_obj[character])
//             }
//         }
//         Object.keys(str1_obj).map(element => {
//             console.log(str1_obj[element])
//         })

//     } else {
//         console.log('this is not a anagram')
//         return false
//     }
