<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="appStore.drawer = !appStore.drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Employees</v-app-bar-title>

    <v-btn icon="mdi-account-plus" class="mr-4"></v-btn>
    <CreateAssetComponent />
  </v-app-bar>
  <NavigationDrawer></NavigationDrawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
// Componets
import NavigationDrawer from './NavigationDrawer.vue'
import CreateAssetComponent from '@/components/Asset/CreateAssetComponent.vue'

const appStore = useAppStore()
</script>
