import { ambilProyek } from "./api.js";
import { render, aturMemuat, tampilkanGalat } from "./dom.js";

async function muat() {
  aturMemuat(true);
  try {
    const data = await ambilProyek();
    render(data);
  } catch (galat) {
    tampilkanGalat("Gagal memuat data: " + galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();
