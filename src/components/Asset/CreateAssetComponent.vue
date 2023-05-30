<template>
    <v-dialog v-model="assetStore.modalCreate" persistent width="1024">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" prepend-icon="mdi-plus" color="blue-grey">Agregar Activo</v-btn>
        </template>
        <FormAssetComponent />
    </v-dialog>
</template>
<script setup lang="ts">
import { useAssetStore } from '@/stores/asset'
// Components
import FormAssetComponent from './FormAssetComponent.vue';

const assetStore = useAssetStore()
</script>