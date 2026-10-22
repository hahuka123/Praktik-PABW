import { reactive } from 'vue'

const KUNCI = 'pabw-p11'
const VERSI = 2

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: ''
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function isiProyek(data) {
  state.daftarProyek = data
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter(fId => fId !== id)
  } else {
    state.favorit.push(id)
  }
}

export function tambahBuku(buku) {
  state.daftarProyek.unshift(buku)
}

export function aturUlang() {
  state.kategoriAktif = 'semua'
  state.favorit = []
}

export function simpan(nilaiState) {
  localStorage.setItem(
    KUNCI,
    JSON.stringify({
      versi: VERSI,
      kategoriAktif: nilaiState.kategoriAktif,
      favorit: nilaiState.favorit,
    }),
  )
}

export function muat() {
  try {
    const teks = localStorage.getItem(KUNCI)
    if (!teks) return null

    const data = JSON.parse(teks)
    if (data?.versi !== VERSI) {
      localStorage.removeItem(KUNCI)
      return null
    }
    return data
  } catch {
    localStorage.removeItem(KUNCI)
    return null
  }
}

export function pulihkan(simpanan) {
  if (simpanan) {
    if (simpanan.kategoriAktif) state.kategoriAktif = simpanan.kategoriAktif
    if (Array.isArray(simpanan.favorit)) state.favorit = simpanan.favorit
  }
}