import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getListAssets } from '@/api/items'
import { baseAsset, type IAsset } from '@/models/IAsset'

export const useAssetStore = defineStore('asset', () => {
  //state
  const modalCreate: Ref<boolean> = ref(false)
  const asset: Ref<IAsset> = ref(baseAsset)
  const assetList: Ref<IAsset[]> = ref([])

  // actions
  async function fetchAssets() {
    assetList.value = await getListAssets()
  }

  return { asset, assetList, modalCreate, fetchAssets }
})
