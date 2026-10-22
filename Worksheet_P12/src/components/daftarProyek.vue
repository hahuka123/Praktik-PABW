<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'

const proyekTersaring = computed(() => {
  if (state.kategoriAktif === 'semua') return state.daftarProyek
  return state.daftarProyek.filter(p => p.kategori === state.kategoriAktif)
})
</script>

<template>
  <section class="daftar-proyek">
    <p v-if="state.memuat">Memuat data...</p>
    <p v-else-if="state.galat">{{ state.galat }}</p>
    <p v-else-if="proyekTersaring.length === 0">Belum ada data.</p>

    <div v-else class="grid-proyek">
      <article v-for="proyek in proyekTersaring" :key="proyek.id" class="kartu-proyek">
        <h3>{{ proyek.judul }}</h3>
        <p>{{ proyek.deskripsi }}</p>
        <button @click="tambahFavorit(proyek.id)">
          {{ state.favorit.includes(proyek.id) ? '★ Favorit' : '☆ Tambah Favorit' }}
        </button>
      </article>
    </div>
  </section>
</template>