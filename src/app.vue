<script>
  import {StoreApiService} from "./store/services/store-api.service.js";

  export default {
    name: "app",
    components:{},
    data(){
      return{
        visible: false,
        products: [],
        category:[],
        errors:[],
        storeApi: new StoreApiService()
      }
    },
    created() {

    },
    methods:{

      getProductFromCategoryId(categoryId){
        this.storeApi.getProductByCategoryId(categoryId).then((response) => {
          this.products = response.data;
        }).catch((error) => {
          this.errors.push(error);
        });
      },

      toggleSidebar(){
        this.visible = !this.visible;
      }
    }

  }
</script>

<template>

</template>