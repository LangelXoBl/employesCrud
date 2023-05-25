<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props"> {{ countStore.changes }}</v-btn>
        </template>

        <v-list>
            <template v-for="(item, i) in history" :key="i">
                <v-list-item v-if="i < 5">
                    <v-list-item-title>{{ item.type }}</v-list-item-title>
                    <template v-slot:append>
                        <v-icon>{{ icon(item.type.valueOf()) }}</v-icon>
                    </template>
                </v-list-item>
                <v-list-item v-if="i == 5">
                    <v-list-item-title>Ver mas...</v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-menu>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const countStore = useCounterStore();

const history = countStore.history

const icon = (type: string): string => {
    return type == "increment" ? "mdi-plus" : "mdi-minus"
}


</script>