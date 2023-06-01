<template>
    <v-btn @click="assetStore.modalCreate = true" icon="mdi-office-building-plus" />
</template>
<script setup lang="ts">
import { useAssetStore } from '@/stores/asset'
// Components


const assetStore = useAssetStore()
</script>