export const profil = {
  nama: "Hanif Huwaidi Kadzim",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlah_projek: 3,
};

export function buatPerkenalan(data) {
  return `Halo, nama saya ${data.nama}. Saya seorang ${data.peran}. Saya memiliki keahlian dalam ${data.keahlian.join(", ")}. Saat ini, saya telah menyelesaikan ${data.jumlah_projek} projek.`;
}

export const formatkeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar = [], kategori = "semua") {
  if (kategori === "semua") return daftar;
  return daftar.filter((item) => item.penulis === kategori);
}