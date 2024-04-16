<script>
import {StoreApiService} from "../services/store-api.service.js";

export default {
  name: "side-menu",
  props:{
    visible:Boolean
  },
  data(){
    return {
      products: [],
      category:[],
      errors:[],
      storeApi: new StoreApiService()
    }
  },
  created() {
    this.storeApi.getCategories().then((response) => {
      this.category = response.data;
    }).catch((error) => {
      this.errors.push(error);
    });
  }
}
</script>

<template>
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" header="Sidebar" class="w-full md:w-20rem lg:w-30rem">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
  </div>
</template>

<style scoped>

</style>