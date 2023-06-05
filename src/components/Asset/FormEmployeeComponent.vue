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

          <v-col cols="12"> <v-card-subtitle> Asignar activo </v-card-subtitle></v-col>
          <v-col cols="12" sm="6" v-if="show(TypesForm.Edit)">
            <v-autocomplete
              v-model="asset"
              :items="assetStore.assetList"
              label="Activos"
              item-title="nombreItem"
              item-value="id"
            ></v-autocomplete>
          </v-col>
          <v-col sm="6">
            <v-text-field label="Devolucion*" type="date" v-model="date" required></v-text-field>
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
      <v-btn v-if="show(TypesForm.Create)" color="blue-darken-1" variant="text" @click="create">
        Crear
      </v-btn>
      <v-btn v-else color="success" @click="edit">Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
//import { useAssetStore } from '@/stores/asset'
import { useEmployeeStore } from '@/stores/employeeStore'
import { useAssetStore } from '@/stores/asset'
import { TypesForm, type IEmploye, type TypeForm } from '@/models/IEmploye'
import { ref, type Ref } from 'vue'
import { computed } from 'vue'
import { watch } from 'vue'
import { type IAsignation } from '@/models/IAsignation'
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
let asignation = employeeStore.asignation
const asset: Ref<number | null> = ref(null)
const date = ref('')
//const asignation:Ref<IAsignation|undefined > = ref()

// methods

const create = async () => {
  employeeStore.employee = employee.value
  await employeeStore.newEmployee()
  employeeStore.closeForm()
}
const edit = async () => {
  if (asset.value && asset.value > 0)
    employeeStore.asignation = {
      itemId: asset.value,
      id_persona: employee.value.id!,
      dia_asignacion: new Date(),
      dia_entrega: new Date(date.value),
      dia_liberacion: new Date(date.value)
    }
  if (employeeStore.asignation.itemId)
    // si no tien id se crea uno nuevo
    //if (!employee.id) await employeeStore.newEmployee()
    // si tiene registro se crea uno nuevo
    employeeStore.newRegister()
  employeeStore.closeForm()
}

const liberar = async () => {
  employeeStore.liberarAsset()
}

const show = (type: TypeForm) => {
  return employeeStore.formEmployee.type === type
}

watch(date, (value) => {
  console.log(value)
})
</script>
