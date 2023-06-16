<template>
  <v-table class="ma-10">
    <template v-slot:top>
      <h1>Tabla de Activos</h1>
    </template>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" class="text-left">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="asset in assetStore.assetList" :key="asset.id">
        <td>{{ asset.nombreItem }}</td>
        <td>{{ asset.description }}</td>
        <td>{{ asset.status ? 'Disponible' : 'No disponible' }}</td>
        <td>
          <v-btn density="comfortable" color="blue" icon="mdi-pencil" @click="edit(asset)"></v-btn>
        </td>
        <td>
          <v-btn
            density="comfortable"
            color="red"
            icon="mdi-delete"
            @click="assetStore.removeAsset(asset.id!)"
          ></v-btn>
        </td>
        <!-- <td>
          <v-btn
            color="primary"
            icon="mdi-eye"
            size="small"
            @click="assetStore.modalCreate = true"
          ></v-btn>
        </td> -->
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
//import { useEmployeeStore } from '@/stores/employeeStore'
import { useAssetStore } from '@/stores/asset'
import type { IAsset } from '@/models/IAsset'
// components

const assetStore = useAssetStore()
onMounted(assetStore.fetchAssets)

const headers = ['Nombre', 'Descricion', 'Disponible']

const edit = (asset: IAsset) => {
  assetStore.typeModal = 'edit'
  assetStore.asset = asset
  assetStore.modalCreate = true
}
</script>
