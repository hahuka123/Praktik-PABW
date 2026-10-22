<script setup>
defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <div>
        <input type="checkbox" id="tema" class="pengalih-tema" />
        <label for="tema" class="tombol-tema">Tema gelap / terang</label>
        <h1>{{ profil.nama }}</h1>
        <p>{{ profil.peran }}</p>
      </div>
      <nav class="navbar" aria-label="Navigasi halaman">
        <ul>
          <li><a href="#daftar-buku">Daftar Buku</a></li>
          <li><a href="#koleksi-buku">Koleksi</a></li>
          <li><a href="#tambah-buku">Tambah Buku</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
