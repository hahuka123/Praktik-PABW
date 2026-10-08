const profil = {
  nama: "Hanif Huwaidi kadzim",
  peran: "Mahasiswa informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlah_projek: 2,
};

function buatPerkenalan(data) {
  return `Halo, nama saya ${data.nama}. Saya seorang ${data.peran}. Saya memiliki keahlian dalam ${data.keahlian.join(", ")}. Saat ini, saya telah menyelesaikan ${data.jumlah_projek} projek.`;
}

const formatkeahlian = (daftar) => daftar.join(". ");

console.log(buatPerkenalan(profil));
console.log(formatkeahlian(profil.keahlian));
