<script setup>
import { ref } from 'vue'

const pesan = ref('')

function kirimPesan() {
  alert(`Pesan terkirim: ${pesan.value}`)
  pesan.value = ''
}
</script>

<template>
  <form @submit.prevent="kirimPesan" class="form-kontak">
    <h2>Hubungi Saya</h2>
    <textarea v-model="pesan" placeholder="Tulis pesan Anda..."></textarea>
    <button type="submit">Kirim</button>
  </form>
</template>