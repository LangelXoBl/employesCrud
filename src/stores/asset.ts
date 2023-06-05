import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getListAssets, createAsset } from '@/api/items'
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

  async function newAsset() {
    await createAsset(asset.value)
  }

  return { asset, assetList, modalCreate, fetchAssets, newAsset }
})
