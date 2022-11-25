<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="text-white main-section" style="background-image: url('https://r4.wallpaperflare.com/wallpaper/905/666/494/background-render-fon-bitcoin-bitcoin-hd-wallpaper-c201d2509d865e3bba08e26510b8d9f2.jpg');">
      <q-toolbar class="transparent">

        <q-toolbar-title>
          Sitio Web de Cryptomonedas
        </q-toolbar-title>

        <div>Multimedia y Diseño Web v{{ $q.version }}</div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>

      <div class="q-mt-lg">
        <h1 class="text-center" style="font-family: Arial, Helvetica, sans-serif; font-weight: bolder;">Las Cryptomonedas</h1>
      </div>
    </q-header>

    <q-page-container style="padding-top: 0;">
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-black" style="position: relative">
      <q-toolbar>
        <q-toolbar-title class="text-center" style="font-size: 14px;">Copyright © Todos los derechos reservados</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style>
.main-section {
  justify-content: center;
  position: relative;
  height: 80vh;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  overflow: hidden;
}
</style>
