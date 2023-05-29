<template>
  <v-col cols="12" class="ma-4">
    <v-row>
      <v-btn prepend-icon="mdi-plus" color="green" class="mr-4">Agregar Empleado</v-btn>
      <v-btn prepend-icon="mdi-plus" color="blue-grey">Agregar Activo</v-btn>
    </v-row>
  </v-col>

  <v-table class="mx-10">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header" class="text-left">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employeeStore.employeeList" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.lastname }}</td>
        <td>{{ employee.curp }}</td>
        <td>{{ employee.rfc }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.fechaNacimiento }}</td>
        <td><v-btn color="primary" icon="mdi-eye" size="small"></v-btn></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore'

const employeeStore = useEmployeeStore()
onMounted(employeeStore.fetchEmployees)

const headers = ["Name", "LastName", "CURP", "RFC", "Email", "Fecha de Nacimiento", "Opciones"]

</script>
