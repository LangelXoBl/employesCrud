<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Contador</h3>
          <div>Prueba de Pinia con un contador</div>
        </div>
      </v-card-title>
      <v-card-text>
        {{ countStore.count }}
      </v-card-text>
      <v-card-actions>
        <v-btn flat color="primary" @Click="countStore.increment">increment</v-btn>
        <v-btn flat color="primary" @Click="countStore.decrement">decrement</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const countStore = useCounterStore();

</script>
