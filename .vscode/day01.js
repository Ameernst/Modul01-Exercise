//// VARIABLE //////
// Penampung data pada program
/**
 * Struktur penulisan variable ==> keywordVariable namaVariable = nilaiVariable;
 * 
 * keywordVariable ; var, let, const
 * 
 * namaVariable ; harus diawali dengan huruf atau diawali symbol "_"/"$", tidak boleh ada spasi
 * 
 * valueVariable ; STRING, NUMBER, BOOLEAN, NULL, ARRAY, OBJECT
 */

// keyword var ; Redeclare, Reassign
var nama = "Abdi"; // deklarasi variable dengan value
var nama = "Edo";  // Redeclare
nama = "Andrew"; // Reassign
console.log("var ==>", nama);

// keyword let ; Non-redeclare, Reassign
let usia = 27;
// let usia = 28; // Redeclare tidak bisa
usia = 28; // Reassign bisa
console.log("let ==>", usia);

// keyword const ; Non-Redeclare, Non-reassign
const PI = 3.14;
// const PI = 22/7; // Redeclare tidak bisa
// PI = 22/7; // Reassign tidak bisa
console.log("const ==>", PI);

////// HOISTING //////
X = 10;
console.log(X);
var X;

/////// DATA TYPE /////
// STRING ; berisi huruf atau karakter
let namaToko = "Runner `#01` Toko Sepatu"; // double quotes
let nama_Toko = `Runner \`#01\` Toko Sepatu`; // single quotes
let namatoko = `Runner '#01' 
Toko Sepatu`; // backthick

console.log("double quote ==>", namaToko);
console.log("single quote ==>", nama_Toko);
console.log("backthick quote ==>", namatoko);

let address = "Jl. Sudirman No 45 Jakarta";

// let alamatLengkap = namaToko + " " + address; // cara 1
let alamatLengkap = `Pak eko, ${namaToko} ${address}`;

console.log(alamatLengkap);

///// MUTABLE DAN IMMUTABLE ////
// IMMUTABLE adalah tipe data yang nilainya bersifat tetap (STRING, NUMBER, DAN BOOLEAN)
let nama1 = "Kamado"
let nama2 = nama1 + " Tanjiro";

console.log(nama1);
console.log(nama2);
// MUTABLE adalah tipe data yang nilainya bersifat berubah (OBJECT DAN ARRAY)

//// string built in function ////
let greeting = "Hello, purwadhika Student";

/// typeof ; memeriksa tipe data
console.log("typeof ==>", typeof greeting);
console.log("typeof ==>", typeof "hello");

// sting.lenght = menghitung panjang data
console.log("lenght ==>", greeting.length);

// string.indexof = mencari posisi kata berdasarkan huruf pertamanya
console.log("indexof ==>", greeting.indexOf("p"));

// string.toUpperCase  = merubah menjadi huruf kapital
console.log("toUpperCase ==>", greeting.toUpperCase());
// 
// string.toUpperCase  = merubah menjadi huruf menjadi kecil
console.log("toLowerCase ==>", greeting.toLowerCase());

// string.slice  = mengambil bagian kata tertentu
console.log("slice ==>", greeting.slice(7,17));

// string.includes  = merubah menjadi huruf menjadi kecil
console.log("includes ==>", greeting.includes("Student"));

////// NUMBER ///////
let jarak = 1500; // nilai INTEGER
let berat = 60.56; /// nilai Decimal atau Float
let saldo = 6e6;

// Arithmetic operator : +,-,/,%
let numbA = 20;
let numbB = 15;
let add = numbA + numbB;
let subt = numbA - numbB;
let multi = numbA * numbB
let div = numbA / numbB
let mod = numbA % numbB

console.log(add, subt, multi, div, mod);


/// INCREMENT dan DECREMENT ////
// posfix form
jarak++;
jarak++;
console.log(++jarak);
jarak--;
jarak--;
console.log(jarak);

//// Math Object ////
const PI_CIRCLE = Math.PI;

console.log(Math.abs(-25.6)); // 25.6 absolute positif
console.log(Math.abs(-25.6)*-1); // -25.6 absolute negatif

console.log(Math.pow(4, 2)); // pangkat
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(4)); // akar pangkat 3

// Pembulatan ///
console.log(Math.ceil(4.2)); // pembulatan keatas
console.log(Math.round(4.4)); // pembulatan terdekat
console.log(Math.floor(4.4)); // pembulatan kebawah


console.log(Math.min(4,3,4,45,6,7,8,2,4,9)); // mencari nilai minimum
console.log(Math.max(4,3,4,45,6,7,8,2,4,9)); // mencari nilai maximum


console.log(Math.random()); // batasnya 0.xx s/d 1

// Parsing data
let angka = "123.456"
console.log(typeof angka); //STRING
console.log(parseInt(angka)); // 123
console.log(parseFloat(angka)); // 123.456

let angkaB = 123.456
console.log(String(angkaB)); // "123.456"
console.log(angkaB.toString()); // "123.456"
let uang = 2000000
console.log(uang.toLocaleString('id')); // "2.000.000"

let addChar = 1 + 2 + "1";
console.log(addChar); // "31"

