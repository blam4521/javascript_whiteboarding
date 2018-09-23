function vowels(str1) {
    // Create a list
    const blah = str1.toLowerCase().split('');
    console.log(blah)
    let count = 0;
    let vow = ['a', 'e', 'i', 'o', 'u']
    blah.forEach(element => {
        if(vow.indexOf(element) != -1){
            // console.log(element)
            count++;
        }
    })
    console.log(count)
}


vowels('why do you ask!')

module.exports = vowels