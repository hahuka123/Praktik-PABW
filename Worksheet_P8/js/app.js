const profil = {
  nama: "Hanif Huwaidi kadzim",
  peran: "Mahasiswa informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlah_projek: 3,
};

const daftarProyek = [
    {judul: "Halaman Profil", tahun:2026, selesai:true},
    {judul: "Katalog Produk", tahun:2026, selesai:false},
]

function buatPerkenalan(data) {
  return `Halo, nama saya ${data.nama}. Saya seorang ${data.peran}. Saya memiliki keahlian dalam ${data.keahlian.join(", ")}. Saat ini, saya telah menyelesaikan ${data.jumlah_projek} projek.`;
}

const formatkeahlian = (daftar) => daftar.join(". ");

console.log(buatPerkenalan(profil));
console.log(formatkeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "Katalog Produk");
console.log(katalog);