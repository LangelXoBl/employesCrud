<template>
    <v-app-bar color="primary">
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Employees</v-app-bar-title>
        <v-spacer></v-spacer>
        <history-component />
    </v-app-bar>
</template>

<script setup lang="ts">
import HistoryComponent from '../HistoryComponent.vue';
</script>
