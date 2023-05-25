<template>
  <HeaderComponent />
  <v-main>
    <HelloWorld />
    <HelloWorld />
  </v-main>
  <FooterComponent />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
</script>
