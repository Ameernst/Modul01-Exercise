let number = 9
for (let index = 0; index < 10; index++) {
    console.log(`${number}*${(index+1)}=${number*(index+1)}`)  
}

//Palindrom//

let text = "kasur rusak"
let find = /eve/g

let trim = text.trim()
let result = true
for (let index = 0; index < trim.lenght/2; index++) {
    if (trim[index]  trim[trim.length-1-index]) {
        result = false
        break
    }
    
}

console.log(`Kata ${text} adalah ${result?'palindrome':'bukan palindrome'}`)

/// convert cm to km
let cm = 1000
console.log(`${cm} cm = ${cm/1000} km`);

// Format Currency //
let duit = 1000
console.log(duit.toLocaleString('id',{
    style: 'currency',
    currency: 'IDR'
}));

