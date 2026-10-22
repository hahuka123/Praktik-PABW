<script setup>
import { ref } from 'vue'
import { tambahBuku } from '../state.js'

const judul = ref('')
const penulis = ref('')
const tahun = ref('')
const rating = ref('')
const pesan = ref('')

function simpanBuku() {
  tambahBuku({
    id: Date.now(),
    judul: judul.value.trim(),
    penulis: penulis.value.trim(),
    tahun: Number(tahun.value),
    rating: Number(rating.value),
    gambar: '',
    deskripsi: '',
  })

  judul.value = ''
  penulis.value = ''
  tahun.value = ''
  rating.value = ''
  pesan.value = 'Buku berhasil ditambahkan.'
}
</script>

<template>
  <aside class="sisi" id="tambah-buku" aria-labelledby="judul-tambah-buku">
    <div class="kartu">
      <h2 id="judul-tambah-buku">Tambah Buku</h2>
      <form class="form-kolom" @submit.prevent="simpanBuku">
        <label for="judul">Judul Buku</label>
        <input
          id="judul"
          v-model="judul"
          type="text"
          name="judul"
          placeholder="Masukkan judul buku"
          required
        />

        <label for="penulis">Penulis</label>
        <input
          id="penulis"
          v-model="penulis"
          type="text"
          name="penulis"
          placeholder="Masukkan nama penulis"
          required
        />

        <label for="tahun">Tahun Selesai</label>
        <input
          id="tahun"
          v-model="tahun"
          type="number"
          name="tahun"
          min="0"
          step="1"
          placeholder="Contoh: 2024"
          required
        />

        <label for="rating">Rating</label>
        <input
          id="rating"
          v-model="rating"
          type="number"
          name="rating"
          min="1"
          max="10"
          step="1"
          placeholder="1 sampai 10"
          required
        />

        <p v-if="pesan" class="pesan-galat tampil" role="status">{{ pesan }}</p>
        <button type="submit" id="tombol-simpan">Simpan Buku</button>
      </form>
    </div>
  </aside>
</template>
