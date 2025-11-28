function proses(){ // fungsi untuk menghitung total harga

let qty = parseFloat(document.getElementById('qty').value)||0; //menggunakan nilai qty, nilainya berupa angka, dan jika input kosong akan menjadi 0
let harga = parseFloat(document.getElementById('harga').value)||0; //menggunakan nilai harga

let total = qty*harga; //menghitung total harga dengan qty dikali harga
document.getElementById("total").innerText=total; //menampilkan hasil/total harga sebagai teks
}
function cetak() { //fungsi untuk mencetak halaman
    window.print();
}