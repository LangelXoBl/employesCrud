<template>
  <HeaderComponent />
  <v-main>
    <RouterView></RouterView>
  </v-main>
  <FooterComponent />
</template>

<script lang="ts" setup>
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
</script>
