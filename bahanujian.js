function tampil() {
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;

    let ekskul = document.querySelectorAll('input[name="ekskul"]:checked');
    let list = [];

    ekskul.forEach(e => list.push(e.value));

    let hari = document.querySelector('input[name="hari"]:checked');

    document.getElementById("hasil").innerHTML = `
        <b>Nama:</b> ${nama} <br>
        <b>Kelas:</b> ${kelas} <br>
        <b>Ekskul:</b> ${list.join(", ")} <br>
        <b>Jadwal:</b> ${hari.value}
    `;
}

function resetForm() {
    document.getElementById("formku").reset();
    document.getElementById("hasil").innerHTML = "Data anda harus ditampilkan di sini...";
}
