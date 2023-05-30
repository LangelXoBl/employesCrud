import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'




export const useAssetStore = defineStore('asset', () => {
    const modalCreate: Ref<boolean> = ref(false)

    return { modalCreate }
})