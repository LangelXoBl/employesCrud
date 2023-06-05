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
          <v-col cols="12" sm="6" v-if="show(TypesForm.Edit)">
            <v-autocomplete
              :items="assetStore.assetList"
              label="Asiganar activo"
              item-title="nombreItem"
              item-value="id"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <!-- <template v-if="employeeStore.register.id == 0"> -->
        <!-- <template v-if="props.use == 'edit'">
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
        <p v-else>sin activos asignados</p> -->
        <p>{{ employeeStore.formEmployee.type }}</p>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" variant="text" @click="employeeStore.closeForm"> Cerrar </v-btn>
      <v-btn color="blue-darken-1" variant="text" @click="create"> Crear </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
//import { useAssetStore } from '@/stores/asset'
import { useEmployeeStore } from '@/stores/employeeStore'
import { useAssetStore } from '@/stores/asset'
import { TypesForm, type IEmploye, type TypeForm } from '@/models/IEmploye'
import { ref, type Ref } from 'vue'

//type typeForm = 'create' | 'edit'
TypesForm
// interface Props {
//   use: typeForm
// }

// props
//const props = withDefaults(defineProps<Props>(), { use: 'edit' })

// stores
const employeeStore = useEmployeeStore()
const assetStore = useAssetStore()

// data
// con esto se rompe la referencia y se hace dinamico empleoyee
const employee: Ref<IEmploye> = ref(JSON.parse(JSON.stringify(employeeStore.employee)))
//let employee = employeeStore.employee
let register = employeeStore.register

// methods

const create = async () => {
  employeeStore.employee = employee.value
  await employeeStore.newEmployee()
  employeeStore.closeForm()
}
const save = async () => {
  // si no tien id se crea uno nuevo
  //if (!employee.id) await employeeStore.newEmployee()
  // si tiene registro se crea uno nuevo
  if (register.id_item) employeeStore.newRegister()

  employeeStore.formEmployee.status = false
}

const liberar = async () => {
  employeeStore.liberarAsset()
}

const show = (type: TypeForm) => {
  return employeeStore.formEmployee.type === type
}
</script>
