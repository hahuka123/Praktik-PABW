<script setup>
import { computed } from 'vue'
import { saring } from '../data.js'
import { state, tambahFavorit } from '../state.js'

const proyekTersaring = computed(() =>
  saring(state.daftarProyek, state.kategoriAktif),
)
</script>

<template>
  <section class="utama" id="daftar-buku">
    <div class="kartu">
      <h2>Daftar Buku</h2>
      <div class="table-wrap">
        <table>
          <caption>
            Buku yang sudah selesai dibaca
          </caption>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Judul Buku</th>
              <th scope="col">Penulis</th>
              <th scope="col">Tahun Selesai</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(buku, indeks) in state.daftarProyek" :key="buku.id">
              <td>{{ indeks + 1 }}</td>
              <td>{{ buku.judul }}</td>
              <td>{{ buku.penulis }}</td>
              <td>{{ buku.tahun }}</td>
              <td>{{ buku.rating }}/10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <slot />

    <p v-if="state.memuat" id="muat" role="status">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-galat tampil" role="alert">
      {{ state.galat }}
    </p>
    <p
      v-else-if="proyekTersaring.length === 0"
      class="pesan-kosong"
      id="kosong"
      role="status"
    >
      Buku tidak ditemukan untuk kategori ini.
    </p>

    <div v-else class="galeri" id="daftar" aria-live="polite">
      <article
        v-for="buku in proyekTersaring"
        :key="buku.id"
        class="kartu kartu_isi"
      >
        <div class="kartu_kaki">
          <h3 class="kartu_judul">{{ buku.judul }}</h3>
          <button
            type="button"
            class="favorit"
            :aria-pressed="state.favorit.includes(buku.id)"
            :aria-label="`${state.favorit.includes(buku.id) ? 'Hapus' : 'Simpan'} ${buku.judul} ${state.favorit.includes(buku.id) ? 'dari' : 'ke'} favorit`"
            @click="tambahFavorit(buku.id)"
          >
            {{ state.favorit.includes(buku.id) ? '★' : '☆' }}
          </button>
        </div>

        <figure v-if="buku.gambar">
          <img
            :src="buku.gambar"
            :alt="`Sampul buku ${buku.judul}`"
            width="200"
          />
          <figcaption>{{ buku.judul }}</figcaption>
        </figure>

        <p>Penulis: {{ buku.penulis }}</p>
        <p>Tahun selesai: {{ buku.tahun }}</p>
        <p>Rating: {{ buku.rating }}/10</p>
        <p v-if="buku.deskripsi">{{ buku.deskripsi }}</p>
      </article>
    </div>
  </section>
</template>
