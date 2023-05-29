<template>
  <HeaderComponent />
  <v-main>
    <EmployeeTableComponent />
  </v-main>
  <FooterComponent />
</template>

<script lang="ts" setup>
import EmployeeTableComponent from '@/components/EmployeeTableComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue'
import HeaderComponent from '@/components/common/HeaderComponent.vue'
</script>
