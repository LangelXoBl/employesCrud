import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getListAssets, createAsset, deleteAsset, updateAsset } from '@/api/items'
import { baseAsset, type IAsset } from '@/models/IAsset'

export const useAssetStore = defineStore('asset', () => {
  //state
  const modalCreate: Ref<boolean> = ref(false)
  const asset: Ref<IAsset> = ref(baseAsset)
  const assetList: Ref<IAsset[]> = ref([])
  const typeModal = ref('create')

  // actions
  async function fetchAssets() {
    assetList.value = await getListAssets()
  }

  async function newAsset() {
    await createAsset(asset.value)
    fetchAssets()
  }

  async function removeAsset(id: number) {
    const result = await deleteAsset(id)
    if (result)
      assetList.value.splice(
        assetList.value.findIndex((item: IAsset) => item.id == id),
        1
      )
  }

  async function editAsset() {
    await updateAsset(asset.value)
  }

  return { asset, assetList, modalCreate, typeModal, fetchAssets, newAsset, editAsset, removeAsset }
})
