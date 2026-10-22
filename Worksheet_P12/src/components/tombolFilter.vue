<script setup>
import { state, pilihKategori } from '../state.js'

const daftarKategori = ['semua', 'web', 'mobile', 'desain']
</script>

<template>
  <div class="tombol-filter">
    <button 
      v-for="kat in daftarKategori" 
      :key="kat"
      :class="{ aktif: state.kategoriAktif === kat }"
      @click="pilihKategori(kat)"
    >
      {{ kat }}
    </button>
  </div>
</template>