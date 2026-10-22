<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/kepalaProfil.vue'
import TombolFilter from './components/tombolFilter.vue'
import DaftarProyek from './components/daftarProyek.vue'
import FormKontak from './components/formKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())
  } catch {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <DaftarProyek>
        <TombolFilter />
      </DaftarProyek>
      <FormKontak />
    </main>

    <footer>
      <p>Nama: Hanif Huwaidi Kadzim</p>
      <p>NIM: 25523173</p>
      <p>Tahun: 2026</p>
    </footer>
  </div>
</template>
