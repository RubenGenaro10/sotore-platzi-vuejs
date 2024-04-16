<script>
import ProductCard from "./product-card.component.vue";

export default {
  name: "product-list",
  components:{ProductCard},
  props:{
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>

  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>

</template>

<style scoped>

</style>