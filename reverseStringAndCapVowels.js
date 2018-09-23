// Capitalize all vowels and reverse the string

let str = "Did you eat a apple today?"

function revCap(str) {
    let uniq_str = []
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

    let str_list = str.split("")
    for(let i=0; i <str_list.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            uniq_str.push(str[i].toUpperCase())
        } else {
            uniq_str.push(str[i])
        }
    }

    return uniq_str.reverse().join("")

}

console.log(revCap(str))