// Object Oriented Programming
// ********************************

// Creating an Object

// cara 1 (object literal syntax)
const kucing = {
    warna: "putih",
    umur: 1,
    beratBadan: 500,
    panjang: {
        ekor: 100,
        kaki: 150
    },
    get warnaKucing() {
        return `Warna kucing adalah ${this.warna}`;
    },
    set ubahWarna(value) {
        this.warna = value;
    }
}

// cara 2 (object constructor syntax)
const person = new Object();

console.log("Kucing => ",kucing);
console.log("Person => ",person);

// Add & Delete Property

// 1. Add
person.nama = "John";
kucing.parfum = "casablanca";

// 2. Delete
delete kucing.warna;


// Accessing Value

// 1. menggunakan dot (.)
const umurKucing = kucing.umur;
console.log("Umur Kucing => ",umurKucing)

// 2. menggunakan []
const beratKucing = kucing["beratBadan"];
console.log("Berat Kucing =>",beratKucing);

// Optional Chaining '?.'
console.log(kucing.panjang?.bulu)

// Accessing Key
console.log(Object.keys(kucing))


/// Destruct ///
const number = [1,2,3];
const [a,b,c] = number;
console.log(c);
const myAccount = {username:"John",email: "john@mail.com"}
const { username, email } = myAccount;
console.log("Username :", username);
console.log("email :", email);


// spread operator///
const dataOne = [23,55,76, myAccount];
const dataTwo = [45, 77, 99, 52];
const spreadData = [...dataOne, ...dataTwo];
console.log("Speread Data =>", spreadData);

// built in 
// 1. object assign
const target = {
    a:1,
    b:3,
    c:8
}

const source = {
    b:4,
    c:5,
}

const returnTarget = Object.assign(target,source);
console.log("Return Target =>", returnTarget);

/// 2. object create //
const person2 = {
   isHuman: false,
   printResult: function () {
    console.log(`Am i human? ${this.isHuman}`);
   }
}

const me = Object.create(person2);
me.isHuman = true;
person2.printResult();

