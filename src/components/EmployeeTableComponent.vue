<template>
  <v-table class="ma-10">
    <template v-slot:top>
      <h1>Tabla de Empleados</h1>
    </template>
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
        <td>{{ dateView(employee.fechaNacimiento) }}</td>
        <td><v-btn color="primary" icon="mdi-eye" size="small"></v-btn></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore'
// components



const employeeStore = useEmployeeStore()
onMounted(employeeStore.fetchEmployees)

const headers = ["Name", "LastName", "CURP", "RFC", "Email", "Fecha de Nacimiento", "Opciones"]

const dateView = (date: Date): string => {
  return new Date(date).toLocaleDateString()
}

</script>
