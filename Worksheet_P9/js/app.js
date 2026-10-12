const profil = {
  nama: "Hanif Huwaidi kadzim",
  peran: "Mahasiswa informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlah_projek: 3,
};

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

function buatPerkenalan(data) {
  return `Halo, nama saya ${data.nama}. Saya seorang ${data.peran}. Saya memiliki keahlian dalam ${data.keahlian.join(", ")}. 
  Saat ini, saya telah menyelesaikan ${data.jumlah_projek} projek.`;
}

const formatkeahlian = (daftar) => daftar.join(". ");

console.log(buatPerkenalan(profil));
console.log(formatkeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk",
);
console.log(katalog);

const daftarjudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarjudul);

export const daftarBuku = [
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: 2022,
    rating: 8,
    gambar: "laskar-pelangi.jpg",
    deskripsi:
      "Perjuangan sepuluh anak dari keluarga sederhana di Belitung untuk tetap bersekolah.",
  },
  {
    judul: "Hujan",
    penulis: "Tere Liye",
    tahun: 2022,
    rating: 7,
    gambar: "hujan.jpg",
    deskripsi:
      "Kisah tentang perjuangan hidup, cinta, dan keberanian untuk melupakan.",
  },
  {
    judul: "Negeri Di Ujung Tanduk",
    penulis: "Tere Liye",
    tahun: 2022,
    rating: 9,
    gambar: "negeri-di-ujung-tanduk.jpg",
    deskripsi:
      "Novel penuh intrik politik, korupsi, dan perjuangan memperbaiki demokrasi.",
  },
];