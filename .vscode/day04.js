///// ARRAY//////
/**
 * Defenisi : Suatu tipe data yang berisi sekumpulan data, bisa bertipe sama atau berbeda
 *              setiap data memiliki alamat index yang dimulai dari 0.
 * Tujuan : Mempermudah pengelolaan data
 * Array itu ditandai dengan bracket kurung siku [data0, data1, data2, ...]
 * 
 * 
 * 
 */

let buah1 = 'Apel';
let buah2 = 'Semangka';

let buah = ["Apel", "Semangka", "Jeruk"]; // Cara 1
console.log(buah);
console.table(buah);
let stock = Array(15,10,25); // cara 2
console.table(stock);
let harga = []; // cara 3
harga [0]=20000;
harga [1]=15000;
harga [2]=30000;

console.table(harga);

////// ARRAY FUCNTION /////
// array.length : menghitung jumlah data yang ada pada array
// Output dari func length bertipe NUMBER

console.log("Banyak data buah ==>", buah.length);
console.log("Banyak data stock ==>", stock.length);
console.log("Banyak data harga ==>", harga.length);

var print = "";
for (let i = 0; i < buah.length; i++) {
    print += `${i + 1}. ${buah[i]}, stocknya = ${stock[i]}, Rp. ${harga[i]}\n`;
};

console.log(print);

// array.push(data) : menambahkan data di akhir array

// array.pop() : menghapus data terakhirnpada array
// array.ushift(data) : menambahkan data di awal array

// array.shift() : menghapus data di awal array

// array.splice(indexAwal, jumlahDataYangDiHapus, dataBaru)
// Mode 1 : menghapus data
stock.splice(2,1);

console.log(stock);

// Mode 2 : menyisipkan data
buah.splice(1, 0, 'Buah Naga', 'Manggis')
console.table(buah);


// Mode 3 : mengganti data
buah.splice(2,1,'Rambutan');
console.table(buah);

// array.includes(data) : memeriksa suatu data apakah ada atau tidak
console.log(buah.includes('Apel'));

// array.indexOf(data) : untuk mencari index dari suatu data
console.log(buah.indexOf('Jeruk'));


// array.reverse() : membalikkan urutan data
console.table(buah.reverse());


// array.join("separator") menggabungkan data array menjadi string
console.log(buah.join("|"));

// Penggabungan data array
let motor = [ "CBR150", "WR155", "VARIO160"];
let mobil = [ "HR-V", "IGNIS", "VELOZ"];

let kendaraan = motor.concat(mobil);
console.table(kendaraan);

// Spread operator 
let transportasi = [...motor, ...mobil, 'Kereta', 'Pesawat'];
console.table(transportasi);
 

let nama = ["Aldo", "Edo", "Budi"];
let mapel = ["SAINS", "BIOLOGI", "ENGLISH"];
let nilai = ["A", "B", "F"];

var print = "";
for (let i = 0; i < nama.length; i++) {
    print += `${i + 1}. ${nama[i]}, Pelajarannya = ${mapel[i]}, Rp. ${nilai[i]}\n`;
};

console.log(print);



/////// Function //////

/**
 * Defenisi :  
 *  - Sekumpulan program yang ditujukan untuk menyelesaikan proses tertentu
 *  - Bersifat re-usable sehingga bisa digunakan berulang
 *  - Built-in function
 *  - User-defined function
 *          -Declarative function
 *              -function namaFunc(argument1....){
 *                  // task
 *                  }
 *          -Function expression
 *              -var namaFunc = function (argument1....){
 *                  // task
 *                  }
 *          -Arrow Function
 *              -var namaFunc = function (argument1....) => {
 *                  // task
 *                  }
 * 
 */

// input
let numbA =200;
let numbB =75;

// pemroses ==> function
function penjumlahan (arg1, arg2){
    let hasil = arg1 + arg2;
    return hasil;
}

// media output
console.log(penjumlahan(30, 20));