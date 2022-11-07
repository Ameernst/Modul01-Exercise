//////////// BOOLEAN ////////
let benar = true;
let salah = false;

//// Comparison operator : >, <, >=, <=, ==, ===, !=, !

let angkaA= 20;
let angkaB = 15;

console.log("Comparison A > B:", angkaA > angkaB);
console.log("Comparison A < B:", angkaA < angkaB);
console.log("Comparison A <= B:", angkaA <= angkaB);
console.log("Comparison A >= B:", angkaA >= angkaB);
console.log("Comparison A == B:", angkaA == angkaB);
console.log("Comparison A === B:", angkaA === angkaB);
console.log("Comparison A != B:", angkaA != angkaB);

// Logical operator : AND(&&), OR(||), NOT (!)

// AND : akan menghasilkan nilai TRUE apabila semua nilai yang di gunakan bernilai TRUE
console.log("Logic AND :", true && true);
console.log("Logic AND :", true && false);
console.log("Logic AND :", false && false);
// OR : akan menghasilkan nilai TRUE apabila salah satu bernilai TRUE
console.log("Logic OR :", true || false);
console.log("Logic OR :", false || false);

// NOT
console.log("Logic NOT :", !false);
console.log("Logic NOT :", !true);

// TRUTHLY and FALSY
// TRUTHLY 
console.log(Boolean (2)); // true
console.log(Boolean ("ABC")); // true
console.log(Boolean (true)); // true
console.log(Boolean(" ")); // true

// FALSY
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));


////////CONDITIONAL STATEMENT //////
/**
 * Aturan :
 * 1. Membutuhkan nilai boolean
 * 
 * Jenis :
 * 1. if statement : untuk 1 kondisi;
 * 2. if... else statement : untuk 2 kondisi;
 * 3. if....else if...else : untuk banyak kondisi;
 * 4. switch...case : untuk memastikan nilai suatu value
 * 
 */

let nama= "Leonardo", usia=15, email="leo@mail.com";

// 1. IF STATEMENT
/**
 * if(condition harus boolean){
 *          // task
 * }
 */
if(usia>=17){
    console.log("Usia lebih dari 17thn");
}

// 2. IF ELSE STATEMENT
/**
 * if(condition harus boolean){
 *          // task
 * }else{
 *          // task
 * }
 */
 if(usia>=17){
    console.log(`Verifikasi usia ${nama} berhasil, periksa ${email}`);
 }else{
    console.log(`Verifikasi usia ${nama} gagal`);

 }

 // 3. IF ELSE IF...ELSE STATEMENT
/**
 * if(condition harus boolean){
 *          // task
 * }else if(condition 2){
 *          // task
 * }else{
 *          // task
 * }
 */

let nilai = 80;

if(nilai > 90){
    console.log("Grade A", nilai);
}else if (nilai >=80 && nilai <=90){
    console.log("Grade B", nilai);
}else{
    console.log("Grade C", nilai);
}

// 4. Switch case statement
let profesi = "DILAN";
let profesiA = "DOKTER"
switch (profesi) {
    case "POLISI":
        console.log("Saya Sambo");
        break;
    case "SUPIR":
        console.log("Saya Toretto");
        break;
    default:
        console.log("Kamu Nanya Saya Siapa?");
        break;
}

// Ternary operator : condition ? nlai : nilai

let validasi_email = Email.includes('@') ? "Email Benar" : "Email Salah"


///// LOOP STATEMENT ////
/**
 * 1. WHILE...LOOP
 * 2. DO... WHILE
 * 3. FOR LOOP
 */