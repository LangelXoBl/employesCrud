<template>
    <v-navigation-drawer v-model="appStore.drawer" absolute bottom temporary>
        <v-list>
            <v-list-item v-for="route in routes" :key="route.path" @click="navigate(route.path)">
                <template v-slot:prepend>
                    <v-icon :icon="route.icon"></v-icon>
                </template>
                <v-list-item-title>{{ route.name }}</v-list-item-title>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script setup lang="ts">
import router from '@/router';
import { useAppStore } from '@/stores/app';
import { routes } from '@/router/index'

const appStore = useAppStore()

function navigate(route: string) {
    router.push(route)
    appStore.drawer = false;
}
</script>
