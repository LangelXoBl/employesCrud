<template>
  <v-btn @click="employeeStore.formEmployee = true" icon="mdi-account-plus" />
</template>
<script setup lang="ts">
import { useEmployeeStore } from '@/stores/employeeStore'
// Components

const employeeStore = useEmployeeStore()
</script>
