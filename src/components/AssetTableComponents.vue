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
        <td><v-checkbox v-model="asset.status" @click="console.log(asset.id)"></v-checkbox></td>
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
// components

const assetStore = useAssetStore()
onMounted(assetStore.fetchAssets)

const headers = ['Nombre', 'Descricion', 'Disponible']
</script>
