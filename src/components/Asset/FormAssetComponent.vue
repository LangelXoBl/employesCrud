<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Activo</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Nombre*"
              v-model="assetStore.asset.nombreItem"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <v-text-field
              label="Descripcion"
              v-model="assetStore.asset.description"
              hint="example of helper text only on focus"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-switch label="Status" v-model="assetStore.asset.status"></v-switch>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="close"> Close </v-btn>
      <v-btn v-if="assetStore.typeModal == 'create'" color="green" variant="text" @click="create">
        Save
      </v-btn>
      <v-btn v-else color="blue-darken-1" variant="text" @click="edit"> Editar </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { baseAsset } from '@/models/IAsset'
import { useAssetStore } from '@/stores/asset'

const assetStore = useAssetStore()

const create = () => {
  assetStore.asset.id = 0
  assetStore.newAsset()
  assetStore.modalCreate = false
}

const close = () => {
  assetStore.asset = baseAsset
  assetStore.modalCreate = false
}

const edit = () => {
  assetStore.editAsset()
  assetStore.modalCreate = false
}
</script>
