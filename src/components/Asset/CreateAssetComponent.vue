<template>
  <v-btn @click="open" icon="mdi-office-building-plus" />
</template>
<script setup lang="ts">
import { useAssetStore } from '@/stores/asset'
// Components

const assetStore = useAssetStore()
const open = () => {
  assetStore.typeModal = 'create'
  assetStore.modalCreate = true
}
</script>
