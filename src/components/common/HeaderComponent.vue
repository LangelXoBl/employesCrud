<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="appStore.drawer = !appStore.drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Employees</v-app-bar-title>
    <CreateEmployeeComponent />
    <CreateAssetComponent />
  </v-app-bar>
  <NavigationDrawer></NavigationDrawer>
  <v-dialog v-model="assetStore.modalCreate" persistent width="1024">
    <FormAssetComponent />
  </v-dialog>

  <v-dialog v-model="employeeStore.formEmployee" persistent width="1024">
    <FormEmployeeComponent />
  </v-dialog>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useAssetStore } from '@/stores/asset'
import { useEmployeeStore } from '@/stores/employeeStore'
// Componets
import NavigationDrawer from './NavigationDrawer.vue'
import CreateAssetComponent from '@/components/Asset/CreateAssetComponent.vue'
import FormAssetComponent from '../Asset/FormAssetComponent.vue'
import CreateEmployeeComponent from '../Asset/CreateEmployeeComponent.vue'
import FormEmployeeComponent from '../Asset/FormEmployeeComponent.vue'

const appStore = useAppStore()
const assetStore = useAssetStore()
const employeeStore = useEmployeeStore()
</script>
