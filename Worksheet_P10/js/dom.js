import { daftarBuku } from "./app.js";

const wadahDaftar = document.querySelector("#daftar");
const wadahTabel = document.querySelector("#daftar-tabel");
const pesanKosong = document.querySelector("#kosong");
const filter = document.querySelector("#filter");
const formBuku = document.querySelector("#form-buku");
const pesanGalat = document.querySelector("#pesan-galat");

let kategoriAktif = "semua";

function buatElemen(tag, teks) {
  const elemen = document.createElement(tag);
  elemen.textContent = teks;
  return elemen;
}

function buatKartu(buku) {
  const kartu = document.createElement("article");
  kartu.className = "kartu kartu_isi";
  kartu.appendChild(buatElemen("h3", buku.judul));
  kartu.lastElementChild.className = "kartu_judul";

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

function renderKoleksi() {
  const bukuTerfilter =
    kategoriAktif === "semua"
      ? daftarBuku
      : daftarBuku.filter((buku) => buku.penulis === kategoriAktif);

  wadahDaftar.replaceChildren(...bukuTerfilter.map(buatKartu));
  pesanKosong.hidden = bukuTerfilter.length > 0;
}

function renderTabel() {
  wadahTabel.replaceChildren(
    ...daftarBuku.map((buku, indeks) => {
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

filter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-kategori]");
  if (!tombol || !filter.contains(tombol)) return;

  kategoriAktif = tombol.dataset.kategori;
  filter.querySelectorAll("button[data-kategori]").forEach((item) => {
    const aktif = item === tombol;
    item.classList.toggle("aktif", aktif);
    item.setAttribute("aria-pressed", String(aktif));
  });

  renderKoleksi();
});

formBuku.addEventListener("input", () => {
  pesanGalat.textContent = "";
  pesanGalat.classList.remove("tampil");
});

formBuku.addEventListener("submit", (event) => {
  event.preventDefault();

  const dataForm = new FormData(formBuku);
  const judul = dataForm.get("judul").trim();
  const penulis = dataForm.get("penulis").trim();

  if (!judul || !penulis) {
    pesanGalat.textContent = "Judul dan nama penulis tidak boleh kosong.";
    pesanGalat.classList.add("tampil");
    return;
  }

  daftarBuku.push({
    judul,
    penulis,
    tahun: Number(dataForm.get("tahun")),
    rating: Number(dataForm.get("rating")),
  });

  formBuku.reset();
  pesanGalat.textContent = "";
  pesanGalat.classList.remove("tampil");
  renderTabel();
  renderKoleksi();
});

renderTabel();
renderKoleksi();
