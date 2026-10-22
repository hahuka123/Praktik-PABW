<script setup>
import { pilihKategori, aturUlang, state } from '../state.js'

const daftarKategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'Tere Liye', label: 'Tere Liye' },
  { nilai: 'Andrea Hirata', label: 'Andrea Hirata' },
]
</script>

<template>
  <section id="koleksi-buku" aria-labelledby="judul-koleksi">
    <h2 id="judul-koleksi">Koleksi Buku</h2>
    <div
      id="filter"
      class="baris-filter"
      style="display: flex; gap: var(--space-2); margin-bottom: var(--space-4)"
    >
      <button
        v-for="kategori in daftarKategori"
        :key="kategori.nilai"
        type="button"
        :class="{ aktif: state.kategoriAktif === kategori.nilai }"
        :aria-pressed="state.kategoriAktif === kategori.nilai"
        @click="pilihKategori(kategori.nilai)"
      >
        {{ kategori.label }}
      </button>
      <button type="button" id="atur-ulang" @click="aturUlang">
        Atur ulang
      </button>
    </div>
  </section>
</template>
