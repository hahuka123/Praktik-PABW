const wadahDaftar = document.querySelector("#daftar");
const wadahTabel = document.querySelector("#daftar-tabel");
const pesanKosong = document.querySelector("#kosong");
const muatPesan = document.querySelector("#muat");
const filter = document.querySelector("#filter");

let kategoriAktif = "semua";
let dataSemuaBuku = [];

// 1. Fungsi Pembantu Pembuat Elemen
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

// 2. Rendering Tabel Daftar Buku
function renderTabel(daftar = []) {
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

// 3. Rendering Kartu Koleksi Buku Berdasarkan Filter
function terapkanFilter() {
  if (!wadahDaftar) return;

  const terfilter =
    kategoriAktif === "semua"
      ? dataSemuaBuku
      : dataSemuaBuku.filter((buku) => buku.penulis === kategoriAktif);

  wadahDaftar.textContent = "";

  if (!terfilter || terfilter.length === 0) {
    if (pesanKosong) {
      pesanKosong.textContent = "Buku tidak ditemukan untuk kategori ini.";
      pesanKosong.hidden = false;
    }
    return;
  }

  if (pesanKosong) pesanKosong.hidden = true;

  terfilter.forEach((buku) => {
    wadahDaftar.append(buatKartu(buku));
  });
}

// 4. Listener Klik Tombol Filter
if (filter) {
  filter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-kategori]");
    if (!tombol || !filter.contains(tombol)) return;

    kategoriAktif = tombol.dataset.kategori;
    filter.querySelectorAll("button[data-kategori]").forEach((item) => {
      const aktif = item === tombol;
      item.classList.toggle("aktif", aktif);
      item.setAttribute("aria-pressed", String(aktif));
    });

    terapkanFilter();
  });
}

// 5. Fungsi Ekspor untuk Lembar D
export function aturMemuat(sedangMemuat) {
  if (muatPesan) {
    muatPesan.hidden = !sedangMemuat;
  }
}

export function tampilkanGalat(pesan) {
  if (wadahDaftar) {
    wadahDaftar.textContent = pesan;
  }
}

export function render(daftar = []) {
  dataSemuaBuku = daftar; // Simpan data dari API
  renderTabel(daftar); // Tampilkan di tabel
  terapkanFilter(); // Tampilkan di kartu koleksi
}
