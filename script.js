const input = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftar = document.getElementById("daftarTugas");
const jumlah = document.getElementById("jumlah");

let total = 0;

btnTambah.addEventListener("click", function(){

    if(input.value === ""){
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";

    hapusBtn.addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
        total--;
        jumlah.textContent = total;
    });

    li.addEventListener("click", function(){
        li.classList.toggle("selesai");
    });

    li.appendChild(hapusBtn);
    daftar.appendChild(li);

    total++;
    jumlah.textContent = total;

    input.value = "";
});