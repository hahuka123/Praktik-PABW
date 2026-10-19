import { saring } from "./data.js";

const wadahDaftar = document.querySelector("#daftar");
const wadahTabel = document.querySelector("#daftar-tabel");
const pesanKosong = document.querySelector("#kosong");
const muatPesan = document.querySelector("#muat");
const filter = document.querySelector("#filter");

function buatElemen(tag, teks) {
  const elemen = document.createElement(tag);
  elemen.textContent = teks;
  return elemen;
}

export function buatKartu(buku, favorit = []) {
  const kartu = document.createElement("article");
  kartu.className = "kartu kartu_isi";

  const headerKartu = document.createElement("div");
  headerKartu.style.display = "flex";
  headerKartu.style.justifyContent = "space-between";
  headerKartu.style.alignItems = "center";

  const judul = buatElemen("h3", buku.judul);
  judul.className = "kartu_judul";

  const tombolFav = document.createElement("button");
  tombolFav.type = "button";
  tombolFav.className = "favorit";
  tombolFav.dataset.id = buku.id;
  tombolFav.style.background = "transparent";
  tombolFav.style.border = "none";
  tombolFav.style.fontSize = "1.2rem";
  tombolFav.style.cursor = "pointer";
  tombolFav.textContent = favorit.includes(buku.id) ? "★" : "☆";

  headerKartu.append(judul, tombolFav);
  kartu.appendChild(headerKartu);

  if (buku.gambar) {
    const gambarBuku = document.createElement("img");
    gambarBuku.src = buku.gambar;
    gambarBuku.alt = `Sampul buku ${buku.judul}`;
    gambarBuku.width = 200;

    const gambar = document.createElement("figure");
    gambar.append(gambarBuku, buatElemen("figcaption", buku.judul));
    kartu.appendChild(gambar);
  }

  kartu.append(
    buatElemen("p", `Penulis: ${buku.penulis}`),
    buatElemen("p", `Tahun selesai: ${buku.tahun}`),
    buatElemen("p", `Rating: ${buku.rating}/10`),
  );

  if (buku.deskripsi) {
    kartu.appendChild(buatElemen("p", buku.deskripsi));
  }

  return kartu;
}

export function renderTabel(daftar = []) {
  if (!wadahTabel) return;
  wadahTabel.replaceChildren(
    ...daftar.map((buku, indeks) => {
      const baris = document.createElement("tr");
      const nilai = [
        indeks + 1,
        buku.judul,
        buku.penulis,
        buku.tahun,
        `${buku.rating}/10`,
      ];
      baris.append(...nilai.map((item) => buatElemen("td", item)));
      return baris;
    }),
  );
}

export function tandaiTombolAktif(kategoriAktif) {
  if (!filter) return;
  filter.querySelectorAll("button[data-kategori]").forEach((item) => {
    const aktif = item.dataset.kategori === kategoriAktif;
    item.classList.toggle("aktif", aktif);
    item.setAttribute("aria-pressed", String(aktif));
  });
}

export function aturMemuat(sedangMemuat) {
  if (muatPesan) muatPesan.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  if (wadahDaftar) wadahDaftar.textContent = pesan;
}

export function render(state) {
  renderTabel(state.daftarProyek);
  tandaiTombolAktif(state.kategoriAktif);

  if (!wadahDaftar) return;
  wadahDaftar.textContent = "";

  const terfilter = saring(state.daftarProyek, state.kategoriAktif);

  if (!terfilter || terfilter.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Buku tidak ditemukan untuk kategori ini.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  terfilter.forEach((buku) => {
    wadahDaftar.append(buatKartu(buku, state.favorit));
  });
}
