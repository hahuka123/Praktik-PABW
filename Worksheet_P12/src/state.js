import { reactive } from 'vue'

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

export function simpan(nilaiState) {
  localStorage.setItem('pabw-p11', JSON.stringify({
    kategoriAktif: nilaiState.kategoriAktif,
    favorit: nilaiState.favorit
  }))
}

export function muat() {
  try {
    const data = localStorage.getItem('pabw-p11')
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export function pulihkan(simpanan) {
  if (simpanan) {
    if (simpanan.kategoriAktif) state.kategoriAktif = simpanan.kategoriAktif
    if (Array.isArray(simpanan.favorit)) state.favorit = simpanan.favorit
  }
}