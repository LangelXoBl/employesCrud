<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Empleado</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="5">
            <v-text-field label="Nombre*" required v-model="employee.name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="5">
            <v-text-field
              label="Apelldos"
              hint="example of helper text only on focus"
              v-model="employee.lastname"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field
              label="N° Empleado*"
              persistent-hint
              required
              v-model="employee.numero_empleado"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="CURP*"
              persistent-hint
              required
              v-model="employee.curp"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="RFC*"
              persistent-hint
              required
              v-model="employee.rfc"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="employee.fechaNacimiento" label="Date"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" v-model="employee.email" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              v-model="register.id_item"
              :items="assetStore.assetList"
              label="Asiganar activo"
              item-title="nombreItem"
              item-value="id"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <template v-if="employeeStore.register.id">
          <v-row>
            <v-col>
              <v-text-field
                v-model="register.items!.nombreItem"
                disabled
                name="nombe"
                label="descripcion"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="register.items!.description"
                disabled
                name="nombe"
                label="descripcion"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-checkbox v-model="register.items!.status" @click="liberar"></v-checkbox>
            </v-col>
          </v-row>
        </template>
        <p v-else>sin activos asignados</p>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="close"> Close </v-btn>
      <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
//import { useAssetStore } from '@/stores/asset'
import { baseEmployee, useEmployeeStore } from '@/stores/employeeStore'
import { useAssetStore } from '@/stores/asset'

const employeeStore = useEmployeeStore()
const assetStore = useAssetStore()

let employee = employeeStore.employee
let register = employeeStore.register

const close = () => {
  employeeStore.employee = baseEmployee
  employeeStore.formEmployee = false
}

const save = async () => {
  // si no tien id se crea uno nuevo
  if (!employee.id) await employeeStore.newEmployee()
  // si tiene registro se crea uno nuevo
  if (register.id_item) employeeStore.newRegister()

  employeeStore.formEmployee = false
}

const liberar = async () => {
  employeeStore.liberarAsset()
}
</script>
