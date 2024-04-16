<script>
import PvCard from "../../main.js";
import {Product} from "../model/product.entity.js";

export default {
  name: "product-card",
  components: {PvCard},
  props: {
    product: {
      type: Product,
      required: true
    }
  },
}
</script>

<template>
  <pv-card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :alt="product.name" :src="product.image" />
    </template>
    <template #title>{{product.name}}</template>
    <template #subtitle>{{product.category}}</template>
    <template #content>
      <p class="m-0">
        <span class="font-bold">Price:</span> {{product.price}}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Save" class="w-full" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>