<template>
  <v-btn @click="openModal" icon="mdi-account-plus" />
</template>
<script setup lang="ts">
import { TypesForm, baseEmployee } from '@/models/IEmploye'
import { useEmployeeStore } from '@/stores/employeeStore'
// Components

const employeeStore = useEmployeeStore()

const openModal = () => {
  employeeStore.openForm(baseEmployee, TypesForm.Create)
}
</script>
