import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  const filter = document.querySelector("#filter");
  if (filter) {
    filter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button[data-kategori]");
      if (!tombol || !filter.contains(tombol)) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }
}
